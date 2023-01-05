import { useEffect, useState } from "react";
import { Context } from "./Context";

export const ContextProvider = ({ children }) => {
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
		<Context.Provider value={{ results, setSearched, setPageNumber }}>
			{children}
		</Context.Provider>
	);
};
