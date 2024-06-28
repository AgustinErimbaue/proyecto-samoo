import React from 'react'
import { Box, Button, Image, Text } from '@chakra-ui/react'
import './Landing.scss'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Landing = () => {
    return (
        <Box className='landing-container'>
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
                            colorScheme: 'teal',
                            variant: 'solid',
                            borderRadius: '50px',
                            background: '#0f8ba0',
                            color: 'white',
                            border: '1px solid #0f8ba0'
                        }}>
                            INSCRIPCIONES ABIERTAS
                        </Button>
                    </Box>
                    <Box className='img-continer'>
                        <Box className='img1-card'>
                            <Image src='src/assets/Img/Captura de pantalla 2024-06-28 a las 12.31.43.png' alt='image 1' borderRadius='10px'/>
                        </Box>
                        <Box className='img2-card'>
                            <Image src='src/assets/Img/Imagen2.png' alt='image 1' borderRadius='10px'/>
                        </Box>
                        <Box className='img3-card'>
                            <Image src='src/assets/Img/Imagen3.png' alt='image 1' borderRadius='10px'/>
                        </Box>
                        <Box className='img4-card'>
                            <Image src='src/assets/Img/Imagen4.png' alt='image 1' borderRadius='10px'/>
                        </Box>
                        <Box className='img5-card'>
                            <Image src='src/assets/Img/Imagen5.png' alt='image 1' borderRadius='10px'/>
                        </Box>
                    </Box>
                    <Box className='map-continer' sx={{ marginTop: '30px',
                    
                    }}>
                        <Box className='map-card'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6455.431864498926!2d-0.3089513171053331!3d39.585653877455385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6040a1661cd0e7%3A0x71ea5ce044710699!2sRestaurante%20Huerto%20de%20Santa%20Mar%C3%ADa!5e0!3m2!1ses!2ses!4v1719573096671!5m2!1ses!2ses" width="1470" height="435" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Landing