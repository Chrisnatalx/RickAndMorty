import React, { useEffect, useState } from "react";
import { Card } from "./Components/Menu/Card";
import { Navbar } from "./Components/Navbar";
import { Search } from "./Components/Search";

export const App = () => {
	const URL = `https://rickandmortyapi.com/api/character/?page=1`;
	const [fetchedData, updateFetchedData] = useState([]);
	const [pageNumber, setPageNumber] = useState(0);
	const [searched, setSearched] = useState("");
	const { info, results } = fetchedData;

	useEffect(() => {
		fetch(URL)
			.then((res) => res.json())
			.then((data) => {
				updateFetchedData(data);
			});
	}, [URL]);

	return (
		<>
			<Navbar />
			<Search />
			<Card results={results} />
		</>
	);
};
