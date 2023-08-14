from pydantic import BaseModel

class CommonRequestClass(BaseModel):
    data: dict

class CommonResponseClass(BaseModel):
    status: int
    data: str
    
class SudokuSolverRequestClass(BaseModel):
    data: list
    
class SudokuSolverResponseClass(BaseModel):
    status: int
    data: list