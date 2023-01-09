import { Select } from "@chakra-ui/react";
import React from "react";

export const FilterLocation = ({ total, name, setId }) => {
	return (
		<>
			<Select
				placeholder="Choose Location"
				onChange={(e) => setId(e.target.value)}
				id={name}
			>
				{[...Array(total).keys()].map((x) => {
					return (
						<option value={x + 1} key={x + 1}>
							Location {x + 1}
						</option>
					);
				})}
			</Select>
		</>
	);
};
