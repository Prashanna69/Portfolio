import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";

import {
  IoDesktopSharp,
  IoPhonePortraitOutline,
  IoConstructOutline,
  IoTabletLandscapeOutline,
} from "react-icons/io5";
export default function Service() {
  return (
    <Box
      id="servicePage"
      as="div"
      bg="#111"
      minH={800}
      p={10}
      boxShadow="2px 2px 10px black"
    >
      <Flex justifyContent="center">
        <Text color="#dd6b20" mt="2rem" fontWeight={700} fontSize="4rem">
          Services
        </Text>
      </Flex>
      <SimpleGrid
        column={4}
        mt="3rem"
        p="2rem 3rem"
        gap="1rem"
        minChildWidth={270}
      >
        <Box
          bg="#dd6b20"
          minH="20rem"
          display="flex"
          alignItems="center"
          p="1rem 1rem"
        >
          <Flex
            justifyContent="center"
            align="center"
            flexDir="column"
            color="white"
          >
            <IoDesktopSharp
              style={{ height: "3rem", width: "3rem", color: "white" }}
            />
            <Text fontSize="xl" mt="1rem">
              Frontend Development
            </Text>
            <Text textAlign="center">
              I am able to do frontend development using react and other library
              and make a user friendly application.
            </Text>
          </Flex>
        </Box>
        <Box
          bg="#dd6b20"
          minH="20rem"
          display="flex"
          alignItems="center"
          p="1rem 1rem"
        >
          <Flex
            justifyContent="center"
            align="center"
            flexDir="column"
            color="white"
          >
            <IoConstructOutline
              style={{ height: "3rem", width: "3rem", color: "white" }}
            />
            <Text fontSize="xl" mt="1rem">
              Website Maintenance
            </Text>
            <Text textAlign="center">
              I can provide support and maintenance to insure websites are up to
              date and secure.
            </Text>
          </Flex>
        </Box>
        <Box
          bg="#dd6b20"
          minH="20rem"
          display="flex"
          alignItems="center"
          p="1rem 1rem"
        >
          <Flex
            justifyContent="center"
            align="center"
            flexDir="column"
            color="white"
          >
            <Flex align="center">
              <IoDesktopSharp
                style={{ height: "3rem", width: "3rem", color: "white" }}
              />
              <IoPhonePortraitOutline
                style={{ height: "2rem", width: "2rem", color: "white" }}
              />
              <IoTabletLandscapeOutline
                style={{ height: "2.5rem", width: "2.5rem", color: "white" }}
              />
            </Flex>
            <Text fontSize="xl" mt="1rem" textAlign="center">
              Mobile Responsive Design
            </Text>
            <Text textAlign="center">
              I can optimize websites for mobile devices, ensuring a seamless
              user experience on smartphone and tablet.
            </Text>
          </Flex>
        </Box>
        <Box
          bg="#dd6b20"
          minH="20rem"
          display="flex"
          alignItems="center"
          p="1rem 1rem"
        >
          <Flex
            justifyContent="center"
            align="center"
            flexDir="column"
            color="white"
          >
            <IoDesktopSharp
              style={{ height: "3rem", width: "3rem", color: "white" }}
            />
            <Text fontSize="xl" mt="1rem" textAlign="center">
              Designing
            </Text>
            <Text textAlign="center">
              I excel in skillfully editing images, crafting engaging
              compositions, and executing impeccable photo retouching.
            </Text>
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
