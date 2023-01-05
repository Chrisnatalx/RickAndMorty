import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { Acordion } from "./Acordion";
import { Button, Center, Flex, Text } from "@chakra-ui/react";

export const FilterCharacters = () => {
	const { setStatus, setgender, setspecies } = useContext(Context);

	const onClearFilter = () => {
		setStatus("");
		setgender("");
		setspecies("");
	};

	return (
		<Center fontFamily="Open Sans" w="100%">
			<Flex alignItems="center" direction="column" w="100%">
				<Text m={2}>Filter</Text>
				<Button
					m={2}
					variant="solid"
					colorScheme="blue"
					onClick={onClearFilter}
				>
					Clear filter
				</Button>
				<Acordion />
			</Flex>
		</Center>
	);
};
