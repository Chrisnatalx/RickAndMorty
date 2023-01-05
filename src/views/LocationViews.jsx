import React from "react";
import { Navbar } from "../Components/Navbar";
import { Center, Heading } from "@chakra-ui/react";

export const LocationViews = () => {
	return (
		<>
			<Navbar />
			<Center pt="40px" fontFamily="Open Sans">
				<Heading m={2}>Location</Heading>
			</Center>
		</>
	);
};
