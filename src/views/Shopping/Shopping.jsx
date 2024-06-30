import React from 'react'
import { Box, Button, Image, Text } from '@chakra-ui/react'
import ColabFooter from '../../components/ColabFooter/ColabFooter'
import './Shopping.scss'

const Shopping = () => {
    return (
        <Box className='shop-start-container'>
            <Box className='shop-body'>
                <Box className='text-body'>
                    <Text className='shop-title'>¿Trabajas con nosotros?</Text>
                    <Text className='shop-subtitle'>Dinos si eres colaborador o quieres conocernos</Text>
                    <Box className='speaker-company-btn'>
                        <Button className='colab-btn'>Colaborador</Button>
                        <Button className='company-btn'>Soy una empresa</Button>
                    </Box>
                </Box>
                <Box className='shopView-img'>
                    <Image src='src/assets/Img/Meeting-img.png' alt='meeting img' width={560} height={335} borderRadius={8} />
                </Box>
            </Box>
           
        </Box>
    )
}

export default Shopping