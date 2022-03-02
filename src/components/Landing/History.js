import { Link } from "react-router-dom"
import { Suspense } from "react";
import NavBar from "../NavBar";
import Header from "./Hero";
import AnimationCanvas from "./Animation";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import NewsCard from "../NewsCard";

import {
  Heading,
  SimpleGrid,
  Box,
  Image as ChakraImage,
  Text,
  Center,
  Grid,
  Button,
  HStack,
  Container,
} from "@chakra-ui/react";


const Section = styled.div`
  padding: 8%;
  padding-top: 0;
  background: linear-gradient(#000, #000, #000);
`;

const TextContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
`;
const LeftContainer = styled.div`
  padding: 2%;
  width: 350px;
  border-radius: 5px;
  background: #202123;
  text-align: center;
  align-items: center;
  font-size: 1.2em;
`;
const Image = styled.img`
  height: 10rem;
`;
function History() {
  const CONTENT = [
    {
      text: "September 2021: Titan Analytics was launched - becoming one of the winners in Solana’s global IGNITION hackathon.",
      key: "1",
    },
    {
      text: "November 2021: Conducted one of the largest behavioural research studies into play to earn gaming globally. Created visibility into players' preferences and beliefs around gaming, and confirmed demand for Titan Analytics services.",
      subtext: `See our explainer video and prototype walkthrough ${(
        <a href="https://www.youtube.com/watch?v=v6S2S0Pekgg" target="_blank">
          here
        </a>
      )}`,
    },
  ];
  return (
    <>

      <Suspense fallback={<div>Loading...</div>}>
        <Box bg="black">

          <Container maxWidth={1080} py={20} >
            <Fade bottom>
              <Heading color="white" mb={5}>
                Our History
              </Heading>

              <SimpleGrid columns={[1, 1, 2]} spacing={8} mb={20}>
                <Box>

                  <Text color="white" fontSize="xl">
                    September 2021: Titan Analytics was launched - becoming one of the winners in Solana’s global IGNITION hackathon.
                  </Text>



                </Box>

                <Box>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/v6S2S0Pekgg"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </Box>

              </SimpleGrid>

            </Fade>
            <Fade bottom>

              <Grid templateColumns={["repeat(100%)", "repeat(100%)", "200px calc(100% - 200px)"]} mb={20}>
                <Box>
                    <ChakraImage objectPosition={"15% 50%"} src="/cont.jpeg" rounded="sm" loading="lazy" height="100%" objectFit="cover" />

                </Box>

                <Box pl={[0, 0, 10]}>

                  <Text color="white" fontSize="xl" maxWidth={500} mb={4}>
                    November 2021: Conducted one of the largest behavioural research
                    studies into play to earn gaming globally. Created visibility
                    into players' preferences and beliefs around gaming, and aligned
                    our strategy and product roadmap accordingly.
                  </Text>

                  <HStack>
                    <Button colorScheme="green">
                      READ MORE
                    </Button>

                  </HStack>
                </Box>
              </Grid>
            </Fade>


            <Fade bottom>

              <SimpleGrid columns={[1, 1, 2]} spacing={8} mb={10}>
                <Box>

                  <Text color="white" fontSize="xl" maxWidth={500} mb={4}>
                    Today: we’re focused on executing against our product roadmap and exploring partnership and investment opportunities.
                  </Text>


                  <HStack>
                    <Button colorScheme="yellow">
                      LATEST UPDATES
                    </Button>

                    <Button colorScheme="blue" as={Link} to="/contact">
                      GET IN TOUCH
                    </Button>
                  </HStack>
                </Box>

                <Box >
                  <ChakraImage height={[300, 300, 320]} width="100%" src="/hackers.png" alt="hackers" rounded="sm" />


                </Box>
              </SimpleGrid>
            </Fade>
          </Container>
        </Box>
      </Suspense>
    </>
  );
}

export default History;
