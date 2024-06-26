import { Box, Button, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const ParticipantsHeader = () => {
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
        <Button size="md">
          <Link to="/ponentes">Ponentes</Link>
        </Button>
        <Button size="md">
          <Link to="/suppliers">Empresas</Link>
        </Button>
        <Button size="md">
          <Link to="/asistentes">Asistentes</Link>
        </Button>
        <Button size="md">Platinum</Button>
        <Button size="md">Gold</Button>
        <Button size="md">Silver</Button>
      </Box>
    </header>
  );
};

export default ParticipantsHeader;
