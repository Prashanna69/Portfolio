import { Flex, HStack, Heading, Spacer, Tab, TabList, Tabs, Container } from "@chakra-ui/react";
import { Link } from "react-scroll";

export default function Navbar ()
{
    return (
        <>
            <Container bg='#1f1f1f' color='white' p='10px' position='fixed' w='100%' minW='100%' boxShadow='2px 5px 10px black'>
                <Flex as='nav' p='10px' justifyContent='center' alignItems='center' flexWrap='wrap'>
                    <Tabs isLazy mt='10px' colorScheme='orange'>
                        <TabList>
                            <HStack spacing='50px' maxW="100vw" >
                                <Tab fontWeight={700}>
                                    <Link activeClass="active" to="HomePage" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
                                </Tab>
                                <Tab fontWeight={700}>
                                <Link activeClass="active" to="AboutmePage" spy={true} smooth={true} offset={50} duration={500}>About me</Link>
                                </Tab>
                                <Tab fontWeight={700}>
                                <Link activeClass="active" to="skillPage" spy={true} smooth={true} offset={50} duration={500}>Skills</Link>
                                </Tab>
                                <Tab fontWeight={700}>
                                <Link activeClass="active" to="servicePage" spy={true} smooth={true} offset={50} duration={500}>Services</Link>
                                </Tab>
                                <Tab fontWeight={700}>
                                <Link activeClass="active" to="contactMePage" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
                                </Tab>
                            </HStack>
                        </TabList>
                    </Tabs>
                </Flex>
            </Container>



        </>

    )
}