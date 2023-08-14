def test_number(grid: list, x: int, y: int, number: int):
    for i in range(9):
        if(grid[x][i] == number or grid[i][y] == number):
            return False
    x = x - (x % 3)
    y = y - (y % 3)
    for i in range(3):
        for j in range(3):
            if(grid[x + i][y + j] == number):
                return False
    return True

def sudoku_solver_function(grid: list, current_x: int, current_y: int):
    if(current_x == 9):
        return sudoku_solver_function(grid, 0, current_y + 1)
    if(current_y == 9):
        return True
    if(grid[current_x][current_y] == 0):
        for i in range(9):
            if(test_number(grid, current_x, current_y, i+1)):
                grid[current_x][current_y] = i+1
                if(sudoku_solver_function(grid, current_x+1, current_y)):
                    return True
                grid[current_x][current_y] = 0
        return False
    return sudoku_solver_function(grid, current_x+1, current_y)