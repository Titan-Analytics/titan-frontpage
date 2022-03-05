import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  Image as ChakraImage,
  Text,
  Container,
  OrderedList,
  UnorderedList,
  ListItem,
  Grid,
  Link as ChakraLink,

} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";

function ClosingStatement() {
  const [showModal, setShowModal] = React.useState(false);
  console.log(showModal);

  return (
    <Box >
      <ChakraImage width="100%" src="/segmentation.jpeg" objectFit={"cover"} height="400px" alt="Full Report" rounded="sm" loading="lazy" />

      <Container maxWidth={950} py={12}>
        <Fade>
          <Heading textTransform={"uppercase"} mb={4}>
            Market Segmentation
          </Heading>

          <Text mb={4}>
            There are 3 distinct segments identified in the market that differ in terms of demographics, game preferences, and demand for analytics services.
          </Text>



          <OrderedList>
            <ListItem pl={2} ml={2} mb={8}>
              <Grid templateColumns={["repeat(100%)", "repeat(100%)", "50% 45%"]} gap="5%" >
                <Box>
                  <Heading size="lg">
                    Experienced Grinders
                  </Heading>

                  <Heading size="sm"  fontWeight={400}>
                    17% OF THE POPULATION
                  </Heading>

                  <UnorderedList>
                    <ListItem>
                      Above average gameplay time: 26% report playing {">"}40 hours per week across all games vs. 21% average.
                    </ListItem>

                    <ListItem>
                      Longest duration of playing games with the intention of earning money: 69% reported {">"}2 years vs. 38% average.
                    </ListItem>
                    <ListItem>
                      Highest preference for team play: 27% strongly prefer team play vs. 12% average; 13.5% strongly prefer solo play vs. 25% average
                    </ListItem>

                    <ListItem>
                      Greatest diversity of experience with income generation (generating income through non-primary paths e.g. selling skins / pre-built accounts).
                    </ListItem>

                    <ListItem>
                    Highest tendency to report >$10,000 in crypto holdings (36% vs 26% average).
                    </ListItem>

                  </UnorderedList>
                </Box>

                <Box mb={5}>
                  <ChakraImage width="100%" src="/exp-gri.jpeg" objectFit={"cover"} minHeight="220px" height="100%" alt="Experience Grinders" rounded="sm" loading="lazy" /> 
                </Box>
              </Grid>
            </ListItem>


            <ListItem pl={2} ml={2} mb={8}>
              <Grid templateColumns={["repeat(100%)", "repeat(100%)", "50% 45%"]} gap="5%" >
                <Box>
                  <Heading size="lg">
                    Casual Gamers
                  </Heading>

                  <Heading size="sm"  fontWeight={400}>
                    38% OF THE POPULATION
                  </Heading>

                  <UnorderedList>
                    <ListItem>
                    Least likely to have previously / current experience playing online games with the objective of making money (28% reported {">"}2 years vs. 38% average).
                    </ListItem>

                    <ListItem>
                    Lowest weekly playing time: 60% report playing {"<"}10 hours per week across all games vs. 37% average.
                    </ListItem>

                    <ListItem>
                    Lowest duration gameplay history (32% have {"<"}4 years experience, vs. 20% average).
                    </ListItem>

                    <ListItem>
                    Highest preference for solo play: 33% strongly prefer solo play vs. 25% average.
                    </ListItem>

                  </UnorderedList>
                </Box>

                <Box mb={5} >
                  <ChakraImage width="100%" src="/casual.jpeg" objectFit={"cover"} minHeight="220px" height="100%" alt="Casual" rounded="sm" loading="lazy" mb={5}  /> 
                </Box>
              </Grid>
            </ListItem>


            <ListItem pl={2} ml={2} mb={8}>
              <Grid templateColumns={["repeat(100%)", "repeat(100%)", "50% 45%"]} gap="5%" >
                <Box>
                  <Heading size="lg">
                    Earnings Optimizers
                  </Heading>

                  <Heading size="sm"  fontWeight={400}>
                    45% OF THE POPULATION
                  </Heading>

                  <UnorderedList>
                    <ListItem>
                    Highest weekly playing time: 32% report playing {">"}40 hours per week across all games vs. 21% average.
                    </ListItem>

                    <ListItem>
                      Highest duration of gameplay history: 70% report playing all games for {">"}10 years vs 53% average.
                    </ListItem>

                    <ListItem>
                    Least likely to play just for fun: only 16% reported a 100% focus on playing for fun vs. 29% average.
                    </ListItem>

                    <ListItem>
                    Highest priority placed on economic potential when selecting a game (19.7% voted this as a top 3 criteria, vs. 12.1% on average).
                    </ListItem>

                  </UnorderedList>
                </Box>

                <Box>
                  <ChakraImage mb={5} width="100%" src="/earn-opt.jpeg" objectFit={"cover"} minHeight="220px" height="100%" alt="Earning Optimizers" rounded="sm" loading="lazy" /> 
                </Box>
              </Grid>
            </ListItem>



          </OrderedList>







        </Fade>
      </Container>
    </Box>
  );
}

export default ClosingStatement;
