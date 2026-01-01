"""
Report generation module.

Provides functions for generating formatted reports and exporting data.
"""

from __future__ import annotations

import json
import logging
from pathlib import Path
from typing import Optional

from daycare_rankings.data import get_all_daycares
from daycare_rankings.models import DaycareCenter

# Configure module logger
logger = logging.getLogger(__name__)


# Report template constants
REPORT_HEADER = """
╔══════════════════════════════════════════════════════════════════════════════╗
║        TOP 10 DAYCARE CENTERS IN RICHMOND BC, CANADA - 2025 RANKING          ║
╚══════════════════════════════════════════════════════════════════════════════╝

RANKING METHODOLOGY
═══════════════════
This ranking was compiled using comprehensive research from multiple sources:

📊 DATA SOURCES:
  • Google Reviews and ratings
  • TrustAnalytica reviews and ratings  
  • Reddit parent recommendations (r/richmondbc, r/vancouver)
  • Official daycare websites
  • BC Government childcare databases
  • Richmond Child Care Resource & Referral Centre information

📏 SCORING CRITERIA (weighted importance):
  1. Review Rating (30%) - Overall star rating from review platforms
  2. Review Volume (15%) - Number of reviews indicates consistency
  3. Parent Testimonials (20%) - Quality of detailed parent feedback
  4. Curriculum Quality (15%) - Educational philosophy and approach
  5. Facility & Safety (10%) - Modern facilities, safety compliance
  6. Value (10%) - Cost relative to services provided

💰 COST CONTEXT:
  • Richmond has some of Canada's highest childcare costs
  • BC Child Care Fee Reduction Initiative (CCFRI) reduces fees up to $900/month
  • Affordable Child Care Benefit (ACCB) provides up to $1,250/month for eligible families
  • $10 a Day ChildCareBC program can reduce costs to ~$200/month

"""

REPORT_FOOTER = """
╔══════════════════════════════════════════════════════════════════════════════╗
║                              SUMMARY & RECOMMENDATIONS                        ║
╚══════════════════════════════════════════════════════════════════════════════╝

🏆 BEST OVERALL: With Our Own Two Hands
   Perfect rating, exceptional Reggio-Emilia curriculum, ideal for preschoolers

👶 BEST FOR INFANTS: Kids R Us Childcare Centre  
   Specialized infant/toddler care, proven 28-year track record, excellent communication

📚 BEST MONTESSORI: Ironwood Montessori Academy
   Authentic Montessori with trained educators, covers ages 0-6, modern facility

♿ BEST INCLUSIVE: PAFN/SOAR Inclusive Preschool
   Life-changing support for children with autism and special needs

🏢 BEST CORPORATE: Kids & Company Richmond
   National brand quality, meals included, parent webcams, flexible options

🔬 BEST ACADEMIC: Genius Education Academy
   STEM focus, kindergarten prep, diverse enrichment (yoga, dance, French)

🏠 BEST HOME-BASED: Crystal Star Infant/Toddler Daycare
   Intimate 4-child environment, decades of experience, personalized care

💰 BEST VALUE: Creative Daycare (Sushma's)
   Licensed, ECE-qualified owner, affordable pricing, strong compliance record

📍 NEXT STEPS FOR PARENTS:
  1. Contact Richmond Child Care Resource & Referral Centre: 604-279-7020
  2. Use City of Richmond's online Child Care Locator map
  3. Apply for BC childcare subsidies (CCFRI, ACCB, $10 a Day program)
  4. Visit multiple facilities before making a decision
  5. Ask about waitlists - many top daycares have 6-12 month waits

═══════════════════════════════════════════════════════════════════════════════
Report generated based on research conducted in January 2025
Data sourced from public reviews, official websites, and government resources
═══════════════════════════════════════════════════════════════════════════════
"""


def generate_ranking_report() -> str:
    """
    Generate the complete ranking report as a formatted string.
    
    Returns:
        Formatted string containing the full ranking report
    """
    daycares = get_all_daycares()
    
    report_parts = [REPORT_HEADER]
    
    for daycare in daycares:
        report_parts.append(str(daycare))
    
    report_parts.append(REPORT_FOOTER)
    
    return "".join(report_parts)


def export_to_json(
    filename: Optional[str] = None,
    output_dir: Optional[Path] = None,
    indent: int = 2,
) -> Path:
    """
    Export the daycare data to JSON format.
    
    Args:
        filename: Output filename (default: daycare_rankings.json)
        output_dir: Output directory (default: current directory)
        indent: JSON indentation level
        
    Returns:
        Path to the created JSON file
        
    Raises:
        IOError: If file cannot be written
    """
    if filename is None:
        filename = "daycare_rankings.json"
    
    if output_dir is None:
        output_dir = Path.cwd()
    
    output_path = output_dir / filename
    
    daycares = get_all_daycares()
    
    data = {
        "title": "Top 10 Daycare Centers in Richmond BC, Canada",
        "generated_date": "2025-01-01",
        "methodology": {
            "data_sources": [
                "Google Reviews",
                "TrustAnalytica",
                "Reddit (r/richmondbc, r/vancouver)",
                "Official daycare websites",
                "BC Government databases",
            ],
            "scoring_criteria": {
                "review_rating": "30%",
                "review_volume": "15%",
                "parent_testimonials": "20%",
                "curriculum_quality": "15%",
                "facility_safety": "10%",
                "value": "10%",
            },
        },
        "daycares": [dc.to_dict() for dc in daycares],
    }
    
    try:
        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(data, f, indent=indent, ensure_ascii=False)
        logger.info(f"Exported data to {output_path}")
    except IOError as e:
        logger.error(f"Failed to write JSON file: {e}")
        raise
    
    return output_path
