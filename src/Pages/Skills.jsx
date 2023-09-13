import { Box, Flex, Text, Progress, Spacer } from "@chakra-ui/react";

import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
} from "react-icons/io5";

export default function Skills() {
  return (
    <Box
      id="skillPage"
      as="div"
      bg="#3d1919"
      minH={800}
      p={10}
      boxShadow="2px 2px 10px black"
      color="white"
      fontSize="20px"
    >
      <Flex justifyContent="center">
        <Text color="#dd6b20" mt="2rem" fontWeight={700} fontSize="4rem">
          Skills
        </Text>
      </Flex>
      <Flex
        justifyContent="space-around"
        style={{ listStyle: "none" }}
        mt={40}
        flexWrap="wrap"
        gap="2rem"
      >
        <Flex flexDir="column" wrap="wrap">
          <Text fontWeight={500} minW={{ base: "18rem", lg: "30rem" }}>
            <Flex align="center">
              <IoLogoHtml5 />
              <Text>HTML</Text>
              <Spacer />
              <Text>90%</Text>
            </Flex>
            <Progress colorScheme="orange" value={90} />
          </Text>
          <Text fontWeight={500} mt={10}>
            <Flex align="center" gap="2px">
              <IoLogoCss3 />
              <Text>CSS</Text>
              <Spacer />
              <Text>60%</Text>
            </Flex>
            <Progress colorScheme="orange" value={60} />
          </Text>
        </Flex>

        <Flex flexDir="column" wrap="wrap">
          <Text fontWeight={500} minW={{ base: "18rem", lg: "30rem" }}>
            <Flex align="center" gap="2px">
              <IoLogoJavascript />
              <Text>JavaScript</Text>
              <Spacer />
              <Text>80%</Text>
            </Flex>
            <Progress colorScheme="orange" value={80} />
          </Text>
          <Text fontWeight={500} mt={10}>
            <Flex align="center" gap="2px">
              <IoLogoReact />
              <Text>React</Text>
              <Spacer />
              <Text>51%</Text>
            </Flex>
            <Progress colorScheme="orange" value={51} />
          </Text>
        </Flex>
      </Flex>
      <Flex justifyContent="center" mt="10rem" flexShrink="inherit">
        <Text fontWeight={800} fontSize={{ base: "2rem", lg: "3rem" }}>
          I am Availabe for Freelancer !
        </Text>
      </Flex>
    </Box>
  );
}
