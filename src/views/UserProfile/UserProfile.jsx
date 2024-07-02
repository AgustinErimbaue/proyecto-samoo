import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UpdateUser from "../../components/UpdateUserCopy/UpdateUser";
import { getUserById, reset, logout } from '../../features/auth/authSlice';
import QRCode from 'react-qr-code';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { 
  Box, Text, Heading, Link, Button, Center, VStack, Grid, GridItem, Divider 
} from "@chakra-ui/react";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);
  const [showUpdateUser, setShowUpdateUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      dispatch(getUserById(user._id));
    }
    return () => {
      dispatch(reset());
    };
  }, [dispatch, token]);

  if (!user) {
    return <Center>Cargando...</Center>;
  }

  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      navigate("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  const toggleUpdateUser = () => {
    console.log("Toggling UpdateUser component");
    setShowUpdateUser(prevState => !prevState);
  };

  const userContactUrl = `http://localhost:5173/userContact/${user._id}`;

  return (
    <Center py={10}>
      <Box
        w={{ base: "full", md: "80%" }}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p={6}
        boxShadow="lg"
        bg="white"
      >
        <Heading as="h1" size="xl" mb={6} textAlign="center">Perfil de Usuario</Heading>
        <VStack align="start" spacing={6}>
          <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6} w="full">
            <GridItem>
              <Text><strong>Nombre:</strong> {user.name}</Text>
            </GridItem>
            <GridItem>
              <Text><strong>Apellido:</strong> {user.surname}</Text>
            </GridItem>
            <GridItem>
              <Text><strong>Correo Electrónico:</strong> {user.email}</Text>
            </GridItem>
            <GridItem>
              <Text><strong>Teléfono:</strong> {user.phone_prefx} {user.phone_number}</Text>
            </GridItem>
            <GridItem>
              <Text><strong>Dirección:</strong> {user.address}</Text>
            </GridItem>
            <GridItem>
              <Text><strong>Código Postal:</strong> {user.zip_code}</Text>
            </GridItem>
            <GridItem>
              <Text><strong>Ciudad:</strong> {user.city}</Text>
            </GridItem>
            <GridItem>
              <Text><strong>País:</strong> {user.country}</Text>
            </GridItem>
            <GridItem>
              <Text><strong>Tipo de Usuario:</strong> {user.user_type}</Text>
            </GridItem>
            <GridItem>
              <Text>
                <strong>LinkedIn:</strong> <Link href={user.url_linkedin} isExternal>{user.url_linkedin}</Link>
              </Text>
            </GridItem>
            <GridItem>
              <Text><strong>Empresa:</strong> {user.company}</Text>
            </GridItem>
            <GridItem>
              <Text><strong>Puesto(s) de Trabajo:</strong></Text>
              {user.job_title && user.job_title.length > 0 ? (
                user.job_title.map((job, index) => (
                  <Text key={index} ml={4}>- {job}</Text>
                ))
              ) : (
                <Text>- No proporcionado</Text>
              )}
            </GridItem>
            <GridItem>
              <Text><strong>Alergias:</strong></Text>
              {user.allergies && user.allergies.length > 0 ? (
                user.allergies.map((allergy, index) => (
                  <Text key={index} ml={4}>- {allergy}</Text>
                ))
              ) : (
                <Text>- No proporcionado</Text>
              )}
            </GridItem>
            <GridItem>
              <Text><strong>Intereses:</strong></Text>
              {user.interests && user.interests.length > 0 ? (
                user.interests.map((interest, index) => (
                  <Text key={index} ml={4}>- {interest}</Text>
                ))
              ) : (
                <Text>- No proporcionado</Text>
              )}
            </GridItem>
            <GridItem>
              <Text><strong>Preferencias Alimenticias:</strong></Text>
              {user.food_preferences && user.food_preferences.length > 0 ? (
                user.food_preferences.map((preference, index) => (
                  <Text key={index} ml={4}>- {preference}</Text>
                ))
              ) : (
                <Text>- No proporcionado</Text>
              )}
            </GridItem>
            <GridItem>
              <Text><strong>Creado el:</strong> {new Date(user.createdAt).toLocaleString()}</Text>
            </GridItem>
            <GridItem>
              <Text><strong>Última Actualización:</strong> {new Date(user.updatedAt).toLocaleString()}</Text>
            </GridItem>
          </Grid>
          <Divider />
          <Center>
            <QRCode value={userContactUrl} />
          </Center>
          <Center>
            <Link as={RouterLink} to={userContactUrl} color="teal.500">Ver Información de Contacto</Link>
          </Center>
          <Button colorScheme="teal" onClick={toggleUpdateUser}>
              {showUpdateUser ? 'Cerrar Actualización' : '¿Quiere actualizar su usuario?'}
          </Button>
          {showUpdateUser && (
            <Box w="full" mt={4}>
              <UpdateUser />
            </Box>
          )}
          <Center>
            <Button colorScheme="teal" onClick={handleLogout}>Cerrar Sesión</Button>
          </Center>
        </VStack>
      </Box>
    </Center>
  );
};

export default UserProfile;
