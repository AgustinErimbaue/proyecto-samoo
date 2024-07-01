import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ColabFooter = () => {
    return (
        <Box className='colab-footer-continer'>
            <Box className='colab-footer'>
                <Box className='footer-title'>
                    <Text>Nuestros colaboradores</Text>
                </Box>
                <Box className='colab-imgs' width='100%'>
                    <Image src='src/assets/Img/logo-empresa 2.png'/>

                </Box>
            </Box>
        </Box>
    )
}

export default ColabFooter