import math

# A different way: Representing the tree as nested lists
# [ [3, 5], [2, 9] ] represents a tree where:
# - Root has two children
# - Left child has leaves 3 and 5
# - Right child has leaves 2 and 9
game_tree = [[3, 5], [2, 9]]

def minimax_nested(node, is_max_player):
    # Base case: if we reached a leaf node (a single number)
    if isinstance(node, int):
        return node
    
    if is_max_player:
        best_val = -float('inf')
        for child in node:
            value = minimax_nested(child, False)
            best_val = max(best_val, value)
        return best_val
    else:
        best_val = float('inf')
        for child in node:
            value = minimax_nested(child, True)
            best_val = min(best_val, value)
        return best_val

# Driver code
print("Optimal value using nested lists:", minimax_nested(game_tree, True))