import { useState } from "react";

const TicTacToe = () => {
	const [board, setBoard] = useState([
		["", "", ""],
		["", "", ""],
		["", "", ""],
	]);
	const [gameEnded, setGameEnded] = useState(false);
	const [player, setPlayer] = useState("X");

	const checkWin = () => {
		for (let i = 0; i < 3; i++) {
			if (
				board[i][0] === board[i][1] &&
				board[i][1] === board[i][2] &&
				board[i][0] !== "" &&
				board[i][1] !== "" &&
				board[i][2] !== ""
			)
				return true;
			if (
				board[0][i] === board[1][i] &&
				board[1][i] === board[2][i] &&
				board[0][i] !== "" &&
				board[1][i] !== "" &&
				board[2][i] !== ""
			)
				return true;
		}
		if (
			board[0][0] === board[1][1] &&
			board[1][1] === board[2][2] &&
			board[0][0] !== "" &&
			board[1][1] !== "" &&
			board[2][2] !== ""
		)
			return true;
		if (
			board[0][2] === board[1][1] &&
			board[1][1] === board[2][0] &&
			board[2][0] !== "" &&
			board[1][1] !== "" &&
			board[0][2] !== ""
		)
			return true;
		return false;
	};

	const resetBoard = () => {
		setGameEnded(false);
		setBoard([
			["", "", ""],
			["", "", ""],
			["", "", ""],
		]);
		setPlayer("X");
	};

	const checkFull = () => {
		for (let i = 0; i < 3; i++)
			for (let j = 0; j < 3; j++)
				if (board[i][j] !== "X" && board[i][j] !== "O") return false;
		return true;
	};

	const CellClick = (i, j) => {
		if (board[i][j] === "X" || board[i][j] === "O") return;
		let newBoard = [...board];
		newBoard[i][j] = player;
		setBoard(newBoard);
		if (checkWin()) {
			setGameEnded(true);
		} else if (checkFull()) {
			setPlayer("Noone");
			setGameEnded(true);
		} else {
			if (player === "X") setPlayer("O");
			else setPlayer("X");
		}
	};

	const GameOverScreen = (props) => {
		return (
			<div
				className={
					"h-screen w-screen bg-white/25 absolute flex justify-center items-center " +
					(props.hidden ? "hidden" : "")
				}
			>
				<div>
					<div
						id="tic-tac-toe-winner-panel"
						className="text-center font-black mb-2"
					>
						The Winner is {player}
					</div>
					<button
						id="tic-tac-toe-retry-button"
						onClick={resetBoard}
						className="border border-black hover:bg-black/75 hover:text-white hover:scale-125 rounded-full h-fit p-2 px-4"
					>
						Game Ended, Retry?
					</button>
				</div>
			</div>
		);
	};

	return (
		<>
			<GameOverScreen hidden={!gameEnded} />
			<div className="bg-violet-400 h-screen pt-10 p-5">
				<div
					id="tic-tac-toe-title"
					className="text-center font-black text-5xl mb-[10vh]"
				>
					TIC TAC TOE
				</div>
				<div className="flex justify-center">
					<div className="grid grid-cols-3 w-fit">
						<button
							id="top-left-tic-tac-toe-button"
							className="bg-blue-500 text-white text-[3vw] font-black border-b-4 border-blue-700 rounded h-[10vw] w-[10vw] m-2"
							onClick={() => {
								CellClick(0, 0);
							}}
						>
							{board[0][0]}
						</button>
						<button
							id="top-center-tic-tac-toe-button"
							className="bg-blue-500 text-white text-[3vw] font-black border-b-4 border-blue-700 rounded h-[10vw] w-[10vw] m-2"
							onClick={() => {
								CellClick(0, 1);
							}}
						>
							{board[0][1]}
						</button>
						<button
							id="top-right-tic-tac-toe-button"
							className="bg-blue-500 text-white text-[3vw] font-black border-b-4 border-blue-700 rounded h-[10vw] w-[10vw] m-2"
							onClick={() => {
								CellClick(0, 2);
							}}
						>
							{board[0][2]}
						</button>
						<button
							id="middle-left-tic-tac-toe-button"
							className="bg-blue-500 text-white text-[3vw] font-black border-b-4 border-blue-700 rounded h-[10vw] w-[10vw] m-2"
							onClick={() => {
								CellClick(1, 0);
							}}
						>
							{board[1][0]}
						</button>
						<button
							id="middle-center-tic-tac-toe-button"
							className="bg-blue-500 text-white text-[3vw] font-black border-b-4 border-blue-700 rounded h-[10vw] w-[10vw] m-2"
							onClick={() => {
								CellClick(1, 1);
							}}
						>
							{board[1][1]}
						</button>
						<button
							id="middle-right-tic-tac-toe-button"
							className="bg-blue-500 text-white text-[3vw] font-black border-b-4 border-blue-700 rounded h-[10vw] w-[10vw] m-2"
							onClick={() => {
								CellClick(1, 2);
							}}
						>
							{board[1][2]}
						</button>
						<button
							id="bottom-left-tic-tac-toe-button"
							className="bg-blue-500 text-white text-[3vw] font-black border-b-4 border-blue-700 rounded h-[10vw] w-[10vw] m-2"
							onClick={() => {
								CellClick(2, 0);
							}}
						>
							{board[2][0]}
						</button>
						<button
							id="bottom-center-tic-tac-toe-button"
							className="bg-blue-500 text-white text-[3vw] font-black border-b-4 border-blue-700 rounded h-[10vw] w-[10vw] m-2"
							onClick={() => {
								CellClick(2, 1);
							}}
						>
							{board[2][1]}
						</button>
						<button
							id="bottom-right-tic-tac-toe-button"
							className="bg-blue-500 text-white text-[3vw] font-black border-b-4 border-blue-700 rounded h-[10vw] w-[10vw] m-2"
							onClick={() => {
								CellClick(2, 2);
							}}
						>
							{board[2][2]}
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default TicTacToe;
