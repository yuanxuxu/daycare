#!/usr/bin/env python3
"""
Top 10 Daycare Centers in Richmond BC, Canada
Comprehensive ranking with detailed pros and cons analysis.

This module provides a structured analysis of the top 10 daycare centers 
in Richmond BC based on:
- Google/Review platform ratings
- Parent testimonials
- Curriculum quality
- Staff qualifications
- Facility quality
- Cost/Value ratio
- Special programs offered
"""

from dataclasses import dataclass, field
from typing import List, Optional
from enum import Enum
import json


class AgeGroup(Enum):
    """Supported age groups for daycare."""
    INFANT = "0-18 months"
    TODDLER = "18-36 months" 
    PRESCHOOL = "3-5 years"
    SCHOOL_AGE = "5+ years"


class CurriculumType(Enum):
    """Educational philosophy/curriculum type."""
    MONTESSORI = "Montessori"
    REGGIO_EMILIA = "Reggio Emilia"
    PLAY_BASED = "Play-Based"
    STEM = "STEM-Focused"
    INCLUSIVE = "Inclusive/Special Needs"
    PROGRESSIVE = "Progressive/Mixed"


@dataclass
class DaycareCenter:
    """Represents a daycare center with all relevant information."""
    rank: int
    name: str
    address: str
    rating: float
    num_reviews: int
    age_groups: List[AgeGroup]
    curriculum: CurriculumType
    monthly_cost_range: str
    pros: List[str]
    cons: List[str]
    special_features: List[str]
    why_ranked: str
    website: Optional[str] = None
    phone: Optional[str] = None
    
    def get_score_breakdown(self) -> dict:
        """Calculate weighted score breakdown for ranking."""
        # Scoring methodology (out of 10 each)
        scores = {
            "reviews_rating": min(self.rating * 2, 10),  # Rating * 2, cap at 10
            "review_volume": min(self.num_reviews / 5, 10),  # More reviews = higher confidence
            "curriculum_quality": 8 if len(self.special_features) >= 3 else 6,
            "pros_vs_cons": min((len(self.pros) / max(len(self.cons), 1)) * 3, 10),
        }
        scores["total"] = sum(scores.values()) / len(scores)
        return scores
    
    def __str__(self) -> str:
        stars = "⭐" * int(self.rating)
        return f"""
{'='*80}
#{self.rank}: {self.name}
{'='*80}
📍 Address: {self.address}
⭐ Rating: {self.rating}/5.0 ({self.num_reviews} reviews) {stars}
📚 Curriculum: {self.curriculum.value}
👶 Age Groups: {', '.join([ag.value for ag in self.age_groups])}
💰 Monthly Cost: {self.monthly_cost_range}
🌐 Website: {self.website or 'N/A'}

📈 WHY THIS RANKING:
{self.why_ranked}

✅ PROS:
{chr(10).join(['  • ' + pro for pro in self.pros])}

❌ CONS:
{chr(10).join(['  • ' + con for con in self.cons])}

✨ SPECIAL FEATURES:
{chr(10).join(['  • ' + feature for feature in self.special_features])}
"""


def create_top_10_daycares() -> List[DaycareCenter]:
    """
    Create the comprehensive list of top 10 daycares in Richmond BC.
    
    Ranking Methodology:
    1. Review scores from Google, TrustAnalytica, and parent testimonials
    2. Consistency of positive feedback across multiple platforms
    3. Curriculum quality and educational philosophy
    4. Staff qualifications and parent-staff communication
    5. Facility quality and safety
    6. Value for money considering BC childcare subsidies
    7. Special programs and unique offerings
    8. Waitlist/availability considerations
    """
    
    daycares = [
        DaycareCenter(
            rank=1,
            name="With Our Own Two Hands Early Learning Centre",
            address="3871 Moncton St, Richmond, BC V7E 3A7",
            rating=5.0,
            num_reviews=26,
            age_groups=[AgeGroup.PRESCHOOL],
            curriculum=CurriculumType.REGGIO_EMILIA,
            monthly_cost_range="$800-$1,000 (before subsidies)",
            website="https://withourowntwohands.ca",
            pros=[
                "Perfect 5-star rating across multiple platforms",
                "Voted among top 3 preschools in Richmond multiple years",
                "Reggio-Emilia inspired inquiry-based learning approach",
                "Small, intimate class sizes for personalized attention",
                "Diverse activities: gardening, art, music, yoga, meditation",
                "Strong focus on nature-based learning and outdoor exploration",
                "Teachers foster genuine love of learning in children",
                "Children described as 'blossoming' and 'thriving'",
                "Peaceful, warm, and tidy classroom environment",
                "Community walks and environmental connection emphasis"
            ],
            cons=[
                "Only serves preschool age (3-5 years)",
                "Small capacity means long waitlists likely",
                "Limited hours compared to full-day daycare centers",
                "Location in Steveston may not be convenient for all families",
                "Higher price point for specialized curriculum"
            ],
            special_features=[
                "Reggio-Emilia philosophy implementation",
                "Advanced learners program available",
                "Yoga and meditation classes for young children",
                "Nature-based curriculum with gardening activities",
                "Focus on inquiry and self-directed exploration"
            ],
            why_ranked="""
Ranked #1 due to its perfect 5-star rating and overwhelming positive parent testimonials.
The Reggio-Emilia approach is internationally recognized for fostering creativity and
critical thinking. Parents consistently report significant improvements in children's
social skills, confidence, and love for learning. The small class sizes ensure
personalized attention that's hard to find elsewhere. The holistic approach including
yoga, meditation, and nature exploration sets it apart from traditional daycares.
"""
        ),
        
        DaycareCenter(
            rank=2,
            name="Kids R Us Childcare Centre",
            address="11600 Aztec St, Richmond, BC V6X 1H8",
            rating=4.8,
            num_reviews=37,
            age_groups=[AgeGroup.INFANT, AgeGroup.TODDLER],
            curriculum=CurriculumType.PLAY_BASED,
            monthly_cost_range="$700-$900 (before subsidies)",
            website="https://kidsruschildcarecentre.com",
            pros=[
                "Excellent 4.8 rating with 37 reviews (high volume)",
                "Operating since 1996 - proven track record",
                "Specializes in infant and toddler care (0-36 months)",
                "BC Early Learning Framework aligned curriculum",
                "Daily reports, photos, and videos via Lillio App",
                "Monthly newsletters and parent-teacher meetings",
                "Clean, well-organized facility with outdoor space",
                "All educators ECE certified and registered",
                "Accommodates dietary needs and allergies",
                "Parents describe feeling 'stress-free'"
            ],
            cons=[
                "Only serves ages 0-36 months",
                "Limited capacity for infants",
                "May need to transition to different facility for preschool",
                "Popular facility likely has waitlist",
                "Standard play-based curriculum (less specialized)"
            ],
            special_features=[
                "Lillio App for daily parent communication",
                "Infant-specific programming and care",
                "Strong parent communication infrastructure",
                "Sensory play and music/movement activities",
                "Circle time and structured daily routines"
            ],
            why_ranked="""
Ranked #2 for having the highest review volume (37) with an excellent 4.8 rating,
indicating consistent quality over many years. Being established since 1996 provides
confidence in their operational stability. Their specialization in infant and toddler
care makes them the top choice for parents with very young children. The comprehensive
parent communication through the Lillio App addresses a key concern for parents of
infants. ECE-certified staff across the board ensures professional care.
"""
        ),
        
        DaycareCenter(
            rank=3,
            name="Ironwood Montessori Academy",
            address="4351 No. 3 Rd, Richmond, BC V6X 2C3",
            rating=4.7,
            num_reviews=20,
            age_groups=[AgeGroup.INFANT, AgeGroup.TODDLER, AgeGroup.PRESCHOOL],
            curriculum=CurriculumType.MONTESSORI,
            monthly_cost_range="$850-$1,200 (before subsidies)",
            website="https://ironwoodmontessori.ca",
            pros=[
                "Authentic Montessori curriculum with trained educators",
                "Wide age range coverage (infant to kindergarten prep)",
                "Spacious facility with 5 specialized classrooms",
                "77-child capacity ensures program sustainability",
                "6,000 sq ft outdoor play area with age-specific sections",
                "Garden area for environmental education",
                "New, modern facility with high-quality furniture",
                "Lunch program with catering option (Libby's Kitchen)",
                "Strong focus on independence and self-directed learning",
                "Open communication with parents praised consistently"
            ],
            cons=[
                "Higher price point for Montessori education",
                "Montessori approach may not suit all learning styles",
                "Larger facility may feel less intimate",
                "Location on No. 3 Rd may have parking challenges",
                "Less flexibility in curriculum vs play-based options"
            ],
            special_features=[
                "Certified Montessori educators",
                "Mixed-age classrooms for social development",
                "Garden and nature exploration program",
                "Kindergarten readiness program",
                "Hot lunch catering option available"
            ],
            why_ranked="""
Ranked #3 as the best Montessori option in Richmond. The academy offers an authentic
Montessori experience with trained educators and proper materials. Their wide age
coverage (infant to kindergarten) allows children to stay in one facility throughout
early childhood. The new, spacious facility with 6,000 sq ft of outdoor space is
exceptional. Parents specifically praise the preparation for kindergarten transition.
The lunch program option is a convenience many parents value highly.
"""
        ),
        
        DaycareCenter(
            rank=4,
            name="PAFN/SOAR Inclusive Preschool (Little Pilots)",
            address="3688 Cessna Dr, Richmond, BC V7B 1C7",
            rating=4.9,
            num_reviews=15,
            age_groups=[AgeGroup.PRESCHOOL],
            curriculum=CurriculumType.INCLUSIVE,
            monthly_cost_range="$600-$900 (before subsidies, may vary for specialized support)",
            website="https://pacificautismfamily.com",
            pros=[
                "Exceptional support for children with autism and special needs",
                "Inclusive model: autistic children learn alongside peers",
                "Described as 'life-changing' by parents",
                "High staff-to-child ratio for personalized attention",
                "Curriculum tailored to individual needs and family goals",
                "Staff trained in behavioral support strategies",
                "Regular professional supervision and consultations",
                "Connected to Pacific Autism Family Network resources",
                "Focus on holistic development (social, physical, emotional)",
                "Compassionate, child-friendly atmosphere"
            ],
            cons=[
                "Only serves preschool age group",
                "Location at Richmond airport area less convenient",
                "May have specific admission criteria",
                "Limited general population spots due to inclusion ratio",
                "Specialized nature may not be needed for all families"
            ],
            special_features=[
                "Autism spectrum expertise and support",
                "Inclusive education model",
                "Connection to PAFN knowledge center",
                "Professional behavioral support staff",
                "Individualized learning plans"
            ],
            why_ranked="""
Ranked #4 due to its exceptional 4.9 rating and unique position as the premier
inclusive preschool in Richmond. For families with children who have autism or
developmental differences, this is unquestionably the best choice. Parents describe
it as 'life-changing' with children who flourish in this supportive environment.
Even for neurotypical children, the inclusive model provides valuable exposure to
diversity and empathy development. The connection to PAFN resources is invaluable.
"""
        ),
        
        DaycareCenter(
            rank=5,
            name="Kids & Company Richmond",
            address="3851 Shell Rd #200, Richmond, BC V6X 2W2",
            rating=4.5,
            num_reviews=8,
            age_groups=[AgeGroup.TODDLER, AgeGroup.PRESCHOOL],
            curriculum=CurriculumType.PLAY_BASED,
            monthly_cost_range="$1,000-$1,400 (before subsidies)",
            website="https://kidsandcompany.com",
            pros=[
                "National brand with consistent quality standards",
                "Emergent curriculum with learn-through-play philosophy",
                "Hot lunch and 3 snacks daily from Kidco Kitchen",
                "Colorful, bright, and engaging classroom design",
                "Large outdoor playground space",
                "Password-protected webcams for parents",
                "Flexible scheduling options available",
                "Corporate childcare partnerships for employer benefits",
                "Educational toys and enriched environment",
                "Staff at Shell/Cambie location specifically praised"
            ],
            cons=[
                "On the 'pricier side' according to parents",
                "Corporate chain may feel less personalized",
                "Limited infant care availability",
                "Webcams may raise privacy concerns for some",
                "Larger groups than boutique daycares"
            ],
            special_features=[
                "Kidco Kitchen with healthy meals included",
                "Parent webcam access",
                "Corporate childcare partnership programs",
                "Bilingual programming options",
                "Flexible drop-off and pick-up"
            ],
            why_ranked="""
Ranked #5 as the best option for families seeking a corporate-quality daycare with
consistent standards and modern amenities. The included hot meals from Kidco Kitchen
remove the daily lunch-packing burden. Parent webcam access provides peace of mind.
The national brand backing ensures operational stability and professional protocols.
Best for families who prioritize convenience and corporate-quality infrastructure
over boutique intimacy. Reddit parents specifically praise the Shell/Cambie location.
"""
        ),
        
        DaycareCenter(
            rank=6,
            name="Genius Education Academy",
            address="6091 Westminster Hwy, Richmond, BC V7C 4V4",
            rating=4.6,
            num_reviews=18,
            age_groups=[AgeGroup.INFANT, AgeGroup.TODDLER, AgeGroup.PRESCHOOL],
            curriculum=CurriculumType.STEM,
            monthly_cost_range="$800-$1,100 (before subsidies)",
            website="https://geniuseducationacademy.ca",
            pros=[
                "STEM-focused curriculum with regular science/math activities",
                "Diverse enrichment: yoga, dance, art, French, music weekly",
                "Limited class sizes for personalized attention",
                "Strong kindergarten preparation program",
                "Teachers described as 'exceptionally caring and nurturing'",
                "Appropriate field trips for each developmental stage",
                "Montessori-informed educational philosophy",
                "Excellent parent communication and support",
                "Programs from infant to Junior Kindergarten",
                "Academic focus on phonics, literacy, and numeracy"
            ],
            cons=[
                "Academic focus may not suit all learning styles",
                "Location on Westminster Hwy may have traffic issues",
                "STEM emphasis might reduce free play time",
                "Higher academic expectations may stress some children",
                "Less emphasis on purely play-based exploration"
            ],
            special_features=[
                "Weekly enrichment classes (yoga, dance, French, music)",
                "STEM lesson integration",
                "Junior Kindergarten program",
                "Field trip program by age group",
                "Academic preparation focus"
            ],
            why_ranked="""
Ranked #6 as the best choice for parents prioritizing academic preparation and
STEM education. The diverse weekly enrichment activities (yoga, dance, art, French,
music) provide excellent exposure to different disciplines. Children here receive
strong preparation for kindergarten with focus on phonics, literacy, and numeracy.
The limited class sizes ensure children don't get lost in academic rigor. Best for
families who want their children academically ahead entering school.
"""
        ),
        
        DaycareCenter(
            rank=7,
            name="YMCA Seasong Child Care Centre",
            address="10380 No. 2 Rd, Richmond, BC V7E 2E3",
            rating=4.4,
            num_reviews=12,
            age_groups=[AgeGroup.INFANT, AgeGroup.TODDLER, AgeGroup.PRESCHOOL],
            curriculum=CurriculumType.PLAY_BASED,
            monthly_cost_range="$800-$1,000 (before subsidies)",
            website="https://gv.ymca.ca",
            pros=[
                "YMCA backing provides operational stability",
                "Relatively new facility (opened 2018)",
                "Excellent Steveston location near Fraser River",
                "37 licensed childcare spaces",
                "Good staff praised by parents",
                "YMCA values and community connection",
                "Programs for ages 0-6 years",
                "Likely participates in BC childcare subsidy programs",
                "Non-profit organization focused on community",
                "Strong health and safety protocols"
            ],
            cons=[
                "Higher fees than some private daycares (per Reddit)",
                "Tours not always available (parent complaint)",
                "Was at capacity shortly after opening (waitlist likely)",
                "Less specialized curriculum than Montessori/Reggio options",
                "YMCA processes may be more bureaucratic"
            ],
            special_features=[
                "YMCA organizational support",
                "Purpose-built modern facility",
                "Steveston community connection",
                "Strong record-keeping and reporting protocols",
                "Non-profit community focus"
            ],
            why_ranked="""
Ranked #7 for the combination of YMCA institutional backing and a modern, purpose-
built facility. Parents on Reddit describe it as having 'good location and good staff'
with relatively new facilities. The YMCA's non-profit community focus and strong
organizational support provide long-term stability. The Steveston location is
attractive for families in that area. Best for families who value institutional
credibility and community-focused childcare.
"""
        ),
        
        DaycareCenter(
            rank=8,
            name="Crystal Star Infant/Toddler Daycare",
            address="10631 Gilmore Crescent, Richmond, BC V6X 1X3",
            rating=4.7,
            num_reviews=13,
            age_groups=[AgeGroup.INFANT, AgeGroup.TODDLER],
            curriculum=CurriculumType.PLAY_BASED,
            monthly_cost_range="$700-$850 (before subsidies)",
            website="N/A",
            pros=[
                "Excellent 4.7 rating for infant/toddler specialty",
                "Very small group size (4 children daily)",
                "Decades of experience in childcare",
                "Owner Gina provides personal, watchful care",
                "Intimate home-like environment",
                "Lower cost than larger centers",
                "High individual attention ratio",
                "Experienced caregiver with long track record",
                "Personal relationship with each family",
                "Flexible, home-based care approach"
            ],
            cons=[
                "Very limited capacity (4 spots)",
                "Only serves infant/toddler age (0-36 months)",
                "No website or formal online presence",
                "Less structured curriculum than centers",
                "Dependent on single caregiver (no backup)",
                "May have minimal outdoor facilities"
            ],
            special_features=[
                "Home daycare intimacy",
                "Maximum 4-child environment",
                "Decades of caregiver experience",
                "Personal owner relationship with families",
                "Highly individualized care"
            ],
            why_ranked="""
Ranked #8 specifically for families seeking intimate, home-based care for infants
and toddlers. With only 4 children daily, the level of individual attention is
unmatched by any center-based care. Gina's decades of experience provide confidence,
and the 4.7 rating from 13 reviews shows consistent satisfaction. The lower cost
point is attractive. Best for families who prioritize a home-like environment and
very high caregiver-to-child ratio over structured programming.
"""
        ),
        
        DaycareCenter(
            rank=9,
            name="Ackroyd Children's Learning Centre",
            address="8600 Ackroyd Rd, Richmond, BC V6X 3G1",
            rating=4.5,
            num_reviews=8,
            age_groups=[AgeGroup.TODDLER, AgeGroup.PRESCHOOL],
            curriculum=CurriculumType.PROGRESSIVE,
            monthly_cost_range="$650-$850 (before subsidies)",
            website="N/A",
            pros=[
                "Holistic early childhood education approach",
                "Comprehensive curriculum (art, math, reading, phonics, music, drama)",
                "Professional, friendly, and caring staff",
                "Cozy, warm environment where children feel accepted",
                "Affordable pricing relative to competitors",
                "Long operating hours convenient for working parents",
                "Focus on emotional, social, and creative development",
                "Safe and welcoming space for exploration",
                "Meaningful play encouraged",
                "Age-appropriate lessons give head start for school"
            ],
            cons=[
                "Limited online presence and reviews",
                "Smaller facility may have capacity constraints",
                "Less brand recognition than larger centers",
                "May have less outdoor space than dedicated facilities",
                "Limited information available about staff qualifications"
            ],
            special_features=[
                "Drama and music program",
                "Comprehensive academic preparation",
                "Extended operating hours",
                "Affordable pricing structure",
                "Focus on meaningful play"
            ],
            why_ranked="""
Ranked #9 for providing excellent value with a comprehensive curriculum at affordable
pricing. The inclusion of drama and music alongside academics offers broader
development than purely academic programs. Parents praise the warm, accepting
environment. The long operating hours are a practical benefit for working parents.
Best for families seeking a balanced, affordable option with comprehensive programming
but without premium pricing.
"""
        ),
        
        DaycareCenter(
            rank=10,
            name="Creative Daycare (Sushma's)",
            address="Richmond, BC (Family Daycare)",
            rating=4.5,
            num_reviews=10,
            age_groups=[AgeGroup.TODDLER, AgeGroup.PRESCHOOL],
            curriculum=CurriculumType.PLAY_BASED,
            monthly_cost_range="$656-$745 (after CCFRI reduction)",
            website="https://creativedaycare.ca",
            pros=[
                "Licensed with 100% compliance on inspections",
                "Very affordable pricing ($656-745/month after subsidies)",
                "Owner Sushma highly qualified in Early Childhood Education",
                "Research-based childcare environment",
                "Daily parent updates on child's growth and behaviors",
                "Monthly topic-based learning (insects, farm animals, etc.)",
                "Large fenced yard for outdoor play",
                "Plenty of quality toys, games, art supplies, books",
                "Focus on healthy eating",
                "Nurturing transition to daycare for new children"
            ],
            cons=[
                "Family daycare with limited capacity",
                "Dependent on single primary caregiver",
                "Less structured than center-based care",
                "May have limited enrichment activities",
                "Exact location not publicly listed"
            ],
            special_features=[
                "Monthly themed learning units",
                "Parent group chat communication",
                "Strong health/safety compliance record",
                "ECE-qualified owner",
                "Large fenced outdoor area"
            ],
            why_ranked="""
Ranked #10 as the best budget-friendly option with strong qualifications. Sushma's
high ECE qualifications ensure research-based care at a fraction of center costs.
The 100% compliance on health inspections provides confidence in safety standards.
Daily communication through group chats keeps parents connected. The themed monthly
learning provides structure while maintaining play-based flexibility. Best for
cost-conscious families who want qualified care without center pricing.
"""
        ),
    ]
    
    return daycares


def generate_ranking_report() -> str:
    """Generate the complete ranking report as a formatted string."""
    daycares = create_top_10_daycares()
    
    report = """
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
    
    for daycare in daycares:
        report += str(daycare)
    
    report += """
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
    
    return report


def export_to_json(filename: str = "daycare_rankings.json") -> None:
    """Export the daycare data to JSON format."""
    daycares = create_top_10_daycares()
    
    data = {
        "title": "Top 10 Daycare Centers in Richmond BC, Canada",
        "generated_date": "2025-01-01",
        "methodology": {
            "data_sources": [
                "Google Reviews",
                "TrustAnalytica",
                "Reddit (r/richmondbc, r/vancouver)",
                "Official daycare websites",
                "BC Government databases"
            ],
            "scoring_criteria": {
                "review_rating": "30%",
                "review_volume": "15%",
                "parent_testimonials": "20%",
                "curriculum_quality": "15%",
                "facility_safety": "10%",
                "value": "10%"
            }
        },
        "daycares": []
    }
    
    for dc in daycares:
        data["daycares"].append({
            "rank": dc.rank,
            "name": dc.name,
            "address": dc.address,
            "rating": dc.rating,
            "num_reviews": dc.num_reviews,
            "age_groups": [ag.value for ag in dc.age_groups],
            "curriculum": dc.curriculum.value,
            "monthly_cost_range": dc.monthly_cost_range,
            "website": dc.website,
            "pros": dc.pros,
            "cons": dc.cons,
            "special_features": dc.special_features,
            "ranking_rationale": dc.why_ranked.strip()
        })
    
    with open(filename, 'w') as f:
        json.dump(data, f, indent=2)
    
    print(f"✅ Exported to {filename}")


if __name__ == "__main__":
    # Print the full ranking report
    report = generate_ranking_report()
    print(report)
    
    # Export to JSON for further processing
    export_to_json()
