import { Box, Button, Flex, HStack, Text, Link } from "@chakra-ui/react";

import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import Contact from "./Contact";

export default function Firstpg() {
  return (
    <>
      <Box
        id="HomePage"
        minH={800}
        bg="#2c1b1b"
        color="white"
        p="20px"
        boxShadow="2px 2px 10px black"
      >
        <Flex flexDir="column">
          <Text
            color="whiteAlpha.500"
            fontSize="4rem"
            mt="13rem"
            ml="7rem"
            fontWeight={700}
          >
            I'm a
          </Text>
          <Text fontSize="5rem" ml="7rem" mt={0} fontWeight={700}>
            Front-End Developer.
          </Text>
        </Flex>
        <Flex align="center" mt="2rem">
          <HStack spacing="15px">
            <Button ml="7rem" colorScheme="orange" maxW="10rem" position="none">
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
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
