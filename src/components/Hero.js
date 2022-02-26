import React from "react";
import Fade from "react-reveal/Fade";
import {Link} from "react-router-dom";
import {
  Box,
  Button,
  Heading, 

} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";

function Hero () {
  const [showModal, setShowModal] = React.useState(false);
  console.log(showModal);

  return (
    <Box pt={"120px"} pb={90}>
      <div>
        <h2 className="font-normal leading-normal mb-2 text-white">
          Launching Q2 2022
        </h2>
      </div>
      <Fade>
        <Box py={4} className="container text-white" mb={2}>
          <Heading mb={2} as="h1" size="3xl">Commercial analytics</Heading>
          <Heading as="h1" size="3xl">Built for the Metaverse</Heading>
        </Box>
        <Box className="mt-sm" maxWidth={800}>
          <h2 className="font-normal leading-normal mt-0 mb-2 text-white">
            Modern analytics to support play to earn gaming and NFT trading.
            Quickly spot opportunities in the market and maximize earning
            potential.{" "}
          </h2>
        </Box>
      </Fade>
      <div className="my-sm">
        <Button mt={ 5 } colorScheme="purple" as={ Link } to="/waitlist" rightIcon={ <BiChevronRight style={{fontSize: 20}} /> }>
          EARLY ACCESS
        </Button>
        {/*<div className="mr-sm transition duration-500 ease-in-out bg-blue bg-opacity-30 px-sm py-xs inline-block text-md leading-none rounded focus:shadow-outline hover:bg-opacity-50 text-white mt-4 lg:mt-0">*/}
        {/*  <button className="cursor-pointer" onClick={() => setShowModal(true)}>*/}
        {/*    <Link to="/waitlist">Sign up for early access!</Link>*/}
        {/*  </button>*/}
        {/*</div>*/}
        {/*<div className="transition duration-500 ease-in-out border border-opacity-0 px-sm py-xs inline-block text-md leading-none rounded focus:shadow-outline hover:border-opacity-90 text-white mt-4 lg:mt-0">*/}
        {/*  <button>Get in Touch</button>*/}
        {/*</div>*/}
      </div>
    </Box>
  );
}

export default Hero;
