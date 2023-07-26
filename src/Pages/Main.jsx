import { Box, Button, Flex,HStack,Text,Progress } from "@chakra-ui/react";

export default function Main ()
{
    return (
        <>
        <Flex w='100%' bg='#2c1b1b' color='white' p='20px' flexDir='column'>
                <Text color='whiteAlpha.500' fontSize='4rem' mt='7rem' ml='7rem' mb={ 0 } fontWeight={ 700 }>
                I'm a
            </Text>
            <Text fontSize='5rem' ml='7rem' mt={ 0 } fontWeight={ 700 }>Front-End Developer.</Text>
            <Button ml='7rem' colorScheme='orange' mb='6rem' maxW='10rem'>Contact me</Button>
            </Flex>

            {/*  */ }

            <Box as="div" bg='#1f1f1f' minH={850} p={10} boxShadow='2px 2px 10px black'>
                <Flex justifyContent='center'>
                    <Text color='#dd6b20' mt='2rem' fontWeight={700} fontSize='4rem'> About me</Text>
                </Flex>


                <Flex wrap='wrap'>
                    <Box as="div" bg='#dd6b20' minH={ 400 } minW={ 300 } ml='15rem' mt='5rem'></Box>
                    <Text color='white' mt='5rem' ml='3rem' fontWeight={ 500 } w='28rem'>My name is{ " " } <Text as='span' color='#dd6b20' fontSize='1.5rem'>Prashanna Lohani.</Text><br/>
                    I am a passionate individual with a keen interest in frontend development. With a strong foundation in web technologies and a natural curiosity for the ever-evolving world of coding, I am enthusiastic about crafting visually appealing and user-friendly interfaces. As a dedicated learner and aspiring frontend developer, I am actively seeking opportunities to contribute to innovative projects that challenge and expand my skill set. </Text>
                </Flex>
                <Flex padding='2rem' mt='2rem' ml='2rem' wrap='wrap'>
                    <HStack spacing='10rem'>
                        <Flex flexDir='column' alignItems='center'wrap='wrap'>
                            <Text color='#dd6b20' fontWeight={ 500 } fontSize='20px'>Name</Text>
                            <Text color='white' fontWeight={500} fontSize='20px'>Prashanna Lohani</Text>
                        </Flex>
                        <Flex flexDir='column' alignItems='center' wrap='wrap'>
                            <Text color='#dd6b20' fontWeight={ 500 } fontSize='20px'>Country</Text>
                            <Text color='white' fontWeight={500} fontSize='20px'>Nepal</Text>
                        </Flex>
                        <Flex flexDir='column' alignItems='center' wrap='wrap'>
                            <Text color='#dd6b20' fontWeight={ 500 } fontSize='20px'>Phone number</Text>
                            <Text color='white' fontWeight={500} fontSize='20px'>9842381781</Text>
                        </Flex>
                        <Flex flexDir='column' alignItems='center' wrap='wrap'>
                            <Text color='#dd6b20' fontWeight={ 500 } fontSize='20px'>Email</Text>
                            <Text color='white' fontWeight={500} fontSize='20px'>plohani2003@gmail.com</Text>
                        </Flex>
                    </HStack>
                </Flex>
                    <Flex flexDir='column' alignItems='center' wrap='wrap'>
                    <Text color='#dd6b20' fontWeight={ 500 } fontSize='20px'>Education</Text>
                    <Text color='white' fontWeight={ 500 } fontSize='18px'>
                        Bsc.(Hons) Computer Science
                        <br />
                        University of Wolverhampton
                    </Text>
                    </Flex>

            </Box>

            {/*  */ }

            <Box as="div" bg='#3d1919' minH={850} p={10} boxShadow='2px 2px 10px black'>
                <Flex justifyContent='center'>
                    <Text color='#dd6b20' mt='2rem' fontWeight={700} fontSize='4rem'>Skills</Text>
                </Flex>
                <Flex>
                    <Flex flexDir='column'>
                        <Text color="white" fontWeight={ 500 } fontSize='20px'>
                            <li >HTML</li>
                            <Progress colorScheme='orange' value={90} />
                        </Text>
                        <Text color="white" fontWeight={ 500 } fontSize='20px'>
                            <li>CSS</li>
                            <Progress colorScheme='orange' value={20} />
                        </Text>
                    </Flex>
                    <HStack spacing='10rem'>
                        <Flex flexDir='column'>
                            <Text color="white" fontWeight={ 500 } fontSize='20px'>
                                <li >JavaScript</li>
                                <Progress colorScheme='orange' value={90} />
                            </Text>
                            <Text color="white" fontWeight={ 500 } fontSize='20px'>
                                <li>React</li>
                                <Progress colorScheme='orange' value={20} />
                            </Text>
                        </Flex>
                    </HStack>
                </Flex>
            </Box>
        </>
    )
}
