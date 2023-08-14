import { useNavigate } from "react-router-dom";

const GameCard = (props) => {
	const navigate = useNavigate();
	const onClick = () => {
		navigate(props.url);
	};
	return (
		<div
			className="border border-black rounded-full text-center font-bold p-1 px-3 m-4"
			onClick={onClick}
		>
			{props.title}
		</div>
	);
};

const HomePage = () => {
	return (
		<div className="bg-violet-400 h-screen pt-10 p-5">
			<div className="text-center font-black text-5xl mb-10">
				JOY BYTE
			</div>
			<div className="flex flex-wrap">
				<GameCard title="Tic-Tac-Toe" url="/game/tictactoe" />
				<GameCard title="Sudoku" url="/game/sudoku" />
				<GameCard title="Sudoku Solver" url="/utils/sudokusolver" />
			</div>
		</div>
	);
};

export default HomePage;
