import React from "react";
import { Button, Center, Flex, Heading, Input } from "@chakra-ui/react";

export const Search = ({ setPageNumber, setSearched }) => {
	const searchButton = (e) => {
		e.preventDefault();
	};

	return (
		<Center pt="40px" fontFamily="Open Sans">
			<Flex direction="column" alignItems="center">
				<Heading m={2}>Character</Heading>
				<Flex direction="row" justifyItems="center" gap="2">
					<Input
						placeholder="Search character"
						w="auto"
						onChange={(e) => {
							setPageNumber(1);
							setSearched(e.target.value);
						}}
					/>
					<Button colorScheme="blue" onClick={searchButton}>
						{" "}
						Search
					</Button>
				</Flex>
			</Flex>
		</Center>
	);
};
