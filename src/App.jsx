import React, { useEffect, useState } from "react";
import { Card } from "./Components/Card";
import { Navbar } from "./Components/Navbar";
import { Search } from "./Components/Search";

export const App = () => {
	const [fetchedData, updateFetchedData] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [searched, setSearched] = useState("");
	const { info, results } = fetchedData;
	const URL = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${searched}`;

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
			<Search setSearched={setSearched} setPageNumber={setPageNumber} />
			<Card results={results} />
		</>
	);
};
