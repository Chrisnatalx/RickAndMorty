import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/ContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ContextProvider>
			<BrowserRouter>
				<ChakraProvider>
					<App />
				</ChakraProvider>
			</BrowserRouter>
		</ContextProvider>
	</React.StrictMode>
);
