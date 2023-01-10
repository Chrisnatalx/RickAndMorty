import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
	Badge,
	Button,
	Card,
	CardBody,
	Center,
	Heading,
	Image,
	Link,
	Stack,
	Text,
} from "@chakra-ui/react";

export const CardItem = ({ image, name, status, gender, location }) => {
	return (
		<>
			<Card maxW="sm" m={4} fontFamily="Open Sans">
				<CardBody>
					<Image
						src={image}
						alt="Green double couch with wooden legs"
						borderRadius="lg"
					/>
					<Stack mt="6" spacing="3">
						<Heading size="md">{name}</Heading>
						<Text> Gender: {gender}</Text>
						<Text> Last Location: {location.name}</Text>

						{status === "Alive" ? (
							<Badge fontSize="0.8em" w="45px" colorScheme="green">
								{status}
							</Badge>
						) : status === "Dead" ? (
							<Badge fontSize="0.8em" w="45px" colorScheme="red">
								{status}
							</Badge>
						) : (
							<Badge fontSize="0.8em" w="80px" colorScheme="blue">
								{status}
							</Badge>
						)}
					</Stack>
				</CardBody>
			</Card>
		</>
	);
};
