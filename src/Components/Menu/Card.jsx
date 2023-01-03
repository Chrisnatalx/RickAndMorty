import React from "react";
import { Center, Container, Grid, GridItem } from "@chakra-ui/react";

import { CardItem } from "../CardItem";

export const Card = ({ results }) => {
	return (
		<Center>
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
		</Center>
	);
};
