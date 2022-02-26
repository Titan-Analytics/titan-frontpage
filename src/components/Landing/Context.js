import { Suspense } from "react";
import NavBar from "../NavBar";
import Header from "./Hero";
import AnimationCanvas from "../Animation";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import {
  Heading,
  SimpleGrid,
  Box,
  Image as ChakraImage,
  Text,
  Center,
  Container,
} from "@chakra-ui/react";
const Section = styled.div`
  margin: 0 auto;

  background: linear-gradient(#000, #000, #000);
`;

const TextContainer = styled.div`
  margin-left: 8%;
  margin-right: 8%;
  width: 50%;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;
const DarkContainer = styled.div`
  flex: 1;
  margin: 2%;
  margin-left: 0%;
  padding: 2%;
  border-radius: 5px;
  border: 1px solid #776df5;
  align-items: center;
  font-size: 1.2em;
  &:hover {
    box-shadow: 1px -2px 38px 16px rgba(255, 255, 255, 0.09);
  }
`;

function Context() {
  return (
    <>
      <Container maxWidth={1080} py={20} className="container m-auto">
        <Fade bottom>

          <Heading textAlign={["center", "center", "left"]} mb={5}>
            Context
          </Heading>

          <SimpleGrid columns={[1, 1, 2]} spacing={8} mb={10}>
            <Box>
              <Text fontSize="xl">
                Blockchain gaming is facilitating a generational shift in value from game producers to game players, and it’s driving explosive adoption of a new generation of games.
              </Text>
            </Box>

            <Box>
              <ChakraImage height={[300, 300, 320]} src="/florian.jpeg" alt="florian" rounded="sm" />
            </Box>
          </SimpleGrid>
        </Fade>


        <Fade bottom>

          <Heading textAlign={["center", "center", "right"]} mb={5}>
            Problem & Solution
          </Heading>

          <SimpleGrid columns={[1, 1, 2]} spacing={8}>
            <Box>

              <ChakraImage src="/display.png" alt="Display" height={[300, 300, 320]} rounded="sm" objectFit="cover" />
            </Box>
            <Box fontSize="xl" textAlign={["center", "center", "right"]}>
              <Box>

                <Text mb={4}>
                  Both players and guilds are united in their desire to maximize success, but they lack the insights and performance management capabilities required to do so.
                </Text>

                <Text>
                  Our personalized player performance management platform arms players with the insights needed to inform their in-game strategy, learn from their mistakes, and get better over time.
                </Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Fade>
      </Container>




      {/* <Suspense fallback={<div>Loading...</div>}>
        <Section>
          <TextContainer>
            <Fade bottom>
              <div className="text-4xl lg:text-4xl md:text-5xl sm:text-4xl font-bold leading-normal text-white">
                <h1 id="context">Context</h1>
              </div>
              <div className="mt-sm">
                <h2 className=" text-xl font-normal leading-normal  text-white">
                  Blockchain gaming is facilitating a generational shift in
                  value from game producers to game players, and it’s driving
                  explosive adoption of a new generation of games.
                </h2>
              </div>
            </Fade>
            <Fade>
              <FlexContainer className="">
                <DarkContainer>
                  <p>
                    Traditional games greatly restrict players earning
                    potential, as game producers retain ownership over in-game
                    assets, and limit the ability of players to trade assets and
                    in-game currency for real world currency.
                  </p>
                  <p>
                    Blockchain games eliminate these restrictions, allowing
                    players to purchase and hold in-game currency and assets (as
                    NFTs) in their private wallets, and trade them at will for
                    real-world currency
                  </p>
                </DarkContainer>
              </FlexContainer>
            </Fade>
          </TextContainer>
        </Section>
      </Suspense> */}
    </>
  );
}

export default Context;
