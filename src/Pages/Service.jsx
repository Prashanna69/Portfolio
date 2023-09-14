import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";

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
      <SimpleGrid></SimpleGrid>
    </Box>
  );
}
