import React from "react";
import { Box, Button, ButtonGroup, Flex, Menu, Text } from "@chakra-ui/react";

export const Navbar = () => {
	return (
		<>
			<Box
				bg="#F9F9F9"
				fontFamily="Open Sans"
				position="fixed"
				zIndex="1001"
				w="100%"
			>
				<Flex
					minWidth="max-content"
					alignItems="center"
					justifyContent="space-around"
					gap="2"
				>
					<Menu>
						<ButtonGroup>
							<Button variant="ghost">
								RickAndMorty <Text color="blue.600">Wiki </Text>
							</Button>
						</ButtonGroup>
						<ButtonGroup>
							<Button colorScheme="blue" variant="link">
								Characters
							</Button>
							<Button colorScheme="blue" variant="link">
								Episode
							</Button>
							<Button colorScheme="blue" variant="link">
								Location
							</Button>
						</ButtonGroup>
					</Menu>
				</Flex>
			</Box>
		</>
	);
};
