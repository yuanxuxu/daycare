/**
 * Richmond BC Daycare Rankings - Main Application
 * Interactive UI for exploring and comparing daycares
 * Supports English and Simplified Chinese
 */

// ============================================
// Internationalization (i18n) Support
// ============================================

const translations = {
    en: {
        heroBadge: "🏆 2025 Edition",
        heroTitle: "Top 10 Daycares in",
        heroTitleHighlight: "Richmond BC",
        heroSubtitle: "Comprehensive ranking based on parent reviews, curriculum quality, and expert analysis",
        viewRankings: "View Rankings",
        statCenters: "Top-Rated Centers",
        statReviews: "Parent Reviews",
        statCurriculum: "Curriculum Types",
        filterTitle: "Find Your Perfect Daycare",
        filterSubtitle: "Filter by age group, curriculum type, or budget",
        ageGroup: "Age Group",
        curriculum: "Curriculum",
        budget: "Budget (Monthly)",
        allAges: "All Ages",
        infant: "Infant (0-18 months)",
        toddler: "Toddler (18-36 months)",
        preschool: "Preschool (3-5 years)",
        allTypes: "All Types",
        allBudgets: "All Budgets",
        budgetLow: "Under $800",
        budgetMid: "$800 - $1,000",
        budgetHigh: "$1,000+",
        resetFilters: "Reset Filters",
        rankingsTitle: "2025 Rankings",
        viewDetails: "View Details",
        compare: "Compare",
        added: "✓ Added",
        topHighlights: "Top Highlights",
        reviews: "reviews",
        perMonth: "/mo",
        compareTitle: "Compare Daycares",
        compareSubtitle: "Select up to 3 daycares to compare side-by-side",
        compareEmpty: "Click \"Compare\" on any daycare card to add it here",
        compareSelected: "Compare Selected",
        criteria: "Criteria",
        rating: "Rating",
        numReviews: "Reviews",
        ageGroups: "Age Groups",
        monthlyCost: "Monthly Cost",
        website: "Website",
        topPro: "Top Pro",
        keyCon: "Key Con",
        visit: "Visit",
        recsTitle: "Quick Recommendations",
        bestInfants: "Best for Infants",
        bestMontessori: "Best Montessori",
        bestInclusive: "Best Inclusive",
        bestValue: "Best Value",
        specializedCare: "Specialized Care",
        selfDirected: "Self-Directed Learning",
        autismSupport: "Autism Support",
        underPrice: "Under $750/mo",
        subsidyTitle: "💡 BC Childcare Subsidies",
        subsidySubtitle: "Richmond has some of Canada's highest childcare costs, but these programs can help:",
        ccfri: "Up to $900/month reduction for ages 0-3",
        accb: "Up to $1,250/month for eligible families",
        tenDollar: "Reduce costs to ~$200/month",
        verifiedReviews: "verified reviews",
        pros: "✅ Pros",
        cons: "❌ Cons",
        specialFeatures: "✨ Special Features",
        visitWebsite: "Visit Website",
        close: "Close",
        footerTitle: "Richmond BC Daycare Rankings",
        footerDesc: "Data compiled from Google Reviews, TrustAnalytica, Reddit, and official sources.",
        footerDisclaimer: "Last updated: January 2025. Please verify information directly with each daycare.",
        resources: "Resources",
        cityChildCare: "City of Richmond Child Care",
        referralPhone: "Richmond Child Care Referral: 604-279-7020",
        copyright: "© 2025 Richmond Daycare Rankings. Built with ❤️ for parents.",
        noMatches: "No daycares match your filters",
        maxCompare: "You can compare up to 3 daycares at a time"
    },
    zh: {
        heroBadge: "🏆 2025年版",
        heroTitle: "列治文十大托儿所",
        heroTitleHighlight: "排名榜",
        heroSubtitle: "基于家长评价、课程质量和专家分析的综合排名",
        viewRankings: "查看排名",
        statCenters: "优质托儿所",
        statReviews: "家长评价",
        statCurriculum: "课程类型",
        filterTitle: "找到您理想的托儿所",
        filterSubtitle: "按年龄组、课程类型或预算筛选",
        ageGroup: "年龄组",
        curriculum: "课程类型",
        budget: "月费预算",
        allAges: "所有年龄",
        infant: "婴儿 (0-18个月)",
        toddler: "幼儿 (18-36个月)",
        preschool: "学前班 (3-5岁)",
        allTypes: "所有类型",
        allBudgets: "所有预算",
        budgetLow: "低于 $800",
        budgetMid: "$800 - $1,000",
        budgetHigh: "$1,000以上",
        resetFilters: "重置筛选",
        rankingsTitle: "2025年排名",
        viewDetails: "查看详情",
        compare: "对比",
        added: "✓ 已添加",
        topHighlights: "主要亮点",
        reviews: "条评价",
        perMonth: "/月",
        compareTitle: "托儿所对比",
        compareSubtitle: "选择最多3家托儿所进行并排对比",
        compareEmpty: "点击任意托儿所卡片上的\"对比\"按钮添加到这里",
        compareSelected: "开始对比",
        criteria: "对比项目",
        rating: "评分",
        numReviews: "评价数量",
        ageGroups: "年龄组",
        monthlyCost: "月费",
        website: "官网",
        topPro: "主要优点",
        keyCon: "主要缺点",
        visit: "访问",
        recsTitle: "快速推荐",
        bestInfants: "最适合婴儿",
        bestMontessori: "最佳蒙特梭利",
        bestInclusive: "最佳融合教育",
        bestValue: "最高性价比",
        specializedCare: "专业护理",
        selfDirected: "自主学习",
        autismSupport: "自闭症支持",
        underPrice: "低于 $750/月",
        subsidyTitle: "💡 BC省托儿补贴",
        subsidySubtitle: "列治文的托儿费用在加拿大属于较高水平，但以下项目可以帮助您：",
        ccfri: "0-3岁每月最高减免$900",
        accb: "符合条件的家庭每月最高$1,250",
        tenDollar: "费用可降至约$200/月",
        verifiedReviews: "条认证评价",
        pros: "✅ 优点",
        cons: "❌ 缺点",
        specialFeatures: "✨ 特色服务",
        visitWebsite: "访问官网",
        close: "关闭",
        footerTitle: "列治文托儿所排名",
        footerDesc: "数据来源：Google评论、TrustAnalytica、Reddit及官方资料。",
        footerDisclaimer: "最后更新：2025年1月。请直接与各托儿所核实信息。",
        resources: "相关资源",
        cityChildCare: "列治文市托儿服务",
        referralPhone: "托儿转介服务电话：604-279-7020",
        copyright: "© 2025 列治文托儿所排名。用❤️为家长打造。",
        noMatches: "没有符合筛选条件的托儿所",
        maxCompare: "最多可对比3家托儿所"
    }
};

// Chinese translations for daycare details
const daycareZh = {
    1: {
        pros: ["多个平台获得满分5星评价", "连续多年被评为列治文前三名学前班", "采用瑞吉欧方法的探究式学习", "小班制教学，个性化关注", "丰富活动：园艺、艺术、音乐、瑜伽、冥想"],
        cons: ["仅招收学前班年龄（3-5岁）", "容量小，可能需要排队等位", "营业时间比全日托儿所短", "Steveston位置可能不便于所有家庭", "专业课程价格较高"],
        specialFeatures: ["瑞吉欧教育理念", "提供进阶学习项目", "儿童瑜伽和冥想课", "自然课程与园艺活动", "探究式自主学习"],
        whyRanked: "凭借满分5星评价和大量家长好评荣登榜首。瑞吉欧方法是国际公认的培养创造力和批判性思维的教育方式。"
    },
    2: {
        pros: ["37条评价，4.8高分（评价量大）", "1996年开业，28年良好运营记录", "专注婴幼儿护理（0-36个月）", "课程符合BC省早期学习框架", "通过Lillio应用每日发送照片和视频"],
        cons: ["仅招收0-36个月儿童", "婴儿名额有限", "学前班需转到其他机构", "热门机构可能需要排队", "标准游戏课程（专业性较低）"],
        specialFeatures: ["Lillio应用每日沟通", "专业婴儿护理项目", "强大的家长沟通体系", "感官游戏和音乐律动", "圆圈时间和日常规律"],
        whyRanked: "以37条评价和4.8高分排名第二，评价量高表明多年来质量稳定。是婴幼儿的最佳选择。"
    },
    3: {
        pros: ["正宗蒙特梭利课程，持证教师", "覆盖广泛年龄（婴儿到学前班）", "宽敞设施，5间专业教室", "77名儿童容量确保项目可持续", "6000平方英尺户外活动区"],
        cons: ["蒙特梭利教育价格较高", "蒙特梭利方法可能不适合所有学习风格", "大型设施可能感觉不够亲密", "No. 3 Road位置停车可能不便", "课程灵活性不如游戏式"],
        specialFeatures: ["持证蒙特梭利教师", "混龄班促进社交发展", "花园和自然探索项目", "幼儿园预备项目", "可选热午餐服务"],
        whyRanked: "作为列治文最佳蒙特梭利机构排名第三。广泛的年龄覆盖让孩子可以在同一机构完成整个早期教育。"
    },
    4: {
        pros: ["为自闭症和特殊需求儿童提供卓越支持", "融合模式：自闭症儿童与普通儿童一起学习", "家长称\"改变人生\"", "高师生比，个性化关注", "根据个人需求和家庭目标制定课程"],
        cons: ["仅招收学前班年龄", "机场附近位置不太便利", "可能有特定入学标准", "因融合比例普通名额有限", "专业性质可能非所有家庭需要"],
        specialFeatures: ["自闭症谱系专业支持", "融合教育模式", "连接PAFN知识中心", "专业行为支持人员", "个性化学习计划"],
        whyRanked: "凭借4.9分高评和作为顶级融合教育学前班的独特地位排名第四。对有特殊需求儿童的家庭来说是改变人生的选择。"
    },
    5: {
        pros: ["全国连锁品牌，质量标准统一", "新兴课程与游戏学习理念", "每日热午餐和3次点心", "色彩丰富、明亮的教室设计", "大型户外游乐场"],
        cons: ["家长反映\"价格偏高\"", "连锁机构可能感觉不够个性化", "婴儿名额有限", "摄像头可能引起部分家长隐私顾虑", "班级规模比精品托儿所大"],
        specialFeatures: ["Kidco Kitchen健康膳食", "家长摄像头访问", "企业托儿合作项目", "双语课程选项", "灵活接送时间"],
        whyRanked: "作为提供现代设施的优质企业托儿所排名第五。包餐服务免去每天准备午餐的麻烦。"
    },
    6: {
        pros: ["STEM主题课程，定期科学/数学活动", "丰富课外活动：每周瑜伽、舞蹈、艺术、法语、音乐", "小班制个性化关注", "强大的幼儿园预备项目", "老师被评价\"特别有爱心和耐心\""],
        cons: ["学术重点可能不适合所有学习风格", "Westminster Hwy位置可能有交通问题", "STEM强调可能减少自由玩耍时间", "较高学术期望可能给部分儿童压力", "纯游戏探索较少"],
        specialFeatures: ["每周课外班（瑜伽、舞蹈、法语、音乐）", "STEM课程整合", "小学前班项目", "按年龄分组实地考察", "学术预备重点"],
        whyRanked: "作为注重学术准备和STEM教育的最佳选择排名第六。丰富的每周课外活动提供了出色的综合体验。"
    },
    7: {
        pros: ["YMCA支持提供运营稳定性", "相对较新的设施（2018年开业）", "Steveston优越位置，靠近Fraser River", "37个持证托儿名额", "员工受到家长好评"],
        cons: ["费用高于部分私立托儿所", "参观不一定随时可安排", "开业后很快满员（可能需排队）", "课程专业性不如蒙特梭利/瑞吉欧", "YMCA流程可能较为繁琐"],
        specialFeatures: ["YMCA组织支持", "专门建造的现代化设施", "Steveston社区连接", "完善的记录报告协议", "非营利社区重点"],
        whyRanked: "凭借YMCA机构支持和现代化专用设施排名第七。非营利重点提供长期稳定性。"
    },
    8: {
        pros: ["婴幼儿专业护理获4.7高分", "超小规模（每天仅4名儿童）", "数十年托儿经验", "业主Gina提供个人细心照顾", "家庭式温馨环境"],
        cons: ["容量非常有限（仅4个名额）", "仅招收婴幼儿（0-36个月）", "无网站或正式在线信息", "课程结构不如中心式", "依赖单一照护者（无备用）"],
        specialFeatures: ["家庭托儿的亲密感", "最多4名儿童的环境", "数十年照护经验", "业主与家庭的个人关系", "高度个性化护理"],
        whyRanked: "专为寻求亲密家庭式婴幼儿护理的家庭排名第八。每天仅4名儿童，个人关注度无与伦比。"
    },
    9: {
        pros: ["全面的早期教育方法", "综合课程（艺术、数学、阅读、拼音、音乐、戏剧）", "专业、友善、有爱心的员工", "温馨舒适，孩子感到被接纳", "相比竞争对手价格实惠"],
        cons: ["在线信息和评价有限", "较小设施可能容量受限", "品牌知名度不如大型中心", "户外空间可能不如专用设施", "员工资质信息有限"],
        specialFeatures: ["戏剧和音乐项目", "全面学术准备", "延长营业时间", "实惠价格结构", "注重有意义的游戏"],
        whyRanked: "以实惠价格提供综合课程的高性价比选择排名第九。长营业时间是工作家长的实际福利。"
    },
    10: {
        pros: ["持证经营，检查100%合规", "价格非常实惠（补贴后$656-745/月）", "业主Sushma拥有高级幼儿教育资质", "基于研究的托儿环境", "每日向家长更新孩子成长和行为"],
        cons: ["家庭托儿容量有限", "依赖单一主要照护者", "结构不如中心式托儿", "课外活动可能有限", "具体地址未公开"],
        specialFeatures: ["每月主题学习单元", "家长群组沟通", "优秀的健康安全合规记录", "持ECE资质的业主", "大型围栏户外区域"],
        whyRanked: "作为价格最实惠且资质优秀的选择排名第十。100%健康检查合规提供安全保障。"
    }
};

let currentLang = localStorage.getItem('daycare-lang') || 'en';

function t(key) {
    return translations[currentLang][key] || translations['en'][key] || key;
}

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('daycare-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update all translatable elements
    updatePageTranslations();

    // Re-render dynamic content
    renderDaycares();
    updateCompareSelection();
}

function updatePageTranslations() {
    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });

    // Update filter labels and options
    const ageFilter = document.getElementById('ageFilter');
    if (ageFilter) {
        ageFilter.options[0].text = t('allAges');
        ageFilter.options[1].text = t('infant');
        ageFilter.options[2].text = t('toddler');
        ageFilter.options[3].text = t('preschool');
    }

    const budgetFilter = document.getElementById('budgetFilter');
    if (budgetFilter) {
        budgetFilter.options[0].text = t('allBudgets');
        budgetFilter.options[1].text = t('budgetLow');
        budgetFilter.options[2].text = t('budgetMid');
        budgetFilter.options[3].text = t('budgetHigh');
    }
}

function getDaycareText(daycare, field) {
    if (currentLang === 'zh' && daycareZh[daycare.rank] && daycareZh[daycare.rank][field]) {
        return daycareZh[daycare.rank][field];
    }
    return daycare[field];
}

// ============================================
// Daycare Data
// ============================================

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
    // Initialize language from localStorage or browser preference
    const saved = localStorage.getItem('daycare-lang');
    if (saved && translations[saved]) {
        currentLang = saved;
    } else if (navigator.language.toLowerCase().startsWith('zh')) {
        currentLang = 'zh';
    }

    // Update language buttons to reflect current language
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });

    // Apply initial translations
    updatePageTranslations();

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
                <p style="font-size: 1.25rem; color: var(--text-muted);">${t('noMatches')}</p>
                <button onclick="resetFilters()" style="margin-top: 16px;" class="card-btn secondary">${t('resetFilters')}</button>
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

    const pros = getDaycareText(daycare, 'pros');

    card.innerHTML = `
        <div class="card-header">
            <div class="rank-badge ${rankClass}">${daycare.rank}</div>
            <div class="rating-display">
                <div class="stars">${stars}</div>
                <div class="rating-text">${daycare.rating}/5 (${daycare.numReviews} ${t('reviews')})</div>
            </div>
        </div>
        <h3 class="card-title">${daycare.name}</h3>
        <p class="card-address">📍 ${daycare.address}</p>
        <div class="card-tags">
            <span class="tag curriculum">${daycare.curriculum}</span>
            ${daycare.ageGroups.map(age => `<span class="tag age">${age}</span>`).join('')}
            <span class="tag cost">${daycare.monthlyCost}${t('perMonth')}</span>
        </div>
        <div class="card-pros">
            <h4>${t('topHighlights')}</h4>
            <ul>
                ${pros.slice(0, 3).map(pro => `<li>${pro}</li>`).join('')}
            </ul>
        </div>
        <div class="card-actions">
            <button class="card-btn primary" onclick="openModal(${daycare.rank})">${t('viewDetails')}</button>
            <button class="card-btn secondary ${isSelected ? 'active' : ''}" onclick="toggleCompare(${daycare.rank})">
                ${isSelected ? t('added') : t('compare')}
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
