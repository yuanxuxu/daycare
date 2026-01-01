/**
 * @fileoverview Daycare data for the rankings application.
 * Contains all daycare center information separated from UI logic.
 * @module data
 */

/**
 * @typedef {Object} DaycareCenter
 * @property {number} rank - Overall ranking (1-10)
 * @property {string} name - Full name of the daycare
 * @property {string} address - Physical address
 * @property {number} rating - Rating out of 5.0
 * @property {number} numReviews - Total number of reviews
 * @property {string[]} ageGroups - Supported age groups
 * @property {string} curriculum - Curriculum type
 * @property {string} monthlyCost - Cost range as string
 * @property {string} costLevel - Budget category (low/mid/high)
 * @property {string|null} website - Website URL or null
 * @property {string[]} pros - List of advantages
 * @property {string[]} cons - List of disadvantages
 * @property {string[]} specialFeatures - Unique features
 * @property {string} whyRanked - Ranking explanation
 */

/**
 * All daycare centers data
 * @type {DaycareCenter[]}
 */
export const DAYCARES = Object.freeze([
    {
        rank: 1,
        name: "With Our Own Two Hands Early Learning Centre",
        address: "3871 Moncton St, Richmond, BC V7E 3A7",
        rating: 5.0,
        numReviews: 26,
        ageGroups: ["Preschool"],
        curriculum: "Reggio Emilia",
        monthlyCost: "$800-$1,000",
        costLevel: "mid",
        website: "https://withourowntwohands.ca",
        pros: [
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
        cons: [
            "Only serves preschool age (3-5 years)",
            "Small capacity means long waitlists likely",
            "Limited hours compared to full-day daycare centers",
            "Location in Steveston may not be convenient for all families",
            "Higher price point for specialized curriculum"
        ],
        specialFeatures: [
            "Reggio-Emilia philosophy implementation",
            "Advanced learners program available",
            "Yoga and meditation classes for young children",
            "Nature-based curriculum with gardening activities",
            "Focus on inquiry and self-directed exploration"
        ],
        whyRanked: "Ranked #1 due to its perfect 5-star rating and overwhelming positive parent testimonials. The Reggio-Emilia approach is internationally recognized for fostering creativity and critical thinking."
    },
    {
        rank: 2,
        name: "Kids R Us Childcare Centre",
        address: "11600 Aztec St, Richmond, BC V6X 1H8",
        rating: 4.8,
        numReviews: 37,
        ageGroups: ["Infant", "Toddler"],
        curriculum: "Play-Based",
        monthlyCost: "$700-$900",
        costLevel: "mid",
        website: "https://kidsruschildcarecentre.com",
        pros: [
            "Excellent 4.8 rating with 37 reviews (high volume)",
            "Operating since 1996 - proven 28-year track record",
            "Specializes in infant and toddler care (0-36 months)",
            "BC Early Learning Framework aligned curriculum",
            "Daily reports, photos, and videos via Lillio App",
            "Monthly newsletters and parent-teacher meetings",
            "Clean, well-organized facility with outdoor space",
            "All educators ECE certified and registered",
            "Accommodates dietary needs and allergies",
            "Parents describe feeling 'stress-free'"
        ],
        cons: [
            "Only serves ages 0-36 months",
            "Limited capacity for infants",
            "May need to transition to different facility for preschool",
            "Popular facility likely has waitlist",
            "Standard play-based curriculum (less specialized)"
        ],
        specialFeatures: [
            "Lillio App for daily parent communication",
            "Infant-specific programming and care",
            "Strong parent communication infrastructure",
            "Sensory play and music/movement activities",
            "Circle time and structured daily routines"
        ],
        whyRanked: "Ranked #2 for having the highest review volume (37) with an excellent 4.8 rating, indicating consistent quality over many years. Best choice for infants and toddlers."
    },
    {
        rank: 3,
        name: "Ironwood Montessori Academy",
        address: "4351 No. 3 Rd, Richmond, BC V6X 2C3",
        rating: 4.7,
        numReviews: 20,
        ageGroups: ["Infant", "Toddler", "Preschool"],
        curriculum: "Montessori",
        monthlyCost: "$850-$1,200",
        costLevel: "high",
        website: "https://ironwoodmontessori.ca",
        pros: [
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
        cons: [
            "Higher price point for Montessori education",
            "Montessori approach may not suit all learning styles",
            "Larger facility may feel less intimate",
            "Location on No. 3 Rd may have parking challenges",
            "Less flexibility in curriculum vs play-based options"
        ],
        specialFeatures: [
            "Certified Montessori educators",
            "Mixed-age classrooms for social development",
            "Garden and nature exploration program",
            "Kindergarten readiness program",
            "Hot lunch catering option available"
        ],
        whyRanked: "Ranked #3 as the best Montessori option in Richmond. Wide age coverage allows children to stay in one facility throughout early childhood."
    },
    {
        rank: 4,
        name: "PAFN/SOAR Inclusive Preschool",
        address: "3688 Cessna Dr, Richmond, BC V7B 1C7",
        rating: 4.9,
        numReviews: 15,
        ageGroups: ["Preschool"],
        curriculum: "Inclusive/Special Needs",
        monthlyCost: "$600-$900",
        costLevel: "mid",
        website: "https://pacificautismfamily.com",
        pros: [
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
        cons: [
            "Only serves preschool age group",
            "Location at Richmond airport area less convenient",
            "May have specific admission criteria",
            "Limited general population spots due to inclusion ratio",
            "Specialized nature may not be needed for all families"
        ],
        specialFeatures: [
            "Autism spectrum expertise and support",
            "Inclusive education model",
            "Connection to PAFN knowledge center",
            "Professional behavioral support staff",
            "Individualized learning plans"
        ],
        whyRanked: "Ranked #4 due to exceptional 4.9 rating and unique position as the premier inclusive preschool. Life-changing for families with children who have special needs."
    },
    {
        rank: 5,
        name: "Kids & Company Richmond",
        address: "3851 Shell Rd #200, Richmond, BC V6X 2W2",
        rating: 4.5,
        numReviews: 8,
        ageGroups: ["Toddler", "Preschool"],
        curriculum: "Play-Based",
        monthlyCost: "$1,000-$1,400",
        costLevel: "high",
        website: "https://kidsandcompany.com",
        pros: [
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
        cons: [
            "On the 'pricier side' according to parents",
            "Corporate chain may feel less personalized",
            "Limited infant care availability",
            "Webcams may raise privacy concerns for some",
            "Larger groups than boutique daycares"
        ],
        specialFeatures: [
            "Kidco Kitchen with healthy meals included",
            "Parent webcam access",
            "Corporate childcare partnership programs",
            "Bilingual programming options",
            "Flexible drop-off and pick-up"
        ],
        whyRanked: "Ranked #5 as the best corporate-quality daycare with modern amenities. Included meals from Kidco Kitchen remove the daily lunch-packing burden."
    },
    {
        rank: 6,
        name: "Genius Education Academy",
        address: "6091 Westminster Hwy, Richmond, BC V7C 4V4",
        rating: 4.6,
        numReviews: 18,
        ageGroups: ["Infant", "Toddler", "Preschool"],
        curriculum: "STEM-Focused",
        monthlyCost: "$800-$1,100",
        costLevel: "mid",
        website: "https://geniuseducationacademy.ca",
        pros: [
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
        cons: [
            "Academic focus may not suit all learning styles",
            "Location on Westminster Hwy may have traffic issues",
            "STEM emphasis might reduce free play time",
            "Higher academic expectations may stress some children",
            "Less emphasis on purely play-based exploration"
        ],
        specialFeatures: [
            "Weekly enrichment classes (yoga, dance, French, music)",
            "STEM lesson integration",
            "Junior Kindergarten program",
            "Field trip program by age group",
            "Academic preparation focus"
        ],
        whyRanked: "Ranked #6 as the best choice for parents prioritizing academic preparation and STEM education. Diverse weekly enrichment activities provide excellent exposure."
    },
    {
        rank: 7,
        name: "YMCA Seasong Child Care Centre",
        address: "10380 No. 2 Rd, Richmond, BC V7E 2E3",
        rating: 4.4,
        numReviews: 12,
        ageGroups: ["Infant", "Toddler", "Preschool"],
        curriculum: "Play-Based",
        monthlyCost: "$800-$1,000",
        costLevel: "mid",
        website: "https://gv.ymca.ca",
        pros: [
            "YMCA backing provides operational stability",
            "Relatively new facility (opened 2018)",
            "Excellent Steveston location near Fraser River",
            "37 licensed childcare spaces",
            "Good staff praised by parents",
            "YMCA values and community connection",
            "Programs for ages 0-6 years",
            "Participates in BC childcare subsidy programs",
            "Non-profit organization focused on community",
            "Strong health and safety protocols"
        ],
        cons: [
            "Higher fees than some private daycares",
            "Tours not always available",
            "Was at capacity shortly after opening (waitlist likely)",
            "Less specialized curriculum than Montessori/Reggio options",
            "YMCA processes may be more bureaucratic"
        ],
        specialFeatures: [
            "YMCA organizational support",
            "Purpose-built modern facility",
            "Steveston community connection",
            "Strong record-keeping and reporting protocols",
            "Non-profit community focus"
        ],
        whyRanked: "Ranked #7 for the combination of YMCA institutional backing and a modern, purpose-built facility. Non-profit focus provides long-term stability."
    },
    {
        rank: 8,
        name: "Crystal Star Infant/Toddler Daycare",
        address: "10631 Gilmore Crescent, Richmond, BC V6X 1X3",
        rating: 4.7,
        numReviews: 13,
        ageGroups: ["Infant", "Toddler"],
        curriculum: "Play-Based",
        monthlyCost: "$700-$850",
        costLevel: "low",
        website: null,
        pros: [
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
        cons: [
            "Very limited capacity (4 spots)",
            "Only serves infant/toddler age (0-36 months)",
            "No website or formal online presence",
            "Less structured curriculum than centers",
            "Dependent on single caregiver (no backup)",
            "May have minimal outdoor facilities"
        ],
        specialFeatures: [
            "Home daycare intimacy",
            "Maximum 4-child environment",
            "Decades of caregiver experience",
            "Personal owner relationship with families",
            "Highly individualized care"
        ],
        whyRanked: "Ranked #8 specifically for families seeking intimate, home-based care. With only 4 children daily, the level of individual attention is unmatched."
    },
    {
        rank: 9,
        name: "Ackroyd Children's Learning Centre",
        address: "8600 Ackroyd Rd, Richmond, BC V6X 3G1",
        rating: 4.5,
        numReviews: 8,
        ageGroups: ["Toddler", "Preschool"],
        curriculum: "Progressive/Mixed",
        monthlyCost: "$650-$850",
        costLevel: "low",
        website: null,
        pros: [
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
        cons: [
            "Limited online presence and reviews",
            "Smaller facility may have capacity constraints",
            "Less brand recognition than larger centers",
            "May have less outdoor space than dedicated facilities",
            "Limited information available about staff qualifications"
        ],
        specialFeatures: [
            "Drama and music program",
            "Comprehensive academic preparation",
            "Extended operating hours",
            "Affordable pricing structure",
            "Focus on meaningful play"
        ],
        whyRanked: "Ranked #9 for providing excellent value with a comprehensive curriculum at affordable pricing. Long operating hours are a practical benefit for working parents."
    },
    {
        rank: 10,
        name: "Creative Daycare (Sushma's)",
        address: "Richmond, BC (Family Daycare)",
        rating: 4.5,
        numReviews: 10,
        ageGroups: ["Toddler", "Preschool"],
        curriculum: "Play-Based",
        monthlyCost: "$656-$745",
        costLevel: "low",
        website: "https://creativedaycare.ca",
        pros: [
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
        cons: [
            "Family daycare with limited capacity",
            "Dependent on single primary caregiver",
            "Less structured than center-based care",
            "May have limited enrichment activities",
            "Exact location not publicly listed"
        ],
        specialFeatures: [
            "Monthly themed learning units",
            "Parent group chat communication",
            "Strong health/safety compliance record",
            "ECE-qualified owner",
            "Large fenced outdoor area"
        ],
        whyRanked: "Ranked #10 as the best budget-friendly option with strong qualifications. 100% compliance on health inspections provides confidence in safety standards."
    }
]);

/**
 * Get all daycares
 * @returns {DaycareCenter[]} All daycare centers
 */
export function getAllDaycares() {
    return [...DAYCARES];
}

/**
 * Get daycare by rank
 * @param {number} rank - The rank to find
 * @returns {DaycareCenter|undefined} The daycare or undefined
 */
export function getDaycareByRank(rank) {
    return DAYCARES.find(dc => dc.rank === rank);
}

/**
 * Filter daycares by age group
 * @param {string} ageGroup - Age group to filter by
 * @returns {DaycareCenter[]} Filtered daycares
 */
export function getDaycaresByAgeGroup(ageGroup) {
    const ageMap = {
        'infant': 'Infant',
        'toddler': 'Toddler',
        'preschool': 'Preschool'
    };
    const mappedAge = ageMap[ageGroup.toLowerCase()];
    return DAYCARES.filter(dc => dc.ageGroups.includes(mappedAge));
}

/**
 * Filter daycares by curriculum type
 * @param {string} curriculum - Curriculum type
 * @returns {DaycareCenter[]} Filtered daycares
 */
export function getDaycaresByCurriculum(curriculum) {
    return DAYCARES.filter(dc => dc.curriculum === curriculum);
}

/**
 * Filter daycares by cost level
 * @param {string} costLevel - Cost level (low/mid/high)
 * @returns {DaycareCenter[]} Filtered daycares
 */
export function getDaycaresByCostLevel(costLevel) {
    return DAYCARES.filter(dc => dc.costLevel === costLevel);
}
