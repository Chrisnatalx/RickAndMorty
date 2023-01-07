import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import { Navbar } from "../Components/Navbar";
import { Card } from "../Components/Card";
import { FilterEpisode } from "../Components/Filter/FilterEpisode";
import { Center, Grid, GridItem, Heading, Text } from "@chakra-ui/react";

export const EpisodeViews = () => {
	const {} = useContext(Context);
	const [infoEpisode, setinfoEpisode] = useState([]);
	const { air_date, name, id, characters } = infoEpisode;
	const results = characters;

	const URLEPISODE = `https://rickandmortyapi.com/api/episode/1`;

	useEffect(() => {
		fetch(URLEPISODE)
			.then((res) => res.json())
			.then((data) => {
				setinfoEpisode(data);
			});
	}, [URLEPISODE]);

	return (
		<>
			<Navbar />
			<Center pt="40px" fontFamily="Open Sans">
				<Heading m={2}>
					Episode {id} : {name}
				</Heading>
				<Text>{air_date}</Text>
			</Center>
			<Grid templateColumns="repeat(5, 1fr)">
				<GridItem colSpan={1}>
					<FilterEpisode />
				</GridItem>
				<GridItem colSpan={4}>
					<Card />
				</GridItem>
			</Grid>
		</>
	);
};
