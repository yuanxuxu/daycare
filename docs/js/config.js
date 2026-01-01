/**
 * @fileoverview Configuration constants for the daycare rankings application.
 * Centralizes all configuration values for easy maintenance.
 * @module config
 */

/**
 * Application configuration
 * @readonly
 * @enum {string|number}
 */
export const APP_CONFIG = Object.freeze({
    APP_NAME: 'Richmond BC Daycare Rankings',
    VERSION: '1.0.0',
    GENERATED_YEAR: 2025,
    MAX_COMPARE_ITEMS: 3,
});

/**
 * Filter options configuration
 * @readonly
 */
export const FILTER_OPTIONS = Object.freeze({
    AGE_GROUPS: [
        { value: 'all', label: 'All Ages' },
        { value: 'infant', label: 'Infant (0-18 months)' },
        { value: 'toddler', label: 'Toddler (18-36 months)' },
        { value: 'preschool', label: 'Preschool (3-5 years)' },
    ],
    CURRICULUM_TYPES: [
        { value: 'all', label: 'All Types' },
        { value: 'Montessori', label: 'Montessori' },
        { value: 'Reggio Emilia', label: 'Reggio Emilia' },
        { value: 'Play-Based', label: 'Play-Based' },
        { value: 'STEM-Focused', label: 'STEM-Focused' },
        { value: 'Inclusive/Special Needs', label: 'Inclusive/Special Needs' },
    ],
    BUDGET_LEVELS: [
        { value: 'all', label: 'All Budgets' },
        { value: 'low', label: 'Under $800' },
        { value: 'mid', label: '$800 - $1,000' },
        { value: 'high', label: '$1,000+' },
    ],
});

/**
 * Subsidy information for BC childcare programs
 * @readonly
 */
export const SUBSIDY_INFO = Object.freeze({
    CCFRI_INFANT_MAX: 900,
    CCFRI_PRESCHOOL_MAX: 545,
    ACCB_MAX: 1250,
    TEN_DOLLAR_DAY_COST: 200,
});

/**
 * CSS class names used throughout the application
 * @readonly
 */
export const CSS_CLASSES = Object.freeze({
    CARD_ACTIVE: 'active',
    VIEW_LIST: 'list-view',
    MODAL_ACTIVE: 'active',
    RANK_GOLD: 'gold',
    RANK_SILVER: 'silver',
    RANK_BRONZE: 'bronze',
});

/**
 * DOM element IDs
 * @readonly
 */
export const DOM_IDS = Object.freeze({
    DAYCARE_GRID: 'daycareGrid',
    MODAL: 'daycareModal',
    MODAL_BODY: 'modalBody',
    SELECTED_COMPARISON: 'selectedComparison',
    COMPARE_COUNT: 'compareCount',
    COMPARE_BTN: 'compareBtn',
    COMPARISON_RESULT: 'comparisonResult',
    AGE_FILTER: 'ageFilter',
    CURRICULUM_FILTER: 'curriculumFilter',
    BUDGET_FILTER: 'budgetFilter',
});
