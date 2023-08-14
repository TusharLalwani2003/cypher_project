import uvicorn
from fastapi import FastAPI
from models.api_models import CommonResponseClass, SudokuSolverRequestClass, SudokuSolverResponseClass
from fastapi.middleware.cors import CORSMiddleware

from helpers.sudoku_solver import sudoku_solver_function

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
async def health_api():
	return CommonResponseClass(status=200, data="Server Is Healthy")

@app.post("/sudokusolver")
async def sudoku_solver(data: SudokuSolverRequestClass):
    answer = SudokuSolverResponseClass()
    answer = sudoku_solver_function(data, 0, 0)
    return answer

if __name__ == "__main__":
	print("Server is Running")
	uvicorn.run("app:app", reload=True)