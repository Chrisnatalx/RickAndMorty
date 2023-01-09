import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import { FilterLocation } from "../Components/Filter/FilterLocation";
import { Center, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { CardLocation } from "../Components/CardLocation";

export const LocationViews = () => {
	const [id, setId] = useState(1);
	const [info, setinfo] = useState([]);
	const [results, setResults] = useState([]);
	const { name, dimension, type } = info;

	const API = `https://rickandmortyapi.com/api/location/${id}`;

	useEffect(() => {
		(async function () {
			const data = await fetch(API).then((res) => res.json());
			setinfo(data);
			const a = await Promise.all(
				data.residents.map((x) => {
					return fetch(x).then((res) => res.json());
				})
			);
			setResults(a);
		})();
	}, [API]);

	return (
		<>
			<Navbar />
			<Center pt="40px" fontFamily="Open Sans" flexDirection="column">
				<Heading m={2} color="blue.400">
					Location : {name}
				</Heading>
				<Text fontSize="xl">Dimension: {dimension}</Text>
				<Text>Type: {type}</Text>
			</Center>
			<Grid templateColumns="repeat(5, 1fr)">
				<GridItem colSpan={1}>
					<FilterLocation total={126} name={name} setId={setId} />
				</GridItem>
				<GridItem colSpan={4}>
					<CardLocation results={results} />
				</GridItem>
			</Grid>
		</>
	);
};
