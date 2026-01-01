/**
 * Richmond BC Daycare Rankings - Main Application
 * Interactive UI for exploring and comparing daycares
 */

// Daycare data
const daycares = [
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
];

// State
let selectedForComparison = [];
let currentView = 'grid';
let filteredDaycares = [...daycares];

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    renderDaycares();
    setupFilters();
});

// Render daycare cards
function renderDaycares() {
    const grid = document.getElementById('daycareGrid');
    grid.innerHTML = '';

    if (filteredDaycares.length === 0) {
        grid.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1; text-align: center; padding: 60px;">
                <p style="font-size: 1.25rem; color: var(--text-muted);">No daycares match your filters</p>
                <button onclick="resetFilters()" style="margin-top: 16px;" class="card-btn secondary">Reset Filters</button>
            </div>
        `;
        return;
    }

    filteredDaycares.forEach(daycare => {
        const card = createDaycareCard(daycare);
        grid.appendChild(card);
    });
}

// Create a daycare card element
function createDaycareCard(daycare) {
    const card = document.createElement('div');
    card.className = 'daycare-card';
    card.setAttribute('data-rank', daycare.rank);

    const isSelected = selectedForComparison.includes(daycare.rank);
    const stars = '★'.repeat(Math.floor(daycare.rating)) + (daycare.rating % 1 >= 0.5 ? '½' : '');

    let rankClass = '';
    if (daycare.rank === 1) rankClass = 'gold';
    else if (daycare.rank === 2) rankClass = 'silver';
    else if (daycare.rank === 3) rankClass = 'bronze';

    card.innerHTML = `
        <div class="card-header">
            <div class="rank-badge ${rankClass}">${daycare.rank}</div>
            <div class="rating-display">
                <div class="stars">${stars}</div>
                <div class="rating-text">${daycare.rating}/5 (${daycare.numReviews} reviews)</div>
            </div>
        </div>
        <h3 class="card-title">${daycare.name}</h3>
        <p class="card-address">📍 ${daycare.address}</p>
        <div class="card-tags">
            <span class="tag curriculum">${daycare.curriculum}</span>
            ${daycare.ageGroups.map(age => `<span class="tag age">${age}</span>`).join('')}
            <span class="tag cost">${daycare.monthlyCost}/mo</span>
        </div>
        <div class="card-pros">
            <h4>Top Highlights</h4>
            <ul>
                ${daycare.pros.slice(0, 3).map(pro => `<li>${pro}</li>`).join('')}
            </ul>
        </div>
        <div class="card-actions">
            <button class="card-btn primary" onclick="openModal(${daycare.rank})">View Details</button>
            <button class="card-btn secondary ${isSelected ? 'active' : ''}" onclick="toggleCompare(${daycare.rank})">
                ${isSelected ? '✓ Added' : 'Compare'}
            </button>
        </div>
    `;

    return card;
}

// Setup filter event listeners
function setupFilters() {
    document.getElementById('ageFilter').addEventListener('change', applyFilters);
    document.getElementById('curriculumFilter').addEventListener('change', applyFilters);
    document.getElementById('budgetFilter').addEventListener('change', applyFilters);
}

// Apply filters
function applyFilters() {
    const age = document.getElementById('ageFilter').value;
    const curriculum = document.getElementById('curriculumFilter').value;
    const budget = document.getElementById('budgetFilter').value;

    filteredDaycares = daycares.filter(dc => {
        // Age filter
        if (age !== 'all') {
            const ageMap = {
                'infant': 'Infant',
                'toddler': 'Toddler',
                'preschool': 'Preschool'
            };
            if (!dc.ageGroups.includes(ageMap[age])) return false;
        }

        // Curriculum filter
        if (curriculum !== 'all' && dc.curriculum !== curriculum) return false;

        // Budget filter
        if (budget !== 'all' && dc.costLevel !== budget) return false;

        return true;
    });

    renderDaycares();
}

// Reset filters
function resetFilters() {
    document.getElementById('ageFilter').value = 'all';
    document.getElementById('curriculumFilter').value = 'all';
    document.getElementById('budgetFilter').value = 'all';
    filteredDaycares = [...daycares];
    renderDaycares();
}

// Filter by recommendation
function filterByRecommendation(type) {
    resetFilters();

    switch (type) {
        case 'infant':
            document.getElementById('ageFilter').value = 'infant';
            break;
        case 'montessori':
            document.getElementById('curriculumFilter').value = 'Montessori';
            break;
        case 'special':
            document.getElementById('curriculumFilter').value = 'Inclusive/Special Needs';
            break;
        case 'budget':
            document.getElementById('budgetFilter').value = 'low';
            break;
    }

    applyFilters();
    document.getElementById('rankings').scrollIntoView({ behavior: 'smooth' });
}

// Set view (grid/list)
function setView(view) {
    currentView = view;
    const grid = document.getElementById('daycareGrid');

    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });

    grid.classList.toggle('list-view', view === 'list');
}

// Toggle compare selection
function toggleCompare(rank) {
    const index = selectedForComparison.indexOf(rank);

    if (index > -1) {
        selectedForComparison.splice(index, 1);
    } else if (selectedForComparison.length < 3) {
        selectedForComparison.push(rank);
    } else {
        alert('You can compare up to 3 daycares at a time');
        return;
    }

    updateCompareSelection();
    renderDaycares();
}

// Update comparison selection UI
function updateCompareSelection() {
    const container = document.getElementById('selectedComparison');
    const countEl = document.getElementById('compareCount');
    const btn = document.getElementById('compareBtn');

    countEl.textContent = selectedForComparison.length;
    btn.disabled = selectedForComparison.length < 2;

    if (selectedForComparison.length === 0) {
        container.innerHTML = '<p class="empty-state">Click "Compare" on any daycare card to add it here</p>';
        return;
    }

    container.innerHTML = selectedForComparison.map(rank => {
        const dc = daycares.find(d => d.rank === rank);
        return `
            <div class="selected-chip">
                <span>#${rank} ${dc.name.split(' ').slice(0, 3).join(' ')}...</span>
                <button onclick="toggleCompare(${rank})">&times;</button>
            </div>
        `;
    }).join('');
}

// Show comparison table
function showComparison() {
    const container = document.getElementById('comparisonResult');
    const selected = selectedForComparison.map(rank => daycares.find(d => d.rank === rank));

    container.style.display = 'block';
    container.innerHTML = `
        <table class="comparison-table">
            <thead>
                <tr>
                    <th>Criteria</th>
                    ${selected.map(dc => `<th>#${dc.rank} ${dc.name}</th>`).join('')}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Rating</td>
                    ${selected.map(dc => `<td class="${getBestRating(selected, dc) ? 'highlight' : ''}">${dc.rating}/5.0 ${'★'.repeat(Math.floor(dc.rating))}</td>`).join('')}
                </tr>
                <tr>
                    <td>Reviews</td>
                    ${selected.map(dc => `<td>${dc.numReviews}</td>`).join('')}
                </tr>
                <tr>
                    <td>Curriculum</td>
                    ${selected.map(dc => `<td>${dc.curriculum}</td>`).join('')}
                </tr>
                <tr>
                    <td>Age Groups</td>
                    ${selected.map(dc => `<td>${dc.ageGroups.join(', ')}</td>`).join('')}
                </tr>
                <tr>
                    <td>Monthly Cost</td>
                    ${selected.map(dc => `<td>${dc.monthlyCost}</td>`).join('')}
                </tr>
                <tr>
                    <td>Website</td>
                    ${selected.map(dc => `<td>${dc.website ? `<a href="${dc.website}" target="_blank" style="color: var(--primary);">Visit</a>` : 'N/A'}</td>`).join('')}
                </tr>
                <tr>
                    <td>Top Pro</td>
                    ${selected.map(dc => `<td style="color: #10b981;">✓ ${dc.pros[0]}</td>`).join('')}
                </tr>
                <tr>
                    <td>Key Con</td>
                    ${selected.map(dc => `<td style="color: #ef4444;">✗ ${dc.cons[0]}</td>`).join('')}
                </tr>
            </tbody>
        </table>
    `;

    container.scrollIntoView({ behavior: 'smooth' });
}

// Helper to highlight best rating
function getBestRating(selected, current) {
    const maxRating = Math.max(...selected.map(d => d.rating));
    return current.rating === maxRating;
}

// Open daycare modal
function openModal(rank) {
    const daycare = daycares.find(d => d.rank === rank);
    if (!daycare) return;

    const modal = document.getElementById('daycareModal');
    const body = document.getElementById('modalBody');

    const stars = '★'.repeat(Math.floor(daycare.rating)) + (daycare.rating % 1 >= 0.5 ? '½' : '');

    body.innerHTML = `
        <div class="modal-header">
            <div class="modal-rank">${daycare.rank}</div>
            <div class="modal-title-group">
                <h2>${daycare.name}</h2>
                <p class="modal-address">📍 ${daycare.address}</p>
            </div>
        </div>
        
        <div class="modal-rating">
            <span class="big-rating">${daycare.rating}</span>
            <div class="rating-info">
                <div class="stars" style="font-size: 1.5rem;">${stars}</div>
                <p>${daycare.numReviews} verified reviews</p>
            </div>
        </div>
        
        <div class="card-tags" style="margin-bottom: 24px;">
            <span class="tag curriculum">${daycare.curriculum}</span>
            ${daycare.ageGroups.map(age => `<span class="tag age">${age}</span>`).join('')}
            <span class="tag cost">${daycare.monthlyCost}/mo</span>
        </div>
        
        <p style="color: var(--text-secondary); margin-bottom: 32px;">${daycare.whyRanked}</p>
        
        <div class="modal-section pros">
            <h3>✅ Pros</h3>
            <ul>
                ${daycare.pros.map(pro => `<li>${pro}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-section cons">
            <h3>❌ Cons</h3>
            <ul>
                ${daycare.cons.map(con => `<li>${con}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-section features">
            <h3>✨ Special Features</h3>
            <ul>
                ${daycare.specialFeatures.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        </div>
        
        <div class="modal-footer">
            ${daycare.website ? `<a href="${daycare.website}" target="_blank">Visit Website</a>` : ''}
            <button onclick="closeModal()">Close</button>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('daycareModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on background click
document.getElementById('daycareModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'daycareModal') {
        closeModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
