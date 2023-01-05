import React from "react";
import { Acordion } from "./Acordion";
import { Button, Center, Flex, Text } from "@chakra-ui/react";

export const FilterCharacters = () => {
	return (
		<Center fontFamily="Open Sans" w="100%">
			<Flex alignItems="center" direction="column" w="100%">
				<Text m={2}>Filter</Text>
				<Button m={2} variant="solid" colorScheme="blue">
					Clear filter
				</Button>
				<Acordion />
			</Flex>
		</Center>
	);
};
