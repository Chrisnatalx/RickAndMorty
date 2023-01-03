import React from "react";
import { Button, Center, Flex, Heading, Input } from "@chakra-ui/react";

export const Search = () => {
	return (
		<Center pt="40px">
			<Flex direction="column" alignItems="center">
				<Heading m={2}>Character</Heading>
				<Flex direction="row" justifyItems="center" gap="2">
					<Input placeholder="Search character" w="auto" />
					<Button colorScheme="blue"> Search</Button>
				</Flex>
			</Flex>
		</Center>
	);
};
