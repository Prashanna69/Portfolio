import { Box, Button, Flex, Input, Text, Textarea } from "@chakra-ui/react";

export default function Contact() {
  const date = new Date();
  return (
    <Box
      id="contactMePage"
      as="div"
      bg="#4b4b4b"
      minH="200"
      p={4}
      boxShadow="2px 2px 10px black"
      color="white"
    >
      <Flex justifyContent="center">
        <Text mt="1rem" fontWeight={700} fontSize="2rem">
          Contact me
        </Text>
      </Flex>
      <form onSubmit="submit">
        <Flex align="center" flexDir="column" gap="2rem" mt="2rem">
          <Input
            type="text"
            bg="#111"
            required
            maxW="20rem"
            placeholder="Name"
            border="none"
          ></Input>
          <Input
            type="Email"
            bg="#111"
            required
            maxW="20rem"
            placeholder="Email"
            border="none"
          ></Input>
          <Input
            type="text"
            required
            bg="#111"
            maxW="20rem"
            placeholder="Subject"
            border="none"
          ></Input>
          <Textarea
            required
            border="none"
            bg="#111"
            resize="none"
            maxW="20rem"
            placeholder="Message"
          />
          <Button onClick="submit" colorScheme="orange">
            Send Message
          </Button>
        </Flex>
      </form>
      <footer>
        <Flex justifyContent="center" mt={14}>
          <Text fontWeight={500} fontSize="1rem">
            © {date.getFullYear()} PRASHANNA LOHANI. All rights reserved.
          </Text>
        </Flex>
      </footer>
    </Box>
  );
}
