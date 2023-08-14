import { Routes, Route } from "react-router-dom";
import BackendAbsent from "./containers/miscellaneous/BackendAbsent";
import LoadingHomepage from "./containers/LoadHomePage";
import NotFoundPage from "./containers/miscellaneous/NotFoundPage";
import TicTacToe from "./containers/Games/TicTacToe";
import Sudoku from "./containers/Games/Sudoku";

function App() {
	return (
		<Routes>
			<Route path="/" element={<LoadingHomepage />} />
			<Route path="/backendabsent" element={<BackendAbsent />} />
			<Route path="/game/tictactoe" element={<TicTacToe />} />
			<Route path="/game/sudoku" element={<Sudoku />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
