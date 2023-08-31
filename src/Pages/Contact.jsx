import { EditIcon, PhoneIcon, AtSignIcon } from "@chakra-ui/icons";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";

export default function Contact() {
  const date = new Date();
  return (
    <Box
      id="contactMePage"
      as="div"
      bg="#dd3b20"
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

      <Flex justifyContent="space-around" mt="2rem">
        <Flex flexDir="column" align="center">
          <Flex>
            <HStack spacing={2}>
              <PhoneIcon color="white" />

              <Text fontWeight={500} fontSize="1.5rem">
                Call me on
              </Text>
            </HStack>
          </Flex>

          <Text fontWeight={500} fontSize="1.2rem">
            9842381781
          </Text>
        </Flex>

        <Flex flexDir="column" align="center">
          <Flex>
            <HStack spacing={2}>
              <EditIcon color="white" />
              <Text fontWeight={500} fontSize="1.5rem">
                Email
              </Text>
            </HStack>
          </Flex>
          <Text fontWeight={500} fontSize="1.2rem">
            plohani2003@gmail.com
          </Text>
        </Flex>
        <Flex flexDir="column" align="center">
          <Flex>
            <HStack spacing={2}>
              <AtSignIcon color="white" />
              <Text fontWeight={500} fontSize="1.5rem">
                Address
              </Text>
            </HStack>
          </Flex>
          <Text fontWeight={500} fontSize="1.2rem">
            Gongabu,Kathmandu
          </Text>
        </Flex>
      </Flex>

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
