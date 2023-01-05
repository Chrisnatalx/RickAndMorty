import React from "react";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Button,
} from "@chakra-ui/react";

export const Acordion = () => {
	return (
		<>
			<Accordion allowToggle m={2} w="80%">
				<AccordionItem>
					<AccordionButton>
						<Box as="span" flex="1" textAlign="center">
							Status
						</Box>
						<AccordionIcon />
					</AccordionButton>

					<AccordionPanel pb={4}>
						<Button m={2} colorScheme="blue">
							Alive
						</Button>
						<Button m={2} colorScheme="blue">
							Dead
						</Button>
						<Button m={2} colorScheme="blue">
							Unknown
						</Button>
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem>
					<AccordionButton>
						<Box as="span" flex="1" textAlign="center">
							Gender
						</Box>
						<AccordionIcon />
					</AccordionButton>

					<AccordionPanel pb={4}>
						<Button m={2} colorScheme="blue">
							Female
						</Button>
						<Button m={2} colorScheme="blue">
							Male
						</Button>
						<Button m={2} colorScheme="blue">
							Genderles
						</Button>
					</AccordionPanel>
				</AccordionItem>

				<AccordionItem>
					<AccordionButton>
						<Box as="span" flex="1" textAlign="center">
							Species
						</Box>
						<AccordionIcon />
					</AccordionButton>

					<AccordionPanel pb={4}>
						<Button m={2} colorScheme="blue">
							Human
						</Button>
						<Button m={2} colorScheme="blue">
							Alien
						</Button>
						<Button m={2} colorScheme="blue">
							Unknown
						</Button>
						<Button m={2} colorScheme="blue">
							Robot
						</Button>
						<Button m={2} colorScheme="blue">
							Animal
						</Button>
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
};
