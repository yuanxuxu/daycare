"""
Tests for daycare data module.
"""

import pytest

from daycare_rankings.data import (
    get_all_daycares,
    get_daycare_by_rank,
    get_daycares_by_age_group,
    get_daycares_by_curriculum,
    get_daycares_by_cost_level,
)
from daycare_rankings.models import AgeGroup, CostLevel, CurriculumType


class TestGetAllDaycares:
    """Tests for get_all_daycares function."""
    
    def test_returns_list(self):
        """Test function returns a list."""
        result = get_all_daycares()
        assert isinstance(result, list)
    
    def test_returns_ten_daycares(self):
        """Test exactly 10 daycares are returned."""
        result = get_all_daycares()
        assert len(result) == 10
    
    def test_daycares_ordered_by_rank(self):
        """Test daycares are ordered by rank."""
        result = get_all_daycares()
        ranks = [dc.rank for dc in result]
        assert ranks == list(range(1, 11))


class TestGetDaycareByRank:
    """Tests for get_daycare_by_rank function."""
    
    def test_valid_rank_returns_daycare(self):
        """Test valid rank returns correct daycare."""
        result = get_daycare_by_rank(1)
        assert result is not None
        assert result.rank == 1
    
    def test_rank_out_of_range_returns_none(self):
        """Test rank outside 1-10 returns None."""
        assert get_daycare_by_rank(0) is None
        assert get_daycare_by_rank(11) is None
        assert get_daycare_by_rank(-1) is None


class TestGetDaycaresByAgeGroup:
    """Tests for get_daycares_by_age_group function."""
    
    def test_infant_filter(self):
        """Test filtering by infant age group."""
        result = get_daycares_by_age_group(AgeGroup.INFANT)
        assert len(result) > 0
        for dc in result:
            assert AgeGroup.INFANT in dc.age_groups
    
    def test_preschool_filter(self):
        """Test filtering by preschool age group."""
        result = get_daycares_by_age_group(AgeGroup.PRESCHOOL)
        assert len(result) > 0
        for dc in result:
            assert AgeGroup.PRESCHOOL in dc.age_groups


class TestGetDaycaresByCurriculum:
    """Tests for get_daycares_by_curriculum function."""
    
    def test_montessori_filter(self):
        """Test filtering by Montessori curriculum."""
        result = get_daycares_by_curriculum(CurriculumType.MONTESSORI)
        assert len(result) >= 1
        for dc in result:
            assert dc.curriculum == CurriculumType.MONTESSORI


class TestGetDaycaresByCostLevel:
    """Tests for get_daycares_by_cost_level function."""
    
    def test_low_cost_filter(self):
        """Test filtering by low cost level."""
        result = get_daycares_by_cost_level(CostLevel.LOW)
        assert len(result) >= 1
        for dc in result:
            assert dc.cost_level == CostLevel.LOW
    
    def test_all_cost_levels_covered(self):
        """Test all cost levels have at least one daycare."""
        for level in CostLevel:
            result = get_daycares_by_cost_level(level)
            assert len(result) >= 1, f"No daycares for cost level {level}"
