import React, { useContext } from "react";
import { Context } from "../../context/Context";
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
	const { setStatus, setgender, setspecies } = useContext(Context);

	const statuses = ["Alive", "Dead", "Unknown"];
	const genders = ["Female", "Male", "Genderles"];
	const specieses = ["Human", "Alien", "Robot", "Unknown", "Animal"];

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
						{statuses.map((status) => (
							<Button
								key={status}
								m={2}
								colorScheme="blue"
								onClick={() => setStatus(status)}
							>
								{status}
							</Button>
						))}
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
						{genders.map((gender) => (
							<Button
								key={gender}
								m={2}
								colorScheme="blue"
								onClick={() => setgender(gender)}
							>
								{gender}
							</Button>
						))}
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
						{specieses.map((species) => (
							<Button
								key={species}
								m={2}
								colorScheme="blue"
								onClick={() => setspecies(species)}
							>
								{species}
							</Button>
						))}
					</AccordionPanel>
				</AccordionItem>
			</Accordion>
		</>
	);
};
