import React, { useContext } from "react";
import { CardItem } from "./CardItem";
import {
	Center,
	Container,
	Grid,
	GridItem,
	Heading,
	Text,
} from "@chakra-ui/react";
import { Context } from "../context/Context";

export const Card = () => {
	const { results } = useContext(Context);

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
