import React from "react";
import { Navbar } from "../Components/Navbar";
import { Center, Heading } from "@chakra-ui/react";

export const EpisodeViews = () => {
	return (
		<>
			<Navbar />
			<Center pt="40px" fontFamily="Open Sans">
				<Heading m={2}>Episode</Heading>
			</Center>
		</>
	);
};
