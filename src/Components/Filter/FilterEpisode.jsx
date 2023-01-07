import React, { useContext } from "react";
import { Select } from "@chakra-ui/react";
import { Context } from "../../context/Context";

export const FilterEpisode = () => {
	return (
		<>
			<Select placeholder="Choose Episode">
				{/* {episodes.map((episode) => (
					<option
						value={episode}
						key={episode}
						onSelect={() => setepisode(episode)}
					>
						Episode {episode}
					</option>
				))} */}
			</Select>
		</>
	);
};
