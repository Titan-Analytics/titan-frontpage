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
  Link as ChakraLink, 
} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";

function FullReport() {
  const [showModal, setShowModal] = React.useState(false);
  console.log(showModal);

  return (
    <Box >
      <ChakraImage width="100%" src="/cover.jpeg" objectFit={"cover"} height={[320, 400, "440px"]} alt="Full Report" rounded="sm" />


      <Container maxWidth={1050} py={12}>
        <Fade>
          <Box mb={4}>
            <Heading size="lg" mb={4}>
              FULL REPORT
            </Heading>

            <Heading size="2xl" mb={4}>
              PROFILE AND PREFERENCES OF BLOCKCHAIN GAMERS
            </Heading>

            <Heading mb={4} fontWeight={400} textTransform="uppercase">
              A <b>Behavioural</b> Analysis
            </Heading>

           

            <Text color="gray.500" mb={4}>
              This report was prepared by <ChakraLink as={Link} to="/">Titan Analytics Inc.</ChakraLink>, in collaboration with <ChakraLink href="https://www.a41ventures.com/" target={"_blank"}>a41 Ventures</ChakraLink>.
            </Text>

            <Text color="red.400" textTransform={"uppercase"} fontSize="sm">
              © 2022 Titan Analytics Inc. All rights reserved.
            </Text>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

export default FullReport;
