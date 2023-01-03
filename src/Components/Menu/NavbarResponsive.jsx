import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
	Box,
	Button,
	Flex,
	IconButton,
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
							<MenuItem>Characters</MenuItem>
							<MenuItem>Episode</MenuItem>
							<MenuItem>Location</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</Box>
		</>
	);
};
