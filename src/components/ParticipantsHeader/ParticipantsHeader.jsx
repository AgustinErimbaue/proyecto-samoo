import { Box, Button, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const ParticipantsHeader = ({ onShowComponent }) => {
  return (
    <header>
      <Heading className="title-page" as="h1" size="xl" mb="4">
        Participantes
      </Heading>
      <Box
        className="btn-filters"
        display="flex"
        flexWrap="wrap"
        gap="10px"
        mb="4"
        mt="50px"
      >
        <Button size="md" onClick={() => onShowComponent('Speakers')}>Ponentes</Button>
        <Button size="md" onClick={() => onShowComponent('Suppliers')}>Empresas </Button>
        <Button size="md" onClick={() => onShowComponent('Assistants')}>Asistentes</Button>
        <Button size="md">Platinum</Button>
        <Button size="md">Gold</Button>
        <Button size="md">Silver</Button>
      </Box>
    </header>
  );
};

export default ParticipantsHeader;
