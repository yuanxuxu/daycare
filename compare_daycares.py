#!/usr/bin/env python3
"""
Interactive comparison tool for Richmond BC Daycares.
Allows users to compare specific daycares side-by-side.
"""

import sys
from typing import List, Optional
from daycare_rankings import create_top_10_daycares, DaycareCenter


def get_daycare_by_rank(rank: int) -> Optional[DaycareCenter]:
    """Get a daycare by its rank number."""
    daycares = create_top_10_daycares()
    for dc in daycares:
        if dc.rank == rank:
            return dc
    return None


def compare_daycares(ranks: List[int]) -> str:
    """Compare multiple daycares side by side."""
    daycares = [get_daycare_by_rank(r) for r in ranks]
    daycares = [dc for dc in daycares if dc is not None]
    
    if not daycares:
        return "No valid daycares found for comparison."
    
    comparison = """
╔══════════════════════════════════════════════════════════════════════════════╗
║                        DAYCARE SIDE-BY-SIDE COMPARISON                        ║
╚══════════════════════════════════════════════════════════════════════════════╝

"""
    
    # Header with daycare names
    header = "│ CRITERIA              "
    for dc in daycares:
        header += f"│ #{dc.rank} {dc.name[:22]:<22} "
    header += "│"
    
    separator = "├" + "─" * 23
    for _ in daycares:
        separator += "┼" + "─" * 27
    separator += "┤"
    
    top_border = "┌" + "─" * 23
    for _ in daycares:
        top_border += "┬" + "─" * 27
    top_border += "┐"
    
    bottom_border = "└" + "─" * 23
    for _ in daycares:
        bottom_border += "┴" + "─" * 27
    bottom_border += "┘"
    
    comparison += top_border + "\n"
    comparison += header + "\n"
    comparison += separator + "\n"
    
    # Rating row
    row = "│ Rating                "
    for dc in daycares:
        stars = "⭐" * int(dc.rating)
        row += f"│ {dc.rating}/5.0 {stars:<16} "
    row += "│"
    comparison += row + "\n"
    
    # Reviews row
    row = "│ # Reviews             "
    for dc in daycares:
        row += f"│ {dc.num_reviews:<25} "
    row += "│"
    comparison += row + "\n"
    
    comparison += separator + "\n"
    
    # Curriculum row
    row = "│ Curriculum            "
    for dc in daycares:
        row += f"│ {dc.curriculum.value[:25]:<25} "
    row += "│"
    comparison += row + "\n"
    
    # Age groups row
    row = "│ Age Groups            "
    for dc in daycares:
        ages = ", ".join([ag.value.split()[0] for ag in dc.age_groups])
        row += f"│ {ages[:25]:<25} "
    row += "│"
    comparison += row + "\n"
    
    comparison += separator + "\n"
    
    # Cost row
    row = "│ Monthly Cost          "
    for dc in daycares:
        row += f"│ {dc.monthly_cost_range[:25]:<25} "
    row += "│"
    comparison += row + "\n"
    
    comparison += separator + "\n"
    
    # Number of pros
    row = "│ # of Pros             "
    for dc in daycares:
        row += f"│ {len(dc.pros):<25} "
    row += "│"
    comparison += row + "\n"
    
    # Number of cons
    row = "│ # of Cons             "
    for dc in daycares:
        row += f"│ {len(dc.cons):<25} "
    row += "│"
    comparison += row + "\n"
    
    # Website row
    row = "│ Has Website           "
    for dc in daycares:
        has_web = "✓ Yes" if dc.website and dc.website != "N/A" else "✗ No"
        row += f"│ {has_web:<25} "
    row += "│"
    comparison += row + "\n"
    
    comparison += bottom_border + "\n"
    
    # Add detailed pros/cons for each
    comparison += "\n" + "─" * 80 + "\n"
    comparison += "DETAILED PROS & CONS:\n"
    comparison += "─" * 80 + "\n\n"
    
    for dc in daycares:
        comparison += f"#{dc.rank} {dc.name}\n"
        comparison += "─" * 40 + "\n"
        
        comparison += "✅ TOP PROS:\n"
        for pro in dc.pros[:5]:
            comparison += f"   • {pro}\n"
        
        comparison += "\n❌ KEY CONS:\n"
        for con in dc.cons[:3]:
            comparison += f"   • {con}\n"
        
        comparison += "\n"
    
    return comparison


def find_best_for_criteria(criteria: str) -> str:
    """Find the best daycare for specific criteria."""
    daycares = create_top_10_daycares()
    criteria_lower = criteria.lower()
    
    recommendations = {
        "infant": [2, 8, 3],  # Kids R Us, Crystal Star, Ironwood
        "toddler": [2, 6, 7],  # Kids R Us, Genius, YMCA
        "preschool": [1, 3, 4],  # With Our Own Two Hands, Ironwood, PAFN
        "montessori": [3, 6],  # Ironwood, Genius (Montessori-informed)
        "reggio": [1],  # With Our Own Two Hands
        "autism": [4],  # PAFN/SOAR
        "special needs": [4],  # PAFN/SOAR
        "inclusive": [4],  # PAFN/SOAR
        "budget": [10, 9, 8],  # Creative, Ackroyd, Crystal Star
        "cheap": [10, 9, 8],  # Creative, Ackroyd, Crystal Star
        "affordable": [10, 9, 8],  # Creative, Ackroyd, Crystal Star
        "meals": [5],  # Kids & Company
        "food": [5],  # Kids & Company
        "webcam": [5],  # Kids & Company
        "camera": [5],  # Kids & Company
        "stem": [6],  # Genius Education
        "academic": [6, 9],  # Genius, Ackroyd
        "home": [8, 10],  # Crystal Star, Creative
        "intimate": [1, 8],  # With Our Own Two Hands, Crystal Star
        "ymca": [7],  # YMCA Seasong
        "corporate": [5, 7],  # Kids & Company, YMCA
        "nature": [1],  # With Our Own Two Hands
        "outdoor": [1, 3],  # With Our Own Two Hands, Ironwood
        "best": [1, 2, 3],  # Top 3
        "top": [1, 2, 3],  # Top 3
    }
    
    matching_ranks = []
    for keyword, ranks in recommendations.items():
        if keyword in criteria_lower:
            matching_ranks.extend(ranks)
    
    if not matching_ranks:
        return f"No specific recommendations found for '{criteria}'. Showing top 3 overall."
        matching_ranks = [1, 2, 3]
    
    # Remove duplicates while preserving order
    seen = set()
    unique_ranks = []
    for r in matching_ranks:
        if r not in seen:
            seen.add(r)
            unique_ranks.append(r)
    
    return compare_daycares(unique_ranks[:3])


def interactive_menu():
    """Run an interactive comparison menu."""
    
    print("""
╔══════════════════════════════════════════════════════════════════════════════╗
║              RICHMOND BC DAYCARE COMPARISON TOOL                              ║
╚══════════════════════════════════════════════════════════════════════════════╝

Available Commands:
  - 'compare 1 3 5'  : Compare daycares #1, #3, and #5 side-by-side
  - 'find infant'    : Find best daycares for infants
  - 'find budget'    : Find most affordable options
  - 'find montessori': Find Montessori programs
  - 'find autism'    : Find inclusive/special needs programs
  - 'list'           : Show all 10 daycares
  - 'detail 1'       : Show full details for daycare #1
  - 'quit'           : Exit the program

""")
    
    daycares = create_top_10_daycares()
    
    while True:
        try:
            user_input = input("\n🔍 Enter command: ").strip().lower()
        except EOFError:
            break
        
        if not user_input:
            continue
        
        parts = user_input.split()
        command = parts[0]
        
        if command == 'quit' or command == 'exit' or command == 'q':
            print("Goodbye!")
            break
        
        elif command == 'list':
            print("\n📋 TOP 10 DAYCARES IN RICHMOND BC:\n")
            for dc in daycares:
                stars = "⭐" * int(dc.rating)
                print(f"  #{dc.rank:2} │ {dc.name:<40} │ {dc.rating}/5.0 {stars}")
        
        elif command == 'compare':
            try:
                ranks = [int(p) for p in parts[1:] if p.isdigit()]
                if ranks:
                    print(compare_daycares(ranks))
                else:
                    print("❌ Please specify ranks to compare, e.g., 'compare 1 2 3'")
            except ValueError:
                print("❌ Invalid ranks. Use numbers 1-10.")
        
        elif command == 'find':
            if len(parts) > 1:
                criteria = " ".join(parts[1:])
                print(find_best_for_criteria(criteria))
            else:
                print("❌ Please specify criteria, e.g., 'find infant' or 'find budget'")
        
        elif command == 'detail':
            try:
                rank = int(parts[1]) if len(parts) > 1 else None
                if rank:
                    dc = get_daycare_by_rank(rank)
                    if dc:
                        print(str(dc))
                    else:
                        print(f"❌ No daycare found with rank {rank}")
                else:
                    print("❌ Please specify a rank, e.g., 'detail 1'")
            except (ValueError, IndexError):
                print("❌ Invalid rank. Use a number 1-10.")
        
        elif command == 'help':
            print("""
Commands:
  compare 1 3 5  - Compare specific daycares
  find <criteria> - Find best match (infant, budget, montessori, autism, etc.)
  list           - Show all 10 daycares
  detail <#>     - Full details for one daycare
  quit           - Exit
""")
        
        else:
            # Try to interpret as a find command
            print(find_best_for_criteria(user_input))


def main():
    """Main entry point."""
    if len(sys.argv) > 1:
        # Command line usage
        if sys.argv[1] == "compare" and len(sys.argv) > 2:
            ranks = [int(r) for r in sys.argv[2:] if r.isdigit()]
            print(compare_daycares(ranks))
        elif sys.argv[1] == "find" and len(sys.argv) > 2:
            criteria = " ".join(sys.argv[2:])
            print(find_best_for_criteria(criteria))
        else:
            print("Usage:")
            print("  python compare_daycares.py compare 1 2 3  # Compare daycares")
            print("  python compare_daycares.py find infant     # Find best for criteria")
            print("  python compare_daycares.py                 # Interactive mode")
    else:
        # Interactive mode
        interactive_menu()


if __name__ == "__main__":
    main()
