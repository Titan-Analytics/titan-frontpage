import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image as ChakraImage,
  Text,
  Container,
  Grid, 
} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";

function ExecutiveSummary() {
  const [showModal, setShowModal] = React.useState(false);
  console.log(showModal);

  return (
    <Box >
      <ChakraImage width="100%" src="/exec-summary.jpeg" objectFit={"cover"} height="400px" alt="Full Report" rounded="sm" loading="lazy" />

      <Container maxWidth={950} py={12}>
        <Fade bottom>
            <Heading mb={4}>
              CONTEXT & PURPOSE
            </Heading>

            <Grid templateColumns={["repeat(100%)", "repeat(100%)", "50% 45%"]} gap="5%" mb={10}>
            <Box>

            <Text mb={4}>
              Over the past year, there has been a significant increase in awareness and attention paid to blockchain gaming. Numerous, large brands including Meta, Ubisoft, Microsoft, Selfridges and Balenciaga have announced their intention to invest and nurture experiences in the metaverse. However, there is a clear gap in the availability of rich, data-driven perspectives on this market. Insights are limited to the macro level i.e. number of games launched, growth in the total player base or market cap, etc. and there does not appear to be any publicly available data to help us understand the individuals who are actually playing blockchain games i.e. who they are, what their preferences are, and how they make choices. 
            </Text>

            <Text mb={4}>
              The purpose of this study was to address the identified market insight gap, creating a rich, publicly available fact-base on the Play-to-Earn gaming market, and informing Titan Analytic’s strategic direction. The report below provides insight into our findings at a population level, and identifies the three behavioural segments in the market. 
            </Text>
            </Box>

            <Box>

            <Box height="260px" bg="gray.500" rounded="sm" mb={14}>

            </Box>

            <ChakraImage width="100%" src="/mac.jpeg" objectFit={"cover"} height="220px" alt="Activision Blizzard Microsoft" rounded="sm" loading="lazy" />

            </Box>

            </Grid>



        </Fade>
      </Container>
    </Box>
  );
}

export default ExecutiveSummary;
