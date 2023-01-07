import React from "react";
import { CardItem } from "./CardItem";
import {
	Center,
	Container,
	Grid,
	GridItem,
	Heading,
	Text,
} from "@chakra-ui/react";

export const CardEpisode = ({ results }) => {
	console.log(results);
	const message = " Ups... character not found";
	return (
		<Center>
			{results ? (
				<Container maxW="container.xl">
					<Grid
						templateColumns="repeat(auto-fit,minmax(330px,1fr))"
						justifyItems="center"
					>
						{results.map((result) => (
							<GridItem key={result.id}>
								<CardItem {...result} />
							</GridItem>
						))}
					</Grid>
				</Container>
			) : (
				<Heading pt="10px"> {message}</Heading>
			)}
		</Center>
	);
};
