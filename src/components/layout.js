import {
	Box,
} from "@chakra-ui/react";

import Header from "./NavBar";
import Footer from "./Footer";
import { useEffect } from "react";

function Layout({ children }) {
	useEffect(() => {
		window.scrollTo({
			top: 0, 
			left: 0, 
			// behavior: "auto",
		});
	})
	return <Box>
		<Header />

		
		<main>
			{children}
		</main>

		<Footer />
	</Box>
}

export default Layout;