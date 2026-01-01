"""
Command-line interface for daycare rankings.

Provides a unified CLI for all project functionality.
"""

from __future__ import annotations

import argparse
import logging
import sys
from pathlib import Path

from daycare_rankings.data import (
    get_all_daycares,
    get_daycare_by_rank,
    get_daycares_by_age_group,
    get_daycares_by_curriculum,
)
from daycare_rankings.models import AgeGroup, CurriculumType
from daycare_rankings.report import export_to_json, generate_ranking_report

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(levelname)s: %(message)s",
)
logger = logging.getLogger(__name__)


def cmd_report(args: argparse.Namespace) -> int:
    """Generate and display the full ranking report."""
    report = generate_ranking_report()
    print(report)
    return 0


def cmd_export(args: argparse.Namespace) -> int:
    """Export rankings to JSON format."""
    output_path = export_to_json(
        filename=args.output,
        output_dir=Path(args.dir) if args.dir else None,
    )
    print(f"✅ Exported to {output_path}")
    return 0


def cmd_show(args: argparse.Namespace) -> int:
    """Show details for a specific daycare."""
    daycare = get_daycare_by_rank(args.rank)
    if daycare is None:
        logger.error(f"No daycare found with rank {args.rank}")
        return 1
    print(str(daycare))
    return 0


def cmd_list(args: argparse.Namespace) -> int:
    """List all daycares in a compact format."""
    daycares = get_all_daycares()
    
    print("\n📋 TOP 10 DAYCARES IN RICHMOND BC:\n")
    print(f"{'Rank':<5} {'Name':<45} {'Rating':<10} {'Reviews':<8}")
    print("-" * 70)
    
    for dc in daycares:
        stars = "⭐" * int(dc.rating)
        print(f"#{dc.rank:<4} {dc.name[:43]:<45} {dc.rating}/5.0   {dc.num_reviews:>3}")
    
    print()
    return 0


def cmd_filter(args: argparse.Namespace) -> int:
    """Filter daycares by criteria."""
    daycares = get_all_daycares()
    
    if args.age:
        age_group = AgeGroup.from_string(args.age)
        if age_group:
            daycares = [dc for dc in daycares if age_group in dc.age_groups]
        else:
            logger.error(f"Unknown age group: {args.age}")
            return 1
    
    if args.curriculum:
        try:
            curriculum = CurriculumType(args.curriculum)
            daycares = get_daycares_by_curriculum(curriculum)
        except ValueError:
            logger.error(f"Unknown curriculum: {args.curriculum}")
            return 1
    
    if not daycares:
        print("No daycares match the specified criteria.")
        return 0
    
    print(f"\n📋 FILTERED RESULTS ({len(daycares)} matches):\n")
    for dc in daycares:
        print(f"  #{dc.rank} {dc.name} - {dc.rating}/5.0")
    print()
    
    return 0


def create_parser() -> argparse.ArgumentParser:
    """Create the argument parser."""
    parser = argparse.ArgumentParser(
        prog="daycare-rankings",
        description="Richmond BC Daycare Rankings CLI",
    )
    parser.add_argument(
        "-v", "--version",
        action="version",
        version="%(prog)s 1.0.0",
    )
    
    subparsers = parser.add_subparsers(
        title="commands",
        dest="command",
        help="Available commands",
    )
    
    # Report command
    report_parser = subparsers.add_parser(
        "report",
        help="Generate full ranking report",
    )
    report_parser.set_defaults(func=cmd_report)
    
    # Export command
    export_parser = subparsers.add_parser(
        "export",
        help="Export rankings to JSON",
    )
    export_parser.add_argument(
        "-o", "--output",
        default="daycare_rankings.json",
        help="Output filename (default: daycare_rankings.json)",
    )
    export_parser.add_argument(
        "-d", "--dir",
        help="Output directory (default: current directory)",
    )
    export_parser.set_defaults(func=cmd_export)
    
    # Show command
    show_parser = subparsers.add_parser(
        "show",
        help="Show details for a specific daycare",
    )
    show_parser.add_argument(
        "rank",
        type=int,
        choices=range(1, 11),
        metavar="RANK",
        help="Daycare rank (1-10)",
    )
    show_parser.set_defaults(func=cmd_show)
    
    # List command
    list_parser = subparsers.add_parser(
        "list",
        help="List all daycares",
    )
    list_parser.set_defaults(func=cmd_list)
    
    # Filter command
    filter_parser = subparsers.add_parser(
        "filter",
        help="Filter daycares by criteria",
    )
    filter_parser.add_argument(
        "--age",
        choices=["infant", "toddler", "preschool"],
        help="Filter by age group",
    )
    filter_parser.add_argument(
        "--curriculum",
        help="Filter by curriculum type",
    )
    filter_parser.set_defaults(func=cmd_filter)
    
    return parser


def main(argv: list[str] | None = None) -> int:
    """
    Main entry point for the CLI.
    
    Args:
        argv: Command line arguments (defaults to sys.argv[1:])
        
    Returns:
        Exit code (0 for success, non-zero for errors)
    """
    parser = create_parser()
    args = parser.parse_args(argv)
    
    if args.command is None:
        # Default to report if no command specified
        return cmd_report(args)
    
    return args.func(args)


if __name__ == "__main__":
    sys.exit(main())
