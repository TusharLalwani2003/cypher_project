import { useNavigate } from "react-router-dom";

const BackendAbsent = () => {
	const navigate = useNavigate();
	const onTryAgainButtonPress = () => {
		navigate("/");
	};
	return (
		<div className="flex flex-wrap bg-violet-400 min-h-screen justify-center items-center">
			<div className="text-center">
				<div className="font-black text-4xl">Backend is Absent</div>
				<div className="font-bold">Start the Backend and try Again</div>
				<button
					onClick={onTryAgainButtonPress}
					className="border-2 mt-3 rounded-full px-3 py-1 font-bold hover:bg-violet-950 hover:scale-125 hover:text-white"
				>
					Try Again?
				</button>
			</div>
		</div>
	);
};

export default BackendAbsent;
