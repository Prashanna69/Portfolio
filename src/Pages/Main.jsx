import { EditIcon, PhoneIcon, AtSignIcon } from "@chakra-ui/icons";
import { Box, Button, Flex,HStack,Text,Progress, Spacer, SimpleGrid } from "@chakra-ui/react";

const date = new Date();

export default function Main ()
{
    return (
        <>
            <Box id="HomePage" minH={400} bg='#2c1b1b' color='white' p='20px' boxShadow='2px 2px 10px black'>
            <Flex  flexDir='column'>
                <Text color='whiteAlpha.500' fontSize='4rem' mt='7rem' ml='7rem' fontWeight={ 700 }>
                I'm a
            </Text>
            <Text fontSize='5rem' ml='7rem' mt={ 0 } fontWeight={ 700 }>Front-End Developer.</Text>
            </Flex>
            <Button ml='7rem' colorScheme='orange' mb='6rem' maxW='10rem' position='none'>Contact me</Button>
            </Box>

            {/*  */ }

            <Box id="AboutmePage" as="div" bg='#1f1f1f' minH={850} p={10} boxShadow='2px 2px 10px black'>
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
                            <Text color='white' fontWeight={ 500 } fontSize='20px'>Prashanna Lohani</Text>
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

            <Box id="skillPage" as="div" bg='#3d1919' minH={800} p={10} boxShadow='2px 2px 10px black' >
                <Flex justifyContent='center'>
                    <Text color='#dd6b20' mt='2rem' fontWeight={700} fontSize='4rem'>Skills</Text>
                </Flex>
                <Flex justifyContent='space-around' style={{listStyle:'none'}} mt={40}  >
                    <Flex flexDir='column' wrap='wrap'>
                        <Text color="white" fontWeight={ 500 } fontSize='20px' minW={400}>
                            <Flex>
                                <Text>HTML</Text>
                                <Spacer/>
                               <Text>90%</Text>
                            </Flex>
                            <Progress colorScheme='orange' value={90} position='none' />
                        </Text>
                        <Text color="white" fontWeight={ 500 } fontSize='20px' mt={10}>
                            <Flex>
                                <Text>CSS</Text>
                                <Spacer/>
                               <Text>60%</Text>
                            </Flex>
                            <Progress colorScheme='orange' value={60} position='none' />
                        </Text>
                    </Flex>

                        <Flex flexDir='column' wrap='wrap'>
                            <Text color="white" fontWeight={ 500 } fontSize='20px' minW={400}>
                            <Flex>
                                <Text>JavaScript</Text>
                                <Spacer/>
                               <Text>80%</Text>
                            </Flex>
                                <Progress colorScheme='orange' value={80}  position='none'/>
                            </Text>
                            <Text color="white" fontWeight={ 500 } fontSize='20px' mt={10} >
                            <Flex>
                                <Text>React</Text>
                                <Spacer/>
                               <Text>51%</Text>
                            </Flex>
                                <Progress colorScheme='orange' value={51} position='none' />
                            </Text>
                        </Flex>
                </Flex>
                <Flex justifyContent='center' mt='10rem'>
                    <Text color='white' fontWeight={800} fontSize='3rem'>I am Availabe for Freelancer !</Text>
                </Flex>
            </Box>

            {/*  */ }

            <Box id="servicePage" as="div" bg='#1f1f1f' minH={800} p={10} boxShadow='2px 2px 10px black'>
                <Flex justifyContent='center'>
                    <Text color='#dd6b20' mt='2rem' fontWeight={700} fontSize='4rem'>Services</Text>
                </Flex>
                <SimpleGrid>

                </SimpleGrid>
            </Box>

            {/*  */ }
            <Box id="contactMePage" as="div" bg='#dd5b20' minH={350} p={4} boxShadow='2px 2px 10px black'>
                <Flex justifyContent='center'>
                    <Text color='white' mt='1rem' fontWeight={700} fontSize='4rem'>Contact me</Text>
                </Flex>
                <HStack spacing='10rem' mt='2rem' ml={40}>
                    <Flex flexDir='column' justifyContent='center' alignItems='center'>
                        <Flex alignItems='center' ml={2}>
                            <HStack spacing={2}>
                            <PhoneIcon color='white'/>
                            <Text color='white' fontWeight={ 500 } fontSize='1.5rem' >
                                Call me on
                            </Text>
                            </HStack>
                        </Flex>
                            <Text color='white' fontWeight={ 500 } fontSize='1.2rem'>9842381781</Text>
                    </Flex>
                    <Flex flexDir='column' justifyContent='center' ml={10}>
                        <Flex alignItems='center' ml={2}>
                            <HStack spacing={2}>
                            <EditIcon color='white'/>
                            <Text color='white' fontWeight={ 500 } fontSize='1.5rem' >
                                Email
                            </Text>
                            </HStack>
                        </Flex>
                            <Text color='white' fontWeight={ 500 } fontSize='1.2rem'>plohani2003@gmail.com</Text>
                    </Flex>
                    <Flex flexDir='column' justifyContent='center' ml={10}>
                        <Flex alignItems='center' ml={2}>
                            <HStack spacing={2}>
                            <AtSignIcon color='white'/>
                            <Text color='white' fontWeight={ 500 } fontSize='1.5rem' >
                                Address
                            </Text>
                            </HStack>
                        </Flex>
                            <Text color='white' fontWeight={ 500 } fontSize='1.2rem'>Gongabu,Kathmandu</Text>
                    </Flex>
                </HStack>
                <footer>
                    <Flex justifyContent='center' mt={14}>
                        <Text color='white' fontWeight={ 500 } fontSize='1rem'>© {date.getFullYear()}  PRASHANNA LOHANI. All rights reserved.</Text>
                    </Flex>
                </footer>
            </Box>
        </>
    )
}

