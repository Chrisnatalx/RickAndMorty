import React, { useEffect } from "react";
import { Card } from "../Components/Card";
import { FilterCharacters } from "../Components/Filter/FilterCharacters";
import { Navbar } from "../Components/Navbar";
import { Search } from "../Components/Search";
import { Pagination } from "../Components/Pagination";
import { Grid, GridItem, useMediaQuery } from "@chakra-ui/react";

export const CharactersView = () => {
	const [isLargerThan550] = useMediaQuery("(min-width: 550px)");

	useEffect(() => {
		if (!isLargerThan550) return;
	}, [isLargerThan550]);
	return (
		<>
			<Navbar />
			<Search />

			{isLargerThan550 ? (
				<Grid templateColumns="repeat(5, 1fr)">
					<GridItem colSpan={1}>
						<FilterCharacters />
					</GridItem>
					<GridItem colSpan={4}>
						<Card />
					</GridItem>
				</Grid>
			) : (
				<Grid justifyContent="center">
					<GridItem>
						<FilterCharacters />
					</GridItem>
					<GridItem>
						<Card />
					</GridItem>
				</Grid>
			)}

			<Pagination />
		</>
	);
};
