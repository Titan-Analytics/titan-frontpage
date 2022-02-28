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
} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";

function FullReport() {
  const [showModal, setShowModal] = React.useState(false);
  console.log(showModal);

  return (
    <Box >
      <ChakraImage width="100%" src="/report-cover.png" objectFit={"cover"} height="320px" alt="Full Report" rounded="sm" />


      <Container maxWidth={880} py={12}>
        <Fade>
          <Box mb={4}>
            <Heading size="lg" mb={4}>
              FULL REPORT
            </Heading>

            <Heading size="2xl" mb={4}>
              PROFILE AND PREFERENCES OF BLOCKCHAIN GAMERS
            </Heading>

            <Heading mb={4}>
              A BEHAVIOR ANALYSIS
            </Heading>

            <Text color="red.400" textTransform={"uppercase"}>
              © 2022 Titan Analytics Inc. All rights reserved.
            </Text>

            <Text color="gray.400" fontSize="sm" mb={8}>
              This report was prepared by Titan Analytics Inc., in collaboration with a41 Ventures.
            </Text>

          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

export default FullReport;
