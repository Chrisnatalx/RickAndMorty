import React from "react";
import { Route, Routes } from "react-router-dom";
import { CharactersView } from "../views/CharactersView";
import { EpisodeViews } from "../views/EpisodeViews";
import { LocationViews } from "../views/LocationViews";

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<CharactersView />} />
				<Route path="/Episode" element={<EpisodeViews />} />
				<Route path="/Location" element={<LocationViews />} />
			</Routes>
		</>
	);
};
