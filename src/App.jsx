import React from "react";
import { Navbar } from "./Components/Navbar";
import { Search } from "./Components/Search";
import { getCharacter } from "./Helpers/getCharacters";

export const App = () => {
	const onHandleClick = () => {
		getCharacter();
	};

	return (
		<>
			<Navbar />
			<Search />
		</>
	);
};
