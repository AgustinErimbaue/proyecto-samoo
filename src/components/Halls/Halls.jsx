import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Card,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  CardHeader,
  SimpleGrid,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { getAllPlaces } from "../../features/place/placeSlice";
import EventsHeader from "../../components/EventsHeader/EventsHeader";
import AddPlaceForm from "../AddPlace/AddPlaceForm";
import CreateEvent from "../CreateEvent/CreateEvent";
import { useNavigate } from "react-router-dom";

const Halls = () => {
  const { places } = useSelector((state) => state.place);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllPlaces());
  }, [dispatch]);

  const handleAddPlaceClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    dispatch(getAllPlaces());
  };

  if (!places) {
    return "Cargando";
  }

  if (!Array.isArray(places)) {
    return "Error: Se esperaba un array de lugares.";
  }

  const handleViewEvents = (placeId) => {
    navigate(`/hallsdetail/${placeId}`);
  };

  return (
    <Box className="halls-container">
      <Box className="background-img"></Box>
      <Box className="cards-container">
        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          {places.map((place) => (
            <Card key={place._id}>
              <CardHeader display="flex" justifyContent="center">
                <Box boxSize="200px" overflow="hidden">
                    <Image
                        src={place.avatar_url !== "false" ? place.avatar_url : "src/assets/Img/Background-img.png"}
                        alt={place.place_name}
                        objectFit="cover"
                        width="100%"
                        height="100%"
                        borderRadius="md"
                    />
                </Box>
            </CardHeader>
              <CardBody>
                <Heading size="md">{place.place_name}</Heading>
                <Text mt={1}>Capacidad para {place.capacity}</Text>
              </CardBody>
              <CardFooter>
                {user && user.user_type === "supplier" && (
                  <CreateEvent place={place} />
                )}
                {user && user.user_type === "admin" && (
                  <Button
                    variant="outline"
                    colorScheme="teal"
                    borderRadius="50px"
                    onClick={() => handleViewEvents(place._id)}
                  >
                    Ver eventos
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
          {user && user.user_type === "admin" && (
            <Card
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              boxShadow="md"
              p={4}
              maxW="300px"
            >
              <CardHeader display="flex" justifyContent="center">
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  boxSize="190px"
                  bg="teal.100"
                  borderRadius="md"
                >
                  <AddIcon boxSize={8} color="teal.500" />
                </Box>
              </CardHeader>
              <CardBody textAlign="left">
                <Heading size="md">Añadir sala</Heading>
                <Text mt={1}>
                  Ver un resumen de todos tus clientes durante el último mes.
                </Text>
              </CardBody>
              <CardFooter>
                <Button
                  variant="outline"
                  colorScheme="teal"
                  borderRadius="50px"
                  onClick={handleAddPlaceClick}
                >
                  Añadir Sala
                </Button>
              </CardFooter>
            </Card>
          )}
        </SimpleGrid>
      </Box>
      <AddPlaceForm isOpen={isFormOpen} onClose={handleCloseForm} />
    </Box>
  );
};

export default Halls;
