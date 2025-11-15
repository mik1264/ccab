#!/bin/bash
# Script to delete all archived merged branches from remote
# Generated: November 15, 2025
# Total branches to delete: 35

echo "========================================="
echo "Deleting Archived Merged Branches"
echo "========================================="
echo "This script will delete 35 remote branches that have been"
echo "successfully merged into main branch."
echo ""
echo "All work from these branches is preserved in main."
echo "See ARCHIVED_BRANCHES.md for full documentation."
echo ""
read -p "Continue with deletion? (yes/no): " confirm

if [ "$confirm" != "yes" ]; then
    echo "Deletion cancelled."
    exit 0
fi

echo ""
echo "Starting deletion process..."
echo ""

# Counter for tracking progress
count=0
total=35
failed=0

# Array of branches to delete
branches=(
    "claude/abm-economics-visualizations-011CUybzyBrN5uZuhozXJ4Wa"
    "claude/add-40-visualizations-011CUyaLme9ZMobofr9VZmTy"
    "claude/add-40-visualizations-011CUyaaVe7pQSSFX2x3q81M"
    "claude/add-more-visualizations-011CUyZviR1aCLC3MRAhty6i"
    "claude/add-more-visualizations-011CUya3oQLqeRdMbYr7oFLr"
    "claude/altruism-visualization-model-011CUxvv7w2MJoVu72bvLuZf"
    "claude/ancient-economy-abm-setup-011CUycfddT6WLnDrhoFvrN6"
    "claude/autumn-leaf-visualizations-011CUxv8FywT2jBbZnrvUhFX"
    "claude/boids-flocking-visualizations-011CV1PH13ArsRnocQh4CAoT"
    "claude/constellation-visualizations-011CV5PMW6GxkD7h6jvW9pFM"
    "claude/constellation-visualizations-011CV5PkU9LsipTH2zMBbBJp"
    "claude/create-50-s-011CV4DdyNsuggvkU8LmR5dd"
    "claude/create-50-s-011CV4Dq2mayQqGRd98cxyRM"
    "claude/create-50-simulations-011CV4Dif8fNacABzvNRG8ou"
    "claude/create-feature-011CUxumQu7m1twJQqsYkueq"
    "claude/create-v20-011CV46fiXec5J6xS51iRS8A"
    "claude/create-v20-0195KzYypeWRdUxhUqBcWVDM"
    "claude/create-virus-epidemic-visualizations-011CV1MqGr6HPeoj1uFcccwJ"
    "claude/dynamic-html-visualizations-011CUwJ97XWtkwdrDoTeVYgQ"
    "claude/ethnocentrism-visualizations-011CV1PjUxAvHcLiPhzFy1bQ"
    "claude/fire-percolation-visualizations-011CV1PVUhQ1HK96CQ6XLegC"
    "claude/gravity-orbits-simulations-011CV4DvRAsG5yDXvZ9LLkzi"
    "claude/implement-feature-019hDczMMBrTg4e4i6sxPZAv"
    "claude/petri-arena-50-sims-011CV46hpqEFSYDMNxVjYt6h"
    "claude/petri-arena-prd-011CV46Mdoe3xPhHnZvvaXzB"
    "claude/plough-plague-abm-model-011CUycnBGtAsT7rf8fQXLya"
    "claude/renaissance-econsim-versions-011CUycLCkx4GoS2H9N9PxB4"
    "claude/schelling-segregation-visualizations-011CV1PP8ZkvwPZGo7THyzDB"
    "claude/solar-flare-visualizations-011CV5QKwVJmM7ao6Lq2iTQ7"
    "claude/sugarscape-inequality-visualizations-011CV1PdhkC7q2yGax4xBax6"
    "claude/sugarscape-visualizations-011CV1Mf4RShcayGkBVMmZBE"
    "claude/threejs-shader-visualizations-011CV1GYB3XEmxQ6RXARyTEB"
    "claude/tsl-shader-visualizations-011CV1GqydC7CxZeT11eheGw"
    "claude/wealth-distribution-visualizations-011CV1PsnEhaeRG5mz9a5Mvb"
    "claude/wolf-sheep-predation-visualizations-011CV1MCrmEVZNjwQUPxSxeN"
)

# Delete each branch
for branch in "${branches[@]}"; do
    count=$((count + 1))
    echo "[$count/$total] Deleting: $branch"

    if git push origin --delete "$branch" 2>&1; then
        echo "  ✓ Successfully deleted"
    else
        echo "  ✗ Failed to delete"
        failed=$((failed + 1))
    fi
    echo ""
done

echo "========================================="
echo "Deletion Summary"
echo "========================================="
echo "Total branches processed: $total"
echo "Successfully deleted: $((total - failed))"
echo "Failed: $failed"
echo ""

if [ $failed -eq 0 ]; then
    echo "All branches successfully deleted!"
    echo "You can now delete this script: rm delete-archived-branches.sh"
else
    echo "Some branches failed to delete. Check error messages above."
    echo "You may need to delete them manually via GitHub web interface."
fi

echo ""
echo "Archive documentation: ARCHIVED_BRANCHES.md"
echo "========================================="
