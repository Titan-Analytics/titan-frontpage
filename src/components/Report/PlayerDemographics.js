import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  Image as ChakraImage,
  Text,
  Container,
  SimpleGrid, 
  Link as ChakraLink, 

} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";

function PlayerDemographics () {
  const [showModal, setShowModal] = React.useState(false);
  console.log(showModal);

  return (
    <Box >
      <ChakraImage width="100%" src="/player-demographics.jpeg" objectFit={"cover"} height="400px" alt="Player Demographics" rounded="sm" />

      <Container maxWidth={880} py={12}>
        <Fade bottom>
          <Heading textTransform={"uppercase"}  mb={4}>
            Player Demographics
          </Heading>

          <SimpleGrid columns={[1, 1, 2]} spacing={8}>
          <Box>
          <Heading size="lg">
              Gender
            </Heading>

          </Box>

          <Box>
          <Heading size="lg">
              Age
            </Heading>

          </Box>

          <Box>
          <Heading size="lg">
              Education
            </Heading>

          </Box>

          <Box>
          <Heading size="lg">
              Gender
            </Heading>

          </Box>

          <Box>
          <Heading size="lg">
              Country of Origin
            </Heading>

          </Box>

          <Box>
          <Heading size="lg">
              Crypto Holdings
            </Heading>

          </Box>
            
          </SimpleGrid>

          <Text mb={4}>
            As the P2E market matures, we expect to see growth in the total number of players, as well as diversification of segments. We believe that game producers, guilds, and investment firms armed with a strong fact-base in which to ground their decisions, will possess the knowledge needed to best serve their users, and ultimately conquer a niche in the market.
          </Text>

          <Text mb={4}>
            We hope that this study serves to support both the Web3 community and the public at large, in understanding the P2E market and game players, and we look forward to participate in its growth and development in the coming years.
          </Text>
      


        
        </Fade>
      </Container>
    </Box>
  );
}

export default PlayerDemographics;
