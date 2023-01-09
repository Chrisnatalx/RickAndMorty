import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import { Button, Center, Container, Text } from "@chakra-ui/react";

export const Pagination = () => {
	const { setPageNumber } = useContext(Context);
	const [counter, setCounter] = useState(1);

	const onNext = () => {
		setCounter(counter + 1);
	};
	const onPrev = () => {
		setCounter(counter - 1);
	};
	useEffect(() => {
		setPageNumber(counter);
	}, [counter]);

	// Preguntar a leo porque debo usar useEffect para renderizar correctamente la pagination y no desde la funcion onNext y onPrev

	return (
		<>
			<Center
				mt="10px"
				mb="30px"
				justifyContent="center"
				fontFamily="Open Sans"
			>
				<Container w="70%" display="flex" justifyContent="space-evenly">
					{counter > 1 ? (
						<Button colorScheme="blue" variant="solid" onClick={onPrev}>
							Prev
						</Button>
					) : (
						<Button colorScheme="gray" variant="solid">
							Prev
						</Button>
					)}

					<Text> Page: {counter} / 42</Text>

					{counter < 42 ? (
						<Button colorScheme="blue" variant="solid" onClick={onNext}>
							Next
						</Button>
					) : (
						<Button colorScheme="gray" variant="solid">
							Next
						</Button>
					)}
				</Container>
			</Center>
		</>
	);
};
