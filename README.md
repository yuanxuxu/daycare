# Top 10 Daycare Centers in Richmond BC, Canada

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://yuanxuxu.github.io/daycare/)
[![Language](https://img.shields.io/badge/language-EN%20%7C%20中文-blue)](https://yuanxuxu.github.io/daycare/)

**🌐 [View Live Demo →](https://yuanxuxu.github.io/daycare/)**

A comprehensive ranking and analysis tool for daycare centers in Richmond BC, Canada.


## Features

- **Complete ranking** of 10 daycare centers with detailed analysis
- **Pros and cons** for each daycare based on parent reviews
- **Interactive Web UI** with filtering, comparison, and detail views
- **CLI tools** for terminal-based exploration
- **Export to JSON** for data processing

## Quick Start

### Web UI (Recommended)

```bash
# From the project root
python -m daycare_rankings.server
# Open http://localhost:8080 in your browser
```

### Command Line

```bash
# View full ranking report
python -m daycare_rankings.cli report

# List all daycares
python -m daycare_rankings.cli list

# Show details for a specific daycare
python -m daycare_rankings.cli show 1

# Export to JSON
python -m daycare_rankings.cli export

# Filter by criteria
python -m daycare_rankings.cli filter --age infant
python -m daycare_rankings.cli filter --curriculum Montessori
```

## Installation

```bash
# Clone the repository
cd daycare

# Install in development mode (optional)
pip install -e ".[dev]"
```

## Project Structure

```
daycare/
├── daycare_rankings/           # Main Python package
│   ├── __init__.py             # Package exports
│   ├── models.py               # Data models with type hints
│   ├── data.py                 # Daycare data repository
│   ├── report.py               # Report generation
│   ├── cli.py                  # Command-line interface
│   ├── server.py               # Web server
│   └── config.py               # Configuration management
├── web/                        # Web UI files
│   ├── index.html              # Main HTML page
│   ├── styles.css              # Styling
│   ├── app.js                  # Application logic
│   └── js/                     # Modular JavaScript
│       ├── config.js           # Configuration constants
│       └── data.js             # Daycare data module
├── tests/                      # Test suite
│   ├── test_models.py          # Model tests
│   └── test_data.py            # Data access tests
├── pyproject.toml              # Python project configuration
└── README.md                   # This file
```

## Running Tests

```bash
# Run all tests
PYTHONPATH=. python -m pytest tests/ -v

# Expected output: 21 passed
```

## Rankings Summary

| Rank | Daycare | Rating | Best For |
|------|---------|--------|----------|
| 1 | With Our Own Two Hands | 5.0⭐ | Overall, Reggio-Emilia |
| 2 | Kids R Us Childcare | 4.8⭐ | Infants, proven track record |
| 3 | Ironwood Montessori | 4.7⭐ | Montessori education |
| 4 | PAFN/SOAR Inclusive | 4.9⭐ | Special needs, autism |
| 5 | Kids & Company | 4.5⭐ | Corporate quality, meals |
| 6 | Genius Education Academy | 4.6⭐ | STEM, academic prep |
| 7 | YMCA Seasong | 4.4⭐ | YMCA backing, new facility |
| 8 | Crystal Star | 4.7⭐ | Home-based, intimate |
| 9 | Ackroyd Children's | 4.5⭐ | Value, comprehensive |
| 10 | Creative Daycare | 4.5⭐ | Budget-friendly |

## BC Childcare Subsidies

- **CCFRI**: Up to $900/month reduction (ages 0-3)
- **ACCB**: Up to $1,250/month for eligible families
- **$10 a Day**: Reduces costs to ~$200/month

## Resources

- [City of Richmond Child Care](https://www.richmond.ca/parks-recreation/child-care.htm)
- Richmond Child Care Referral: 604-279-7020

## Data Sources

- Google Reviews
- TrustAnalytica
- Reddit (r/richmondbc, r/vancouver)
- Official daycare websites
- BC Government databases

---

*Last updated: January 2025*
