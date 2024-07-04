import React from 'react';
import { Box, Button, Divider, Text } from '@chakra-ui/react';
import './EventsHeader.scss';

const EventsHeader = ({ onShowComponent }) => {
  return (
    <Box className='box-header' display="flex" flexDirection="column" alignItems="center" width="100%">
      <Box className='events-header-container' display="flex" flexDirection="column" alignItems="flex-start" width="100%" maxW="800px">
        <Box className='events-text' mb={4}>
          <Text fontSize="5xl" fontWeight="bold" fontFamily='DM Sans'>EVENTOS</Text>
        </Box>
        <Divider className='divider-events-header' borderColor="black"/>
        <Box className='btn-events-header' display="flex" gap={4} mt='25px'>
          <Button colorScheme='teal' variant='outline' color='black' onClick={() => onShowComponent('Salas')}>Salas</Button>
          <Button colorScheme='teal' variant='outline' color='black' onClick={() => onShowComponent('Ponencias')}>Ponencias</Button>
          <Button colorScheme='teal' variant='outline' color='black' onClick={() => onShowComponent('OneToOne')}>OneToOne</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default EventsHeader;
