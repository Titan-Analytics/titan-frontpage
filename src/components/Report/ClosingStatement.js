import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  Image as ChakraImage,
  Text,
  Container,
  
  Link as ChakraLink, 

} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";

function ClosingStatement() {
  const [showModal, setShowModal] = React.useState(false);
  console.log(showModal);

  return (
    <Box >

      <Container maxWidth={950} py={12}>
        <Fade>
          <Heading textTransform={"uppercase"} mb={4}>
            Closing Statement
          </Heading>

          <Text mb={4}>
            As the P2E market matures, we expect to see growth in the total number of players, as well as diversification of segments. We believe that game producers, guilds, and investment firms armed with a strong fact-base in which to ground their decisions, will possess the knowledge needed to best serve their users, and ultimately conquer a niche in the market.
          </Text>

          <Text mb={4}>
            We hope that this study serves to support both the Web3 community and the public at large, in understanding the P2E market and game players, and we look forward to participate in its growth and development in the coming years.
          </Text>
      


          <Heading textTransform={"uppercase"}  mb={4}>
            Additional Inquiries
          </Heading>

          <Text mb={8}>
            For additional inquiries or requests for underlying data access, please contact <ChakraLink color="blue.500" href="mailto:titan.analytics0@gmail.com">titan.analytics0@gmail.com</ChakraLink>.
          </Text>







        </Fade>
      </Container>
    </Box>
  );
}

export default ClosingStatement;
