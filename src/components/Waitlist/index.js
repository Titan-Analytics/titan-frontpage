import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { Select } from '@chakra-ui/react'

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
import { useState } from "react";

function Waitlist () {
  const initialData = {
    name: '',
    email: '',
    organization: '',
    message: '',
    category: ''
  }
  const [formData, setFormData] = useState(initialData)
  const [error, setError] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function onClickSubmit(e) {
    e.preventDefault()

    if (formData.name && formData.email) {
    }

    try {
      const response = await fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Waitlist?api_key=${process.env.REACT_APP_AIRTABLE_API_KEY}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          "records":
            [
              {
                "fields": formData
              }
            ]
        })
      })
    } catch (e) {
      console.error(e)
    } finally {
      setSubmitted(true)
      setFormData(initialData)

      document.getElementsByName("name")[0].value = "";
      document.getElementsByName("email")[0].value = "";
      document.getElementsByName("organization")[0].value = "";
      document.getElementsByName("message")[0].value = "";
      document.getElementsByName("category")[0].value = "";

      alert("Thank you for your interest! We will be in touch soon!");
    }
  }

  function update (e) {
    let newFormData = { ...formData };
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
    
  }

  return (
    <Box height="100vh">
    <Center height="100%">
    <Fade>

      <Box mb={4} margin="0 auto"  mt={4} mx={5}>
      <Heading mb={1} as="h1" color="white" size="xl" mb={4}>Join the waitlist!</Heading>
      <Box rounded="lg" width={["100%", "100%", 440]} borderWidth={2} p={5} bg="white">

      <form action="#" onSubmit={onClickSubmit}>
      <FormControl mb={[1, 1, 2]}>
        <FormLabel htmlFor="email">Name</FormLabel>
          <Input type="text" placeholder="Full name" name="name" onChange={ update } />
      </FormControl>


      <FormControl mb={[1, 1, 2]}>
        <FormLabel htmlFor="email">Email</FormLabel>
          <Input type="email" placeholder="example@email.com" name="email" onChange={ update } />
      </FormControl>

      <FormControl mb={[1, 1, 2]}>
        <FormLabel htmlFor="email">Organization</FormLabel>
          <Input type="text" placeholder="Organization" name="organization" onChange={ update } />
      </FormControl>

      <FormControl mb={[1, 1, 2]}>
        <FormLabel htmlFor="email">Category</FormLabel>
        <Select placeholder="Select category" name="category" onChange={ update }>
          <option value='Investor'>Investor</option>
          <option value='Guild'>Guild</option>
          <option value='Player'>Player</option>
          <option value='Other'>Other</option>
        </Select>
      </FormControl>

      <FormControl mb={[1, 1, 2]}>
        <FormLabel htmlFor="email">Tell us anything you would like us to know</FormLabel>
          <Textarea type="text" placeholder="Message here" name="message" onChange={ update } />
      </FormControl>


      <HStack mt={[2, 2, 3]}>
        <Button colorScheme="green" type="submit">
          SUBMIT
        </Button>
      </HStack>

      </form>

      </Box>

      </Box>
       
      </Fade>
     

      </Center>
      
    </Box>
  );
}

export default Waitlist ;
