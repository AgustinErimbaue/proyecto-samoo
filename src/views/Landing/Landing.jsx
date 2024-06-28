import React from 'react'
import { Box, Button, Text } from '@chakra-ui/react'
import './Landing.scss'


const Landing = () => {
    return (
        <Box className='landing-continer'>
            <Box className='start-landing'>
                <Box className='heading'>
                    <Box className='samoo-heading'>
                        <Text>SAMOO E-LEARNING</Text>
                        <Text>EXPERIENCE 2025</Text>
                        <Box className='subtitle-heading'>
                            <Text>VII Encuentro de Innovación Educativa en Universidades,</Text>
                            <Text>Administración Pública y Grandes Corporaciones</Text>
                        </Box>
                    </Box>
                    <Box className='heading-btn'>
                        <Button className='heading-btn' sx={{
                            colorScheme:'teal',
                            variant:'solid',
                            borderRadius:'50px',
                            background:' #0f8ba0',
                            color:'white',
                            border: '1px solid #0f8ba0'
                        }}
                        >INSCRIPCIONES ABIERTAS</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Landing