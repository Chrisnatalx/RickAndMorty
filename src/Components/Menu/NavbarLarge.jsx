import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
	Box,
	Button,
	ButtonGroup,
	Flex,
	Menu,
	Text,
	Link,
} from "@chakra-ui/react";

export const NavbarLarge = () => {
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
							<Link as={RouterLink} to="/">
								<Button variant="ghost">
									RickAndMorty <Text color="blue.600">Wiki </Text>
								</Button>
							</Link>
						</ButtonGroup>
						<ButtonGroup>
							<Link as={RouterLink} to="/">
								<Button colorScheme="blue" variant="link">
									Characters
								</Button>
							</Link>
							<Link as={RouterLink} to="/Episode">
								<Button colorScheme="blue" variant="link">
									Episode
								</Button>
							</Link>

							<Link as={RouterLink} to="/Location">
								<Button colorScheme="blue" variant="link">
									Location
								</Button>
							</Link>
						</ButtonGroup>
					</Menu>
				</Flex>
			</Box>
		</>
	);
};
