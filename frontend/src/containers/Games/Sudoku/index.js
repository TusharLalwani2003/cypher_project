import { useEffect, useState } from "react";

const Sudoku = () => {
	const [timer, setTimer] = useState(-1);
	const [isSolving, setIsSolving] = useState(false);
	const [sudoku, setSudoku] = useState([
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
	]);
	const [initialSudoku, setInitialSudoku] = useState([
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0, 0],
	]);
	const [checkSudoku, setCheckSudoku] = useState([
		[false, false, false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false, false, false],
		[false, false, false, false, false, false, false, false, false],
	]);
	const [selectedKey, setSelectedKey] = useState(0);
	const keys = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	useEffect(() => {
		newSudoku();
	}, []);

	useEffect(() => {
		if (isSolving) {
			setTimeout(() => setTimer(timer + 1), 1000);
			if (checkSudokuFunction()) {
				setIsSolving(false);
				console.log(`WIN in ${timer + 1} Seconds`);
			}
		}
	}, [timer]);

	const newSudoku = async () => {
		const response = await fetch(
			"https://sudoku-api.vercel.app/api/dosuku"
		);
		const data = await response.json();
		const newSudoku = data["newboard"]["grids"][0]["value"];
		const newSudoku2 = JSON.parse(JSON.stringify(newSudoku));
		setSudoku(newSudoku);
		setInitialSudoku(newSudoku2);
		setTimer(0);
		setIsSolving(true);
	};

	const onCellClick = (i, j) => {
		if (initialSudoku[i][j] != 0) return;
		sudoku[i][j] = selectedKey;
	};

	const checkSudokuFunction = (number) => {
		let flag = true;
		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				checkSudoku[i][j] = false;
				if (sudoku[i][j] == 0) {
					flag = false;
					continue;
				}
				let number = sudoku[i][j];
				sudoku[i][j] = -1;
				for (let k = 0; k < 9; k++) {
					if (sudoku[i][k] == number || sudoku[k][j] == number) {
						checkSudoku[i][j] = true;
					}
				}
				let x = i - (i % 3);
				let y = j - (j % 3);
				for (let X = 0; X < 3; X++) {
					for (let Y = 0; Y < 3; Y++) {
						if (sudoku[x + X][y + Y] == number)
							checkSudoku[i][j] = true;
					}
				}
				sudoku[i][j] = number;
			}
		}
		return flag;
	};

	return (
		<div>
			<div className="text-center font-black text-6xl">Sudoku</div>
			<div className="flex justify-center my-6">
				<button
					className="border-black border-2 rounded-full p-1 px-3 hover:bg-red-500 hover:scale-125"
					onClick={() => window.location.reload(false)}
				>
					Generate new Sudoku
				</button>
			</div>
			<div className="flex justify-center mb-5">
				Timer : {timer} seconds
			</div>
			<div className="flex justify-center mb-5">
				<div className="grid grid-cols-9 w-[20vw] h-[20vw] min-w-[300px] min-h-[300px]">
					{sudoku.map((row, rowNumber) => {
						return row.map((cellElement, cellElementNumber) => {
							return (
								<div
									id={`cell-${rowNumber}-${cellElementNumber}`}
									className={
										(cellElementNumber % 3 == 2
											? "border-r-2 "
											: "border-r ") +
										(cellElementNumber % 3 == 0
											? "border-l-2 "
											: "border-l ") +
										(rowNumber % 3 == 0
											? "border-t-2 "
											: "border-t ") +
										(rowNumber % 3 == 2
											? "border-b-2 "
											: "border-b ") +
										(initialSudoku[rowNumber][
											cellElementNumber
										] != 0
											? "bg-teal-500 "
											: checkSudoku[rowNumber][
													cellElementNumber
											  ]
											? "bg-red-400 "
											: sudoku[rowNumber][
													cellElementNumber
											  ] != 0
											? "bg-gray-300 "
											: " ") +
										"flex items-center justify-center border-black"
									}
									onClick={() => {
										onCellClick(
											rowNumber,
											cellElementNumber
										);
									}}
								>
									{cellElement}
								</div>
							);
						});
					})}
				</div>
			</div>
			<div className="flex justify-center mb-5">
				{keys.map((keyNumber, keyIndex) => {
					return (
						<div
							className={
								"border-2 border-black rounded-full " +
								"w-[3vw] h-[3vw] min-w-[30px] min-h-[30px] " +
								"flex items-center justify-center m-1 " +
								(selectedKey == keyIndex ? "bg-teal-400 " : " ")
							}
							onClick={() => {
								setSelectedKey(keyIndex);
							}}
						>
							{keyNumber}
						</div>
					);
				})}
			</div>
			<div
				className={
					isSolving
						? "hidden"
						: "text-center font-black text-3xl text-green-500"
				}
			>
				Solved in {timer + 1} Seconds
			</div>
		</div>
	);
};

export default Sudoku;
