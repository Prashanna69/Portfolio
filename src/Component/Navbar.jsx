import { Flex, HStack, Heading, Spacer, Tab, TabList, Tabs } from "@chakra-ui/react";

export default function Navbar ()
{
    return (
        <>
            <Heading bg='#1f1f1f' color='white' p='10px'  >
                <Flex as='nav' p='10px' justifyContent='center' alignItems='center' >
                    <Tabs isLazy mt='10px' colorScheme='orange'>
                        <TabList>
                            <HStack spacing='50px' wrap='wrap'>
                            <Tab>Home</Tab>
                            <Tab>About Me</Tab>
                            <Tab>Skills</Tab>
                            <Tab>Portfolio</Tab>
                            <Tab>Contact</Tab>
                            </HStack>
                        </TabList>
                    </Tabs>
                </Flex>
            </Heading>



        </>

    )
}