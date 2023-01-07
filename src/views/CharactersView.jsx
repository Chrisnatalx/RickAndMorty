import React from "react";
import { Card } from "../Components/Card";
import { FilterCharacters } from "../Components/Filter/FilterCharacters";
import { Navbar } from "../Components/Navbar";
import { Search } from "../Components/Search";
import { Grid, GridItem } from "@chakra-ui/react";
import { Pagination } from "../Components/Pagination";

export const CharactersView = () => {
	return (
		<>
			<Navbar />
			<Search />
			<Grid templateColumns="repeat(5, 1fr)">
				<GridItem colSpan={1}>
					<FilterCharacters />
				</GridItem>
				<GridItem colSpan={4}>
					<Card />
				</GridItem>
			</Grid>
			<Pagination />
		</>
	);
};
