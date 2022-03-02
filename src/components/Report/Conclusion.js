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
  OrderedList,
  ListItem,

} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";

function Conclusion() {
  const [showModal, setShowModal] = React.useState(false);
  console.log(showModal);

  return (
    <Box >
      <ChakraImage width="100%" src="/exec-summary.jpeg" objectFit={"cover"} height="400px" alt="Full Report" loading="lazy" rounded="sm" />

      <Container maxWidth={950} py={12}>
        <Fade bottom>
          <Heading textTransform={"uppercase"} mb={4}>
            Conclusion
          </Heading>

          <Text mb={4}>
            The play to earn gaming market is highly fragmented, with clear differences in players preferences and behaviours. However, there are three overarching themes that carry implications for game developers, guilds, and investment firms:
          </Text>

          <OrderedList>
            <ListItem pl={2} ml={2} mb={8}>
              <Grid templateColumns={["repeat(100%)", "repeat(100%)", "50% 45%"]} gap="5%" >
                <Box>
                  <Text mb={2}>
                    There is <b>enough space</b> in the market for a <b>wide variety of games</b> to be <b>successful</b>. The <b>challenge</b> will be in <b>retaining</b> a leadership position once developed.
                  </Text>

                  <Text>
                    The high bar for attention capture and wide variety of player preferences emphasise the opportunity for numerous games to develop a large, sustainable player base. However, the tendency for players to frequently shift between games underscores the criticality of staying relevant and holding players' attention once captured.
                  </Text>
                </Box>

                <Box>
                  <ChakraImage width="100%" src="/handsome-gamer.png" objectFit={"cover"} minHeight="220px" height="100%" alt="Handsome Gamer" loading="lazy" rounded="sm" />
                </Box>
              </Grid>
            </ListItem>

            <ListItem pl={2} ml={2} mb={8} >

              <Grid templateColumns={["repeat(100%)", "repeat(100%)", "50% 45%"]} gap="5%">
                <Box>
                  <Text mb={2}>
                    <b>Successfully competing</b> in the Play-to-Earn market <b>relies on</b> significantly <b>more than attractive tokenomics</b>.
                  </Text>

                  <Text>
                    The majority of players indicate that ‘having fun’ is at least as important as ‘earning money’. Moreover, game ‘quality’ elements such as game aesthetics, narrative, and goal depth or complexity are more influential when selecting a game than earning potential. It is critical that developers take a ‘game-first’ approach to their product, in order to outcompete both P2E peers as well as traditional games.
                  </Text>
                </Box>

                <Box>
                  <ChakraImage width="100%" src="/woman-stars.jpeg" objectFit={"cover"} minHeight="220px" height="100%" alt="Woman Stars" loading="lazy" rounded="sm" />
                </Box>
              </Grid>
            </ListItem>

            <ListItem pl={2} ml={2} mb={4}>
              <Grid templateColumns={["repeat(100%)", "repeat(100%)", "50% 45%"]} gap="5%" >
                <Box>
                  <Text mb={2}>
                    The <b>path to success</b> relies on a deep <b>understanding</b> of your <b>target customers</b>, and <b>what it takes to win</b> with them.
                  </Text>

                  <Text>
                    Despite the high degree of variability in preferences, our segmentation highlights that there are distinct groups of players who are united in their preferences and playing style. In order to attain a leadership position and hold it, game developers will need to develop a rich, data-driven understanding of their target players, tune their product and marketing strategy accordingly, and constantly innovate to stay relevant and ahead of the competition.
                  </Text>
                </Box>

                <Box>
                  <ChakraImage width="100%" src="/big-data.jpeg" objectFit={"cover"} minHeight="220px" height="100%" alt="Big Data" loading="lazy" rounded="sm" />
                </Box>
              </Grid>
            </ListItem>
          </OrderedList>

        </Fade>
      </Container>
    </Box>
  );
}

export default Conclusion;
