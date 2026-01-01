"""
Tests for daycare rankings models.
"""

import pytest

from daycare_rankings.models import (
    AgeGroup,
    CostLevel,
    CurriculumType,
    DaycareCenter,
)


class TestAgeGroup:
    """Tests for AgeGroup enum."""
    
    def test_from_string_valid(self):
        """Test valid string conversions."""
        assert AgeGroup.from_string("infant") == AgeGroup.INFANT
        assert AgeGroup.from_string("Toddler") == AgeGroup.TODDLER
        assert AgeGroup.from_string("PRESCHOOL") == AgeGroup.PRESCHOOL
    
    def test_from_string_invalid(self):
        """Test invalid string returns None."""
        assert AgeGroup.from_string("unknown") is None
        assert AgeGroup.from_string("") is None


class TestCurriculumType:
    """Tests for CurriculumType enum."""
    
    def test_description_property(self):
        """Test curriculum descriptions are non-empty."""
        for curriculum in CurriculumType:
            assert curriculum.description, f"{curriculum} has no description"


class TestDaycareCenter:
    """Tests for DaycareCenter dataclass."""
    
    @pytest.fixture
    def sample_daycare(self) -> DaycareCenter:
        """Create a sample daycare for testing."""
        return DaycareCenter(
            rank=1,
            name="Test Daycare",
            address="123 Test St",
            rating=4.5,
            num_reviews=10,
            age_groups=[AgeGroup.PRESCHOOL],
            curriculum=CurriculumType.MONTESSORI,
            monthly_cost_range="$800-$1,000",
            cost_level=CostLevel.MEDIUM,
            pros=["Good teachers", "Nice facility"],
            cons=["Long waitlist"],
            special_features=["Garden", "Music", "Art"],
            why_ranked="Top rated",
            website="https://example.com",
        )
    
    def test_valid_creation(self, sample_daycare):
        """Test creating a valid daycare."""
        assert sample_daycare.rank == 1
        assert sample_daycare.rating == 4.5
    
    def test_invalid_rank_high(self):
        """Test rank > 10 raises ValueError."""
        with pytest.raises(ValueError, match="Rank must be between"):
            DaycareCenter(
                rank=11,
                name="Test",
                address="Test",
                rating=4.0,
                num_reviews=5,
                age_groups=[],
                curriculum=CurriculumType.PLAY_BASED,
                monthly_cost_range="$500",
                cost_level=CostLevel.LOW,
                pros=[],
                cons=[],
                special_features=[],
                why_ranked="Test",
            )
    
    def test_invalid_rating(self):
        """Test rating > 5 raises ValueError."""
        with pytest.raises(ValueError, match="Rating must be between"):
            DaycareCenter(
                rank=1,
                name="Test",
                address="Test",
                rating=6.0,  # Invalid
                num_reviews=5,
                age_groups=[],
                curriculum=CurriculumType.PLAY_BASED,
                monthly_cost_range="$500",
                cost_level=CostLevel.LOW,
                pros=[],
                cons=[],
                special_features=[],
                why_ranked="Test",
            )
    
    def test_rating_stars_full(self, sample_daycare):
        """Test star representation."""
        assert "⭐" in sample_daycare.rating_stars
    
    def test_age_groups_display(self, sample_daycare):
        """Test age groups display string."""
        assert "3-5 years" in sample_daycare.age_groups_display
    
    def test_to_dict(self, sample_daycare):
        """Test dictionary conversion."""
        data = sample_daycare.to_dict()
        assert data["rank"] == 1
        assert data["name"] == "Test Daycare"
        assert "3-5 years" in str(data["age_groups"])
    
    def test_score_breakdown(self, sample_daycare):
        """Test score calculation."""
        scores = sample_daycare.get_score_breakdown()
        assert "total" in scores
        assert all(0 <= v <= 10 for v in scores.values())
    
    def test_str_format(self, sample_daycare):
        """Test string representation contains key info."""
        result = str(sample_daycare)
        assert "Test Daycare" in result
        assert "123 Test St" in result
        assert "4.5" in result
