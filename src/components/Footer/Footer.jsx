import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box className="footer-container" sx={{
        width: '100%',
        backgroundColor: '#1C1C24',
        padding: '10px 20px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        color: 'white',
        position: 'fixed',
        bottom: 0,
        left: 0,
        zIndex: 1000,
        textAlign: 'center'
      }}>
        <Box className="copyright-container" mb="2">
          <Text>Copyright ©2024 | Todos los derechos reservados</Text>
        </Box>
        <Box className="samoo-container">
          <Text>SAMOO BY PENTEC</Text>
        </Box>
      </Box>
  );
}

export default Footer;