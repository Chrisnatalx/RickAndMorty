import React, { useEffect } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { NavbarLarge } from "./Menu/NavbarLarge";
import { NavbarResponsive } from "./Menu/NavbarResponsive";

export const Navbar = () => {
	const [isLargerThan550] = useMediaQuery("(min-width: 550px)");

	useEffect(() => {
		if (!isLargerThan550) return;
	}, [isLargerThan550]);

	return <>{isLargerThan550 ? <NavbarLarge /> : <NavbarResponsive />}</>;
};
