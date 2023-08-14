import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GETUtil } from "../apis/utils";
import HomePage from "./HomePage";

const LoadingHomepage = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		GETUtil("http://localhost:8000").then((data) => {
			if (data.status === 404) navigate("/backendabsent");
			else setIsLoading(false);
		});
	}, []);

	return (
		<>
			<div
				className={
					"flex font-black text-4xl flex-wrap bg-violet-400 min-h-screen justify-center items-center " +
					(!isLoading ? "hidden" : "")
				}
			>
				Loading . . .
			</div>
			<div hidden={isLoading}>
				<HomePage />
			</div>
		</>
	);
};

export default LoadingHomepage;
