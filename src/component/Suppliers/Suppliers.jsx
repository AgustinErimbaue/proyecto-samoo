import React from 'react'
import { Avatar, AvatarGroup, Box, Button, Heading, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Suppliers = () => {
  return (
    <Box className='suppliers-body' padding='20px'> 
        <header>
                <Heading className="title-page" as="h1" size="xl" mb="4">Participantes</Heading>
                <Box className="btn-filters" display="flex" flexWrap="wrap" gap="10px" mb="4" mt='50px'>
                    <Button size="md"><Link to='/speakers'>Ponentes</Link></Button>
                    <Button size="md">Empresas</Button>
                    <Button size="md"><Link to='/asistentes'>Asistentes</Link></Button>
                    <Button size="md">Platinum</Button>
                    <Button size="md">Gold</Button>
                    <Button size="md">Silver</Button>
                </Box>
            </header>
            <Box className='suppliers-header' mb="4" mt='50px'>
                <Heading as="h2" size="lg" mb="4">Empresas</Heading>
                <Box className='show-data'>
                    <Button size="md">Ver datos de todos</Button>
                </Box>
            </Box>
            <Box className="card" display="flex" flexDirection={["column", "row"]} alignItems="center" padding="20px" bg="white" borderRadius="md" boxShadow="md">
                <Box className="image-container" flexShrink="0" mb={["4", "0"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="170" height="236" viewBox="0 0 236 236" fill="none">
                        <circle cx="118" cy="118" r="118" fill="url(#paint0_linear_1_33)" />
                        <image href="https://bit.ly/dan-abramov" x="29" y="29" height="178px" width="178px" clipPath="circle(89px at center)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_33" x1="37.4603" y1="32.5197" x2="202.574" y2="237.278" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#C2DEF3" />
                                <stop offset="0.5" stopColor="#88B3DC" />
                                <stop offset="1" stopColor="#ACE2FA" />
                            </linearGradient>
                        </defs>
                    </svg>
                </Box>
                <Box className="info-container" ml={["0", "20px"]} mb={["4", "0"]}>
                    <Heading as="h4" size="md">Nombre de la empresa</Heading>
                    <Text>Descripción de la empresa:</Text>
                    <Text>Tema de ponencias:</Text>
                    <Text>Asistentes:</Text>
                    <button className="info-btn" size="md">+ Info</button>
                </Box>
                <Box className="avatar-container" marginLeft="auto" display="flex" alignItems="center">
                    <AvatarGroup size='sm' max={2}>
                        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                        <Avatar name='Segun Adebayo' src='imangen persona' />
                        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                    </AvatarGroup>
                </Box>
            </Box>
            <Box className="card" display="flex" flexDirection={["column", "row"]} alignItems="center" padding="20px" bg="white" borderRadius="md" boxShadow="md">
                <Box className="image-container" flexShrink="0" mb={["4", "0"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="170" height="236" viewBox="0 0 236 236" fill="none">
                        <circle cx="118" cy="118" r="118" fill="url(#paint0_linear_1_53)" />
                        <image href="https://bit.ly/dan-abramov" x="29" y="29" height="178px" width="178px" clipPath="circle(89px at center)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_53" x1="37.4603" y1="32.5197" x2="202.574" y2="237.278" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FFF48D" />
                                <stop offset="0.5" stopColor="#DCD279" />
                                <stop offset="1" stopColor="#FFF7AB" />
                            </linearGradient>
                        </defs>
                    </svg>
                </Box>
                <Box className="info-container" ml={["0", "20px"]} mb={["4", "0"]}>
                    <Heading as="h4" size="md">Nombre de la empresa</Heading>
                    <Text>Descripción de la empresa:</Text>
                    <Text>Tema de ponencias:</Text>
                    <Text>Asistentes:</Text>
                    <button className="info-btn" size="md">+ Info</button>
                </Box>
                <Box className="avatar-container" marginLeft="auto" display="flex" alignItems="center">
                    <AvatarGroup size='sm' max={2}>
                        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                        <Avatar name='Segun Adebayo' src='imangen persona' />
                        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                    </AvatarGroup>
                </Box>
            </Box>
            <Box className="card" display="flex" flexDirection={["column", "row"]} alignItems="center" padding="20px" bg="white" borderRadius="md" boxShadow="md">
                <Box className="image-container" flexShrink="0" mb={["4", "0"]}>
                <svg xmlns="http://www.w3.org/2000/svg" width="170" height="236" viewBox="0 0 236 236" fill="none">
                        <circle cx="118" cy="118" r="118" fill="url(#paint0_linear_1_73)" />
                        <image href="https://bit.ly/dan-abramov" x="29" y="29" height="178px" width="178px" clipPath="circle(89px at center)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_73" x1="37.4603" y1="32.5197" x2="202.574" y2="237.278" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#CBCBCB" />
                                <stop offset="0.5" stopColor="#E7E7E7" />
                                <stop offset="1" stopColor="#A4A4A4" />
                            </linearGradient>
                        </defs>
                    </svg>
                </Box>
                <Box className="info-container" ml={["0", "20px"]} mb={["4", "0"]}>
                    <Heading as="h4" size="md">Nombre de la empresa</Heading>
                    <Text>Descripción de la empresa:</Text>
                    <Text>Tema de ponencias:</Text>
                    <Text>Asistentes:</Text>
                    <button className="info-btn" size="md">+ Info</button>
                </Box>
                <Box className="avatar-container" marginLeft="auto" display="flex" alignItems="center">
                    <AvatarGroup size='sm' max={2}>
                        <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                        <Avatar name='Segun Adebayo' src='imangen persona' />
                        <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds' />
                        <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba' />
                        <Avatar name='Christian Nwamba' src='https://bit.ly/code-beast' />
                    </AvatarGroup>
                </Box>
            </Box>
    </Box>
  )
}

export default Suppliers