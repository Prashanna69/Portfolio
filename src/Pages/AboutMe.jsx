import { Box, Flex, Text } from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <Box
      id="AboutmePage"
      as="div"
      bg="#1f1f1f"
      minH={850}
      p={10}
      boxShadow="2px 2px 10px black"
    >
      <Flex justifyContent="center">
        <Text color="#dd6b20" mt="2rem" fontWeight={700} fontSize="4rem">
          About me
        </Text>
      </Flex>

      <Flex wrap="wrap" justify="center">
        <Box
          as="div"
          bgImage="url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60')"
          bgPos="center"
          bgSize="cover"
          minH={400}
          minW={300}
          mt="5rem"
        ></Box>
        <Text color="white" mt="5rem" ml="3rem" fontWeight={500} w="28rem">
          My name is{" "}
          <Text as="span" color="#dd6b20" fontSize="1.5rem">
            Prashanna Lohani.
          </Text>
          <br />I am a passionate individual with a keen interest in frontend
          development. With a strong foundation in web technologies and a
          natural curiosity for the ever-evolving world of coding, I am
          enthusiastic about crafting visually appealing and user-friendly
          interfaces. As a dedicated learner and aspiring frontend developer, I
          am actively seeking opportunities to contribute to innovative projects
          that challenge and expand my skill set.
        </Text>
      </Flex>
      <Flex
        padding="2rem"
        mt="2rem"
        ml="2rem"
        wrap="wrap"
        justifyContent="space-around"
        gap="2rem"
      >
        <Flex flexDir="column" alignItems="center" wrap="wrap">
          <Text color="#dd6b20" fontWeight={500} fontSize="20px">
            Name
          </Text>
          <Text color="white" fontWeight={500} fontSize="20px">
            Prashanna Lohani
          </Text>
        </Flex>
        <Flex flexDir="column" alignItems="center" wrap="wrap">
          <Text color="#dd6b20" fontWeight={500} fontSize="20px">
            Country
          </Text>
          <Text color="white" fontWeight={500} fontSize="20px">
            Nepal
          </Text>
        </Flex>
        <Flex flexDir="column" alignItems="center" wrap="wrap">
          <Text color="#dd6b20" fontWeight={500} fontSize="20px">
            Phone number
          </Text>
          <Text color="white" fontWeight={500} fontSize="20px">
            9842381781
          </Text>
        </Flex>
        <Flex flexDir="column" alignItems="center" wrap="wrap">
          <Text color="#dd6b20" fontWeight={500} fontSize="20px">
            Email
          </Text>
          <Text color="white" fontWeight={500} fontSize="20px">
            plohani2003@gmail.com
          </Text>
        </Flex>
      </Flex>
      <Flex flexDir="column" alignItems="center" wrap="wrap">
        <Text color="#dd6b20" fontWeight={500} fontSize="20px">
          Education
        </Text>
        <Text color="white" fontWeight={500} fontSize="18px">
          Bsc.(Hons) Computer Science
          <br />
          University of Wolverhampton
        </Text>
      </Flex>
    </Box>
  );
}
