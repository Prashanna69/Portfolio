import { Box, Flex, Text, Progress, Spacer } from "@chakra-ui/react";

import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoPython,
} from "react-icons/io5";

export default function Skills() {
  return (
    <Box
      id="skillPage"
      as="div"
      bg="#111"
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
            <Flex align="center" gap="4px">
              <IoLogoHtml5 style={{ height: "2rem", width: "2rem" }} />
              <Text>HTML</Text>
              <Spacer />
              <Text>90%</Text>
            </Flex>
            <Progress colorScheme="orange" value={90} mt="1rem" />
          </Text>
          <Text fontWeight={500} mt={10}>
            <Flex align="center" gap="4px">
              <IoLogoCss3 style={{ height: "2rem", width: "2rem" }} />
              <Text>CSS</Text>
              <Spacer />
              <Text>60%</Text>
            </Flex>
            <Progress colorScheme="orange" value={60} mt="1rem" />
          </Text>
          <Text fontWeight={500} mt={10}>
            <Flex align="center" gap="4px">
              <IoLogoPython style={{ height: "2rem", width: "2rem" }} />
              <Text>Python</Text>
              <Spacer />
              <Text>40%</Text>
            </Flex>
            <Progress colorScheme="orange" value={40} mt="1rem" />
          </Text>
        </Flex>

        <Flex flexDir="column" wrap="wrap">
          <Text fontWeight={500} minW={{ base: "18rem", lg: "30rem" }}>
            <Flex align="center" gap="4px">
              <IoLogoJavascript style={{ height: "2rem", width: "2rem" }} />
              <Text>JavaScript</Text>
              <Spacer />
              <Text>80%</Text>
            </Flex>
            <Progress colorScheme="orange" value={80} mt="1rem" />
          </Text>
          <Text fontWeight={500} mt={10}>
            <Flex align="center" gap="4px">
              <IoLogoReact style={{ height: "2rem", width: "2rem" }} />
              <Text>React</Text>
              <Spacer />
              <Text>51%</Text>
            </Flex>
            <Progress colorScheme="orange" value={51} mt="1rem" />
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
