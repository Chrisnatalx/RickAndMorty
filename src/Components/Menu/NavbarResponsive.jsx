import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import {
	Box,
	Button,
	Flex,
	IconButton,
	Link,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
} from "@chakra-ui/react";

export const NavbarResponsive = () => {
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
						<Button variant="ghost">
							RickAndMorty <Text color="blue.600">Wiki </Text>
						</Button>

						<MenuButton as={IconButton} icon={<GiHamburgerMenu />}></MenuButton>
						<MenuList>
							<Link as={RouterLink} to="/">
								<MenuItem>Characters</MenuItem>
							</Link>
							<Link as={RouterLink} to="/Episode">
								<MenuItem>Episode</MenuItem>
							</Link>
							<Link as={RouterLink} to="/Location">
								<MenuItem>Location</MenuItem>
							</Link>
						</MenuList>
					</Menu>
				</Flex>
			</Box>
		</>
	);
};
