import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Heading,
  HStack,
  Container,
  Input,
  FormControl,
  FormLabel,
  Center,
  Textarea,
} from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";

function Waitlist() {
  const [showModal, setShowModal] = React.useState(false);
  console.log(showModal);

  return (
    <Box height="100vh">
      <Center height="100%">
        <Fade>

          <Box mb={4} width={["100%", 400, 440]} margin="0 auto">
            <Heading mb={1} as="h1" color="white" size="xl" mb={4}>Contact us</Heading>
            <Box rounded="lg" borderWidth={2} p={5} bg="white">

              <FormControl mb={2}>
                <FormLabel htmlFor="email">Name</FormLabel>
                <Input type="text" placeholder="Full name" />
              </FormControl>


              <FormControl mb={2}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input type="email" placeholder="example@email.com" />
              </FormControl>

              <FormControl mb={2}>
                <FormLabel htmlFor="email">Organization</FormLabel>
                <Input type="text" placeholder="Organization" />
              </FormControl>


              <FormControl mb={2}>
                <FormLabel htmlFor="email">Tell us anything you would like us to know</FormLabel>
                <Textarea type="text" placeholder="Message here" />
              </FormControl>


              <HStack mt={5}>
                <Button colorScheme="green">
                  SUBMIT
                </Button>

              </HStack>

            </Box>

          </Box>

        </Fade>


      </Center>

    </Box>
  );
}

export default Waitlist;
