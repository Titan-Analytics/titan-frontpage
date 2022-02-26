import {
	Box,
} from "@chakra-ui/react";

import Header from "./NavBar";
import Footer from "./Footer";

function Layout({ children }) {
	return <Box>
		<Header />
		
		<main>
			{children}
		</main>

		<Footer />
	</Box>
}

export default Layout;