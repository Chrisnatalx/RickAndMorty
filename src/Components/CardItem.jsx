import {
	Badge,
	Card,
	CardBody,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import React from "react";

export const CardItem = ({ image, name, status, gender }) => {
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
						<Text> Genero: {gender}</Text>

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
