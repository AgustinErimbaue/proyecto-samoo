import React from 'react';
import { Box, Image, Card, CardBody, Heading, Text, CardFooter, Button, CardHeader, SimpleGrid } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import './Halls.scss';
import EventsHeader from '../../components/EventsHeader/EventsHeader';

const Halls = () => {
    return (
        <Box className='halls-container'>
            <Box>
            <EventsHeader />
            </Box>
            <Box className='background-img'>
                <Image src='src/assets/Img/Background-img.png' alt='hall-image' />
            </Box>
            <Box className='cards-container'>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <Card>
                        <CardHeader>
                            <Image src='src/assets/Img/Background-img.png' alt='Hall1-img' />
                        </CardHeader>
                        <CardBody>
                            <Heading size='md'>La Font Blanca</Heading>
                            <Text mt={1}>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button variant='outline' colorScheme='teal' borderRadius='50px'>Añadir ponencia</Button>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Image src='src/assets/Img/Hall2-img.png' alt='Hall2-img' />
                        </CardHeader>
                        <CardBody>
                            <Heading size='md'>La Alcazaba</Heading>
                            <Text mt={1}>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button variant='outline' colorScheme='teal' borderRadius='50px'>Añadir Ponencia</Button>
                        </CardFooter>
                    </Card>
                    <Card display="flex" flexDirection="column" alignItems="center" justifyContent="center"  boxShadow="md" p={4} maxW="300px">
                        <CardHeader>
                            <Box display="flex" alignItems="center" justifyContent="center" boxSize={12} bg="teal.100" borderRadius="50%">
                                <AddIcon boxSize={12} color="teal.500" />
                            </Box>
                        </CardHeader>
                        <CardBody textAlign='left'>
                            <Heading size='md'>Añadir sala</Heading>
                            <Text mt={1}>View a summary of all your customers over the last month.</Text>
                        </CardBody>
                        <CardFooter>
                            <Button variant='outline' colorScheme='teal' borderRadius='50px'>Añadir Sala</Button>
                        </CardFooter>
                    </Card>
                </SimpleGrid>
            </Box>
        </Box>
    );
}

export default Halls;