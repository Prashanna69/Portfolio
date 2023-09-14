import { Box, Button, Flex, HStack, Text, Link } from "@chakra-ui/react";

import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Contact from "./Contact";
import BG from "../Image/FirstPageBG.jpg";

export default function Firstpg() {
  return (
    <>
      <Box
        id="HomePage"
        minH="45rem"
        bgImage={BG}
        bgPosition="center"
        bgSize="cover"
        color="white"
        p="20px"
        boxShadow="2px 2px 10px black"
        position="relative"
      >
        <Box
          position="absolute"
          left="0"
          top="0"
          width="100%"
          height="100%"
          background="black"
          opacity="0.9"
          zIndex="1"
        />
        <Flex flexDir="column" p="1rem 3rem">
          <Text
            color="whiteAlpha.500"
            fontSize={{ base: "2rem", lg: "4rem" }}
            mt="13rem"
            fontWeight={700}
            zIndex="2"
          >
            I'm a
          </Text>
          <Text
            fontSize={{ base: "2.5rem", lg: "5rem" }}
            mt={0}
            fontWeight={700}
            zIndex="2"
          >
            Front-End Developer.
          </Text>
        </Flex>
        <Flex mt="2rem" p="0 3rem">
          <HStack spacing="15px" flexWrap="wrap" zIndex="2">
            <Button colorScheme="orange" maxW="10rem" position="none">
              <Link
                activeClass="active"
                to={<Contact />}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact me
              </Link>
            </Button>
            <Flex gap="1rem">
              <NavLink to={"https://github.com/Prashanna69"}>
                <IoLogoGithub style={{ width: "40px", height: "40px" }} />
              </NavLink>

              <NavLink to={""}>
                <IoLogoInstagram style={{ width: "40px", height: "40px" }} />
              </NavLink>
              <NavLink
                to={"https://www.linkedin.com/in/prashanna-lohani-439317284/"}
              >
                <IoLogoLinkedin style={{ width: "40px", height: "40px" }} />
              </NavLink>
            </Flex>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
