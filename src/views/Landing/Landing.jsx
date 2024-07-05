import React from 'react'
import { Box, Button, Card, CardBody, CardHeader, Heading, Image, Text } from '@chakra-ui/react'
import './Landing.scss'
import { Link } from 'react-router-dom'

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
                            background: '#0f8ba0',
                            variant: 'solid',
                            borderRadius: '50px',
                            color: 'white',
                            border: '1px solid #0f8ba0'
                        }}>
                            <Link to='/register'>INSCRIPCIONES ABIERTAS</Link>
                        </Button>
                    </Box>
                    <Box className='img-continer'>
                        <Box className='img1-card'>
                            <Image src='src/assets/Img/Captura de pantalla 2024-06-28 a las 12.31.43.png' alt='image 1' borderRadius='10px' />
                        </Box>
                        <Box className='img2-card'>
                            <Image src='src/assets/Img/Imagen2.png' alt='image 1' borderRadius='10px' />
                        </Box>
                        <Box className='img3-card'>
                            <Image src='src/assets/Img/Imagen3.png' alt='image 1' borderRadius='10px' />
                        </Box>
                        <Box className='img4-card'>
                            <Image src='src/assets/Img/Imagen4.png' alt='image 1' borderRadius='10px' />
                        </Box>
                        <Box className='img5-card'>
                            <Image src='src/assets/Img/Imagen5.png' alt='image 1' borderRadius='10px' />
                        </Box>
                    </Box>
                    <Box className='map-continer' sx={{
                        marginTop: '30px',

                    }}>
                        <Box className='map-card'>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6455.431864498926!2d-0.3089513171053331!3d39.585653877455385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6040a1661cd0e7%3A0x71ea5ce044710699!2sRestaurante%20Huerto%20de%20Santa%20Mar%C3%ADa!5e0!3m2!1ses!2ses!4v1719573096671!5m2!1ses!2ses" width="1470" height="435" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </Box>
                    </Box>
                    <Box className='discover-continer'>
                        <Box className='discover-title' mb={1}>
                            <Text>Descubre nuestras</Text>
                            <Text>capacidades</Text>
                        </Box>
                        <Box className='description-bodycards'>
                            <Box className='container-card-description'>
                                <Card className='description-card'>
                                    <CardHeader>
                                        <Heading size='md'>¿QUÉ ES E-LEARNING EXPERIENCE?</Heading>
                                    </CardHeader>
                                    <CardBody>
                                        <Text>Damos respuesta a la necesidad de crear un punto de encuentro para profesionales de formación online en universidades y admin...</Text>
                                    </CardBody>
                                </Card>
                                <Card className='description-card'>
                                    <CardHeader>
                                        <Heading size='md'>¿POR QUÉ TIENES QUE ASISTIR A E-LEARNING EXPERIENCE?</Heading>
                                    </CardHeader>
                                    <CardBody>
                                        <Text>Por ser un punto de encuentro exclusivo dirigido a los profesionales del ámbito de la educación y la formación.</Text>
                                    </CardBody>
                                </Card>
                                <Card className='description-card'>
                                    <CardHeader>
                                        <Heading size='md'>ORGANIZACIÓN Y COORDINACIÓN</Heading>
                                    </CardHeader>
                                    <CardBody>
                                        <Text>Destaca como líder nacional en formación online e innovación educativa en España y Latam, con más de 25 años de experiencia.</Text>
                                    </CardBody>
                                </Card>
                            </Box>
                            <Box className='button-container'>
                                <Button colorScheme='teal' variant='outline' borderRadius='50px' width='100px'>Ver más</Button>
                            </Box>
                        </Box>
                        <Box className='speakers-continer'>
                            <Box className='speakers-title'>
                                <Text>Ponentes destacados</Text>
                            </Box>
                            <Box className='speakers-imgs'>
                                <Box className='img1-speaker'>
                                    <Image src='src/assets/Img/speaker1-img.png' alt='speaker image' className='speaker-image' />
                                </Box>
                                <Box className='img2-speaker'>
                                    <Image src='src/assets/Img/speaker2-img.png' alt='speaker image' className='speaker-image' />
                                </Box>
                                <Box className='img3-speaker'>
                                    <Image src='src/assets/Img/Speaker3-img.png' alt='speaker image' className='speaker-image' />
                                </Box>
                                <Box className='img4-speaker'>
                                    <Image src='src/assets/Img/speaker4-img.png' alt='speaker image' className='speaker-image' />
                                </Box>
                                <Box className='img5-speaker'>
                                    <Image src='src/assets/Img/speaker5-img.png' alt='speaker image' className='speaker-image' />
                                </Box>
                            </Box>
                        </Box>
                        <Box className='video-section'>
                            <Box className='video-title'>
                                <Text>Vive la experiencia con</Text>
                                <Text>nosotros</Text>
                            </Box>
                            <Box className='video-continer'>
                                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/aFdAJW1CATk?si=reoHDNfydYGLbSXm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

                                <iframe width="560" height="315" src="https://www.youtube.com/embed/GEWYbmPnPk8?si=doN9stgibuSwy7N_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </Box>
                        </Box>
                        <Box className='comments-continer' mt={100}>
                            <Box className='comments-cards' width='1000px' mt='55px'>
                                <Image src='src/assets/Img/comments-img.png' alt='comentarios' />
                            </Box>
                        </Box>
                        <Box className='registration-continer'>
                            <Box className='registration-son'>
                                <Box className='registration-title'>
                                    <Text>¡INSCRÍBETE AHORA!</Text>
                                </Box>
                                <Box className='registration-text'>
                                    <Text>NO PIERDAS LA OPORTUNIDAD DE SER PARTE DE ESTE EVENTO ÚNICO QUE ESTÁ REDEFINIENDO EL FUTURO DEL APRENDIZAJE</Text>
                                    <Text>¡RESERVA TU LUGAR AHORA MISMO!</Text>
                                </Box>
                                <Box className='registration-btn'>
                                    <Button background='#0f8ba0' variant='solid' borderRadius='50px' color='#fff'><Link to='/register'>INSCRIPCIONES ABIERTAS</Link></Button>
                                </Box>
                            </Box>
                        </Box>
                        <Box className='companies-container'>
                            <Box className='companies-footer'>
                                <Box className='image-box'>
                                    <Image
                                        src='src/assets/Img/Samoo-img-Photoroom.png'
                                        alt='Samoo img'
                                        className='company-image'
                                        width={410}
                                        height={160}
                                    />
                                </Box>
                                <Box className='image-box'>
                                    <Image
                                        src='src/assets/Img/OpenLMS-img-Photoroom.png'
                                        alt='OpenLMS img'
                                        className='company-image'
                                        width={310}
                                        height={90}
                                    />
                                </Box>
                                <Box className='image-box'>
                                    <Image
                                        src='src/assets/Img/ReadSpeaker-img-Photoroom.png'
                                        alt='ReadSpeaker img'
                                        className='company-image'
                                        width={400}
                                        height={100}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Landing