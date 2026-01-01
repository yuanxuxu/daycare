#!/usr/bin/env python3
"""
Visualization module for Richmond BC Daycare Rankings.
Creates charts and visual comparisons of daycare centers.
"""

import os
from typing import List, Optional
from daycare_rankings import create_top_10_daycares, DaycareCenter, AgeGroup, CurriculumType


def create_rating_bar_chart() -> str:
    """Create an ASCII bar chart of daycare ratings."""
    daycares = create_top_10_daycares()
    
    chart = """
╔══════════════════════════════════════════════════════════════════════════════╗
║                         DAYCARE RATINGS COMPARISON                            ║
╚══════════════════════════════════════════════════════════════════════════════╝

Rating Scale: ▓ = 0.5 stars

"""
    
    max_name_len = max(len(dc.name[:30]) for dc in daycares)
    
    for dc in daycares:
        name = dc.name[:30].ljust(max_name_len)
        bar_length = int(dc.rating * 4)  # 4 blocks per star
        bar = "▓" * bar_length
        spaces = " " * (20 - bar_length)
        chart += f"  {dc.rank:2}. {name} │{bar}{spaces}│ {dc.rating}/5.0 ({dc.num_reviews} reviews)\n"
    
    return chart


def create_cost_comparison() -> str:
    """Create a cost comparison table."""
    daycares = create_top_10_daycares()
    
    table = """
╔══════════════════════════════════════════════════════════════════════════════╗
║                           MONTHLY COST COMPARISON                             ║
║                    (Before BC childcare subsidies applied)                    ║
╚══════════════════════════════════════════════════════════════════════════════╝

┌────┬─────────────────────────────────────┬──────────────────────────┬───────────┐
│Rank│ Daycare Name                        │ Monthly Cost Range       │ Rating    │
├────┼─────────────────────────────────────┼──────────────────────────┼───────────┤
"""
    
    for dc in daycares:
        name = dc.name[:35].ljust(35)
        cost = dc.monthly_cost_range[:24].ljust(24)
        rating = f"{dc.rating}/5.0".ljust(9)
        table += f"│ {dc.rank:2} │ {name} │ {cost} │ {rating} │\n"
    
    table += """└────┴─────────────────────────────────────┴──────────────────────────┴───────────┘

💡 SUBSIDY INFORMATION:
   • CCFRI can reduce fees by up to $900/month (ages 0-3) or $545/month (ages 3-5)
   • ACCB provides up to $1,250/month for eligible low/middle-income families
   • $10 a Day ChildCareBC program can reduce costs to ~$200/month
   • As of April 2024, waitlist fees are no longer permitted for CCOF providers
"""
    
    return table


def create_curriculum_breakdown() -> str:
    """Create a breakdown of daycares by curriculum type."""
    daycares = create_top_10_daycares()
    
    curriculum_groups = {}
    for dc in daycares:
        curr_type = dc.curriculum.value
        if curr_type not in curriculum_groups:
            curriculum_groups[curr_type] = []
        curriculum_groups[curr_type].append(dc)
    
    breakdown = """
╔══════════════════════════════════════════════════════════════════════════════╗
║                        CURRICULUM TYPE BREAKDOWN                              ║
╚══════════════════════════════════════════════════════════════════════════════╝

"""
    
    curriculum_descriptions = {
        "Reggio Emilia": "Child-led, inquiry-based learning through exploration and creativity",
        "Montessori": "Self-directed activity, hands-on learning, mixed-age classrooms",
        "Play-Based": "Learning through structured and unstructured play activities",
        "STEM-Focused": "Emphasis on science, technology, engineering, and math",
        "Inclusive/Special Needs": "Specialized support for children with developmental differences",
        "Progressive/Mixed": "Combination of multiple educational approaches"
    }
    
    for curr_type, dcs in curriculum_groups.items():
        breakdown += f"┌{'─'*78}┐\n"
        breakdown += f"│ 📚 {curr_type.upper():<73} │\n"
        breakdown += f"│ {curriculum_descriptions.get(curr_type, ''):<76} │\n"
        breakdown += f"├{'─'*78}┤\n"
        
        for dc in dcs:
            breakdown += f"│   #{dc.rank} {dc.name[:50]:<50} Rating: {dc.rating}/5.0 │\n"
        
        breakdown += f"└{'─'*78}┘\n\n"
    
    return breakdown


def create_age_group_guide() -> str:
    """Create a guide showing which daycares serve which age groups."""
    daycares = create_top_10_daycares()
    
    guide = """
╔══════════════════════════════════════════════════════════════════════════════╗
║                          AGE GROUP AVAILABILITY GUIDE                         ║
╚══════════════════════════════════════════════════════════════════════════════╝

Legend: ✓ = Available  · = Not Available

┌────┬────────────────────────────────┬────────┬─────────┬───────────┬──────────┐
│Rank│ Daycare Name                   │ Infant │ Toddler │ Preschool │ School   │
│    │                                │ 0-18mo │ 18-36mo │ 3-5 yrs   │ Age 5+   │
├────┼────────────────────────────────┼────────┼─────────┼───────────┼──────────┤
"""
    
    for dc in daycares:
        name = dc.name[:30].ljust(30)
        infant = "  ✓   " if AgeGroup.INFANT in dc.age_groups else "  ·   "
        toddler = "   ✓   " if AgeGroup.TODDLER in dc.age_groups else "   ·   "
        preschool = "    ✓    " if AgeGroup.PRESCHOOL in dc.age_groups else "    ·    "
        school = "    ✓   " if AgeGroup.SCHOOL_AGE in dc.age_groups else "    ·   "
        guide += f"│ {dc.rank:2} │ {name} │{infant}│{toddler}│{preschool}│{school}│\n"
    
    guide += """└────┴────────────────────────────────┴────────┴─────────┴───────────┴──────────┘

📌 RECOMMENDATIONS BY CHILD'S AGE:

   👶 INFANTS (0-18 months):
      → Kids R Us Childcare (#2) - Specialized infant care, 28-year track record
      → Crystal Star (#8) - Intimate 4-child environment, personalized care
      → Ironwood Montessori (#3) - Full-range coverage, can stay through preschool

   🧒 TODDLERS (18-36 months):
      → Kids R Us Childcare (#2) - Excellent communication via Lillio App
      → Genius Education Academy (#6) - STEM introduction, enrichment activities
      → YMCA Seasong (#7) - Modern facility, YMCA resources

   👧 PRESCHOOL (3-5 years):
      → With Our Own Two Hands (#1) - Perfect rating, Reggio-Emilia excellence
      → PAFN/SOAR (#4) - If child has special needs or autism
      → Ironwood Montessori (#3) - Kindergarten preparation focus
"""
    
    return guide


def create_decision_matrix() -> str:
    """Create a decision matrix to help parents choose."""
    
    matrix = """
╔══════════════════════════════════════════════════════════════════════════════╗
║                         DAYCARE DECISION MATRIX                               ║
║                    Match Your Priorities to the Best Option                   ║
╚══════════════════════════════════════════════════════════════════════════════╝

Answer these questions to find your ideal daycare:

┌─────────────────────────────────────────────────────────────────────────────┐
│ 1️⃣  WHAT IS YOUR CHILD'S AGE?                                               │
├─────────────────────────────────────────────────────────────────────────────┤
│ • Infant (0-18 months)    → Kids R Us (#2), Crystal Star (#8)              │
│ • Toddler (18-36 months)  → Kids R Us (#2), Genius Education (#6)          │
│ • Preschool (3-5 years)   → With Our Own Two Hands (#1), Ironwood (#3)     │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ 2️⃣  WHAT EDUCATIONAL PHILOSOPHY DO YOU PREFER?                              │
├─────────────────────────────────────────────────────────────────────────────┤
│ • Montessori (self-directed)     → Ironwood Montessori Academy (#3)        │
│ • Reggio-Emilia (inquiry-based)  → With Our Own Two Hands (#1)             │
│ • Play-Based (learning thru play)→ Kids R Us (#2), YMCA Seasong (#7)       │
│ • Academic/STEM focused          → Genius Education Academy (#6)           │
│ • Inclusive/Special Needs        → PAFN/SOAR Preschool (#4)                │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ 3️⃣  WHAT IS YOUR BUDGET (after subsidies)?                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│ • Budget-conscious (<$700/mo)    → Creative Daycare (#10), Ackroyd (#9)    │
│ • Mid-range ($700-$1,000/mo)     → YMCA Seasong (#7), Kids R Us (#2)       │
│ • Premium ($1,000+/mo)           → Ironwood (#3), Kids & Company (#5)      │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ 4️⃣  WHAT FEATURES MATTER MOST TO YOU?                                       │
├─────────────────────────────────────────────────────────────────────────────┤
│ • Meals included                 → Kids & Company (#5)                     │
│ • Parent webcam access           → Kids & Company (#5)                     │
│ • Daily photo/video updates      → Kids R Us (#2)                          │
│ • Small class sizes              → With Our Own Two Hands (#1)             │
│ • Very small group (home-based)  → Crystal Star (#8), Creative (#10)       │
│ • Modern facility                → Ironwood (#3), YMCA Seasong (#7)        │
│ • Outdoor/nature focus           → With Our Own Two Hands (#1)             │
│ • Long operating hours           → Ackroyd Children's Learning (#9)        │
│ • Corporate backup/stability     → Kids & Company (#5), YMCA (#7)          │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│ 5️⃣  DOES YOUR CHILD HAVE SPECIAL NEEDS?                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│ • Autism Spectrum Disorder       → PAFN/SOAR Inclusive Preschool (#4) ★    │
│ • Developmental differences      → PAFN/SOAR Inclusive Preschool (#4) ★    │
│ • Dietary restrictions/allergies → Kids R Us (#2), YMCA Seasong (#7)       │
│                                                                             │
│ ★ PAFN/SOAR is specifically designed for inclusive education with          │
│   professional behavioral support staff and high staff-to-child ratios.    │
└─────────────────────────────────────────────────────────────────────────────┘
"""
    
    return matrix


def create_all_visualizations() -> str:
    """Generate all visualizations combined."""
    output = ""
    output += create_rating_bar_chart()
    output += "\n" + "═" * 80 + "\n\n"
    output += create_cost_comparison()
    output += "\n" + "═" * 80 + "\n\n"
    output += create_curriculum_breakdown()
    output += "\n" + "═" * 80 + "\n\n"
    output += create_age_group_guide()
    output += "\n" + "═" * 80 + "\n\n"
    output += create_decision_matrix()
    
    return output


if __name__ == "__main__":
    print(create_all_visualizations())
