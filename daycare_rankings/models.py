"""
Data models for daycare rankings.

This module defines the core data structures used throughout the application,
following Python best practices with dataclasses and type hints.
"""

from __future__ import annotations

from dataclasses import dataclass, field
from enum import Enum
from typing import List, Optional


class AgeGroup(Enum):
    """
    Supported age groups for daycare enrollment.
    
    Attributes:
        INFANT: Children aged 0-18 months
        TODDLER: Children aged 18-36 months
        PRESCHOOL: Children aged 3-5 years
        SCHOOL_AGE: Children aged 5+ years
    """
    INFANT = "0-18 months"
    TODDLER = "18-36 months"
    PRESCHOOL = "3-5 years"
    SCHOOL_AGE = "5+ years"

    @classmethod
    def from_string(cls, value: str) -> Optional[AgeGroup]:
        """
        Create an AgeGroup from a string value.
        
        Args:
            value: String representation of age group (e.g., "Infant", "Toddler")
            
        Returns:
            Matching AgeGroup enum or None if not found
        """
        value_lower = value.lower()
        mapping = {
            "infant": cls.INFANT,
            "toddler": cls.TODDLER,
            "preschool": cls.PRESCHOOL,
            "school_age": cls.SCHOOL_AGE,
            "school age": cls.SCHOOL_AGE,
        }
        return mapping.get(value_lower)


class CurriculumType(Enum):
    """
    Educational philosophy and curriculum types offered by daycares.
    
    Each curriculum type represents a distinct educational approach
    with its own methodology and benefits.
    """
    MONTESSORI = "Montessori"
    REGGIO_EMILIA = "Reggio Emilia"
    PLAY_BASED = "Play-Based"
    STEM = "STEM-Focused"
    INCLUSIVE = "Inclusive/Special Needs"
    PROGRESSIVE = "Progressive/Mixed"

    @property
    def description(self) -> str:
        """Get a brief description of this curriculum type."""
        descriptions = {
            self.MONTESSORI: "Self-directed activity, hands-on learning, mixed-age classrooms",
            self.REGGIO_EMILIA: "Child-led, inquiry-based learning through exploration and creativity",
            self.PLAY_BASED: "Learning through structured and unstructured play activities",
            self.STEM: "Emphasis on science, technology, engineering, and math",
            self.INCLUSIVE: "Specialized support for children with developmental differences",
            self.PROGRESSIVE: "Combination of multiple educational approaches",
        }
        return descriptions.get(self, "")


class CostLevel(Enum):
    """Cost level categories for budget filtering."""
    LOW = "low"
    MEDIUM = "mid"
    HIGH = "high"


@dataclass(frozen=False)
class DaycareCenter:
    """
    Represents a daycare center with comprehensive information.
    
    This dataclass contains all relevant information about a daycare center
    including ratings, curriculum, costs, and detailed pros/cons analysis.
    
    Attributes:
        rank: Overall ranking position (1-10)
        name: Full name of the daycare center
        address: Physical address
        rating: Average rating out of 5.0
        num_reviews: Total number of reviews
        age_groups: List of age groups served
        curriculum: Primary curriculum/educational philosophy
        monthly_cost_range: Cost range as displayable string
        cost_level: Budget category (low/mid/high)
        pros: List of positive attributes
        cons: List of drawbacks or considerations
        special_features: Unique features and offerings
        why_ranked: Explanation of ranking rationale
        website: Optional website URL
        phone: Optional phone number
    
    Example:
        >>> daycare = DaycareCenter(
        ...     rank=1,
        ...     name="Example Daycare",
        ...     address="123 Main St",
        ...     rating=4.8,
        ...     num_reviews=25,
        ...     age_groups=[AgeGroup.PRESCHOOL],
        ...     curriculum=CurriculumType.MONTESSORI,
        ...     monthly_cost_range="$800-$1,000",
        ...     cost_level=CostLevel.MEDIUM,
        ...     pros=["Great teachers"],
        ...     cons=["Long waitlist"],
        ...     special_features=["Outdoor play area"],
        ...     why_ranked="Excellent reviews and curriculum"
        ... )
    """
    rank: int
    name: str
    address: str
    rating: float
    num_reviews: int
    age_groups: List[AgeGroup]
    curriculum: CurriculumType
    monthly_cost_range: str
    cost_level: CostLevel
    pros: List[str]
    cons: List[str]
    special_features: List[str]
    why_ranked: str
    website: Optional[str] = None
    phone: Optional[str] = None

    def __post_init__(self) -> None:
        """Validate data after initialization."""
        if not 1 <= self.rank <= 10:
            raise ValueError(f"Rank must be between 1 and 10, got {self.rank}")
        if not 0 <= self.rating <= 5:
            raise ValueError(f"Rating must be between 0 and 5, got {self.rating}")
        if self.num_reviews < 0:
            raise ValueError(f"Number of reviews cannot be negative, got {self.num_reviews}")

    @property
    def rating_stars(self) -> str:
        """Get star representation of rating."""
        full_stars = int(self.rating)
        half_star = "½" if self.rating % 1 >= 0.5 else ""
        return "⭐" * full_stars + half_star

    @property
    def age_groups_display(self) -> str:
        """Get comma-separated list of age groups."""
        return ", ".join(ag.value for ag in self.age_groups)

    def get_score_breakdown(self) -> dict[str, float]:
        """
        Calculate weighted score breakdown for ranking analysis.
        
        Returns:
            Dictionary with individual scores and total weighted score
        """
        scores = {
            "reviews_rating": min(self.rating * 2, 10),
            "review_volume": min(self.num_reviews / 5, 10),
            "curriculum_quality": 8 if len(self.special_features) >= 3 else 6,
            "pros_vs_cons": min((len(self.pros) / max(len(self.cons), 1)) * 3, 10),
        }
        scores["total"] = sum(scores.values()) / len(scores)
        return scores

    def to_dict(self) -> dict:
        """
        Convert to dictionary for JSON serialization.
        
        Returns:
            Dictionary representation of the daycare center
        """
        return {
            "rank": self.rank,
            "name": self.name,
            "address": self.address,
            "rating": self.rating,
            "num_reviews": self.num_reviews,
            "age_groups": [ag.value for ag in self.age_groups],
            "curriculum": self.curriculum.value,
            "monthly_cost_range": self.monthly_cost_range,
            "cost_level": self.cost_level.value,
            "website": self.website,
            "pros": self.pros,
            "cons": self.cons,
            "special_features": self.special_features,
            "ranking_rationale": self.why_ranked.strip(),
        }

    def __str__(self) -> str:
        """Generate formatted string representation."""
        return f"""
{'='*80}
#{self.rank}: {self.name}
{'='*80}
📍 Address: {self.address}
⭐ Rating: {self.rating}/5.0 ({self.num_reviews} reviews) {self.rating_stars}
📚 Curriculum: {self.curriculum.value}
👶 Age Groups: {self.age_groups_display}
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
