import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Heading,
  HStack,

  Container, 
} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";

function Hero() {
  const [showModal, setShowModal] = React.useState(false);
  console.log(showModal);

  return (
    <Box pt={"30vh"} height="100vh" >
    <Container maxWidth={1080}>
    <Fade>

      <Box mb={4}>
        <h2 className="font-normal leading-normal mb-2 text-white">
          Launching Q2 2022
        </h2>
      </Box>
        <Box mb={4} className="container text-white" >
          <Heading mb={1} as="h1" size="xl">Player Performance Optimization</Heading>
          <Heading as="h1" size="xl">Built for Blockchain Gaming</Heading>
        </Box>
        <Box className="mt-sm" maxWidth={800}>
          <h2 className="font-normal leading-normal mt-0 mb-2 text-white">
            We help players and guilds maximize their success through a personalized performance management platform and game-specific insights

          </h2>
        </Box>
      <HStack mt={5}>
        <Button colorScheme="purple" as={Link} to="/waitlist" >
          EARLY ACCESS
        </Button>

        {/* <Button  colorScheme="blue" as={Link} to="/contact">
          GET IN TOUCH
        </Button> */}
      </HStack>

      </Fade>


      </Container>
        {/*<div className="mr-sm transition duration-500 ease-in-out bg-blue bg-opacity-30 px-sm py-xs inline-block text-md leading-none rounded focus:shadow-outline hover:bg-opacity-50 text-white mt-4 lg:mt-0">*/}
        {/*  <button className="cursor-pointer" onClick={() => setShowModal(true)}>*/}
        {/*    <Link to="/waitlist">Sign up for early access!</Link>*/}
        {/*  </button>*/}
        {/*</div>*/}
        {/*<div className="transition duration-500 ease-in-out border border-opacity-0 px-sm py-xs inline-block text-md leading-none rounded focus:shadow-outline hover:border-opacity-90 text-white mt-4 lg:mt-0">*/}
        {/*  <button>Get in Touch</button>*/}
        {/*</div>*/}
    </Box>
  );
}

export default Hero;
