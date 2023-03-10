import React from "react";
import { Select } from "@chakra-ui/react";

export const FilterEpisode = ({ total, name, setId }) => {
	return (
		<>
			<Select
				placeholder="Choose Episode"
				onChange={(e) => setId(e.target.value)}
				id={name}
			>
				{[...Array(total).keys()].map((x) => {
					return (
						<option value={x + 1} key={x + 1}>
							Episode {x + 1}
						</option>
					);
				})}
			</Select>
		</>
	);
};
