import { Card, CardBody, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

export const CardItem = ({ image, name, status, gender }) => {
	return (
		<>
			<Card maxW="sm">
				<CardBody>
					<Image
						src={image}
						alt="Green double couch with wooden legs"
						borderRadius="lg"
					/>
					<Stack mt="6" spacing="3">
						<Heading size="md">{name}</Heading>
						<Text> Genero: {gender}</Text>
						<Text color="blue.600" fontSize="2xl">
							{status}
						</Text>
					</Stack>
				</CardBody>
			</Card>
		</>
	);
};
