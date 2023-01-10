import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import { Navbar } from "../Components/Navbar";
import { Card } from "../Components/Card";
import { FilterEpisode } from "../Components/Filter/FilterEpisode";
import {
	Center,
	Grid,
	GridItem,
	Heading,
	Text,
	useMediaQuery,
} from "@chakra-ui/react";
import { CardEpisode } from "../Components/CardEpisode";

export const EpisodeViews = () => {
	const { updateFetchedData } = useContext(Context);

	const [id, setId] = useState(1);
	const [info, setinfo] = useState([]);
	const [results, setResults] = useState([]);

	// results deberia mandarlo a Cards no a CardEpisode
	const { air_date, name } = info;
	const API = `https://rickandmortyapi.com/api/episode/${id}`;

	useEffect(() => {
		(async function () {
			const data = await fetch(API).then((res) => res.json());
			setinfo(data);
			const a = await Promise.all(
				data.characters.map((x) => {
					return fetch(x).then((res) => res.json());
				})
			);
			setResults(a);
		})();
	}, [API]);
	const [isLargerThan550] = useMediaQuery("(min-width: 550px)");

	useEffect(() => {
		if (!isLargerThan550) return;
	}, [isLargerThan550]);

	return (
		<>
			<Navbar />
			<Center pt="40px" fontFamily="Open Sans" flexDirection="column">
				<Heading color="blue.400" m={2}>
					Episode name : {name}
				</Heading>
				<Text>{air_date === "" ? "Unknown" : air_date}</Text>
			</Center>

			{isLargerThan550 ? (
				<Grid templateColumns="repeat(5, 1fr)">
					<GridItem colSpan={1}>
						<FilterEpisode total={51} name={name} setId={setId} />
					</GridItem>
					<GridItem colSpan={4}>
						<CardEpisode results={results} />
					</GridItem>
				</Grid>
			) : (
				<Grid>
					<GridItem>
						<FilterEpisode total={51} name={name} setId={setId} />
					</GridItem>
					<GridItem>
						<CardEpisode results={results} />
					</GridItem>
				</Grid>
			)}
		</>
	);
};
