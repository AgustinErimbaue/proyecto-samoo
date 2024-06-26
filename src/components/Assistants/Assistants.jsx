import React, { useEffect } from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../features/auth/authSlice";

const Assistants = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  if (!user) {
    return `Cargando`;
  }
  return (
    <Box className="participants-body" padding="20px">
      <Box className="suppliers-header" mb="4" mt="50px">
        <Heading as="h2" size="lg" mb="4">
          Asistentes
        </Heading>
      </Box>
      {user.map((assistants) => (
        <Box
          className="card"
          display="flex"
          flexDirection={["column", "row"]}
          alignItems="center"
          padding="20px"
          bg="white"
          borderRadius="md"
          boxShadow="md"
        >
          <Box className="image-container" flexShrink="0" mb={["4", "0"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="170"
              height="236"
              viewBox="0 0 236 236"
              fill="none"
            >
              <image
                href="https://bit.ly/dan-abramov"
                x="29"
                y="29"
                height="178px"
                width="178px"
                clipPath="circle(89px at center)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_73"
                  x1="37.4603"
                  y1="32.5197"
                  x2="202.574"
                  y2="237.278"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#CBCBCB" />
                  <stop offset="0.5" stopColor="#E7E7E7" />
                  <stop offset="1" stopColor="#A4A4A4" />
                </linearGradient>
              </defs>
            </svg>
          </Box>
          <Box className="info-container" ml={["0", "20px"]} mb={["4", "0"]}>
            <Heading as="h4" size="md">
              {assistants.surname},{assistants.name}
            </Heading>
            <Text>Empresa: {assistants.company}</Text>
            <Text>Cargo: {assistants.position}</Text>
            <Text>Email: {assistants.email}</Text>
            <Text>Preferencias: {assistants.interests}</Text>
          </Box>
          <Box
            className="presentation-container"
            marginLeft="auto"
            alignItems="center"
          >
            <Box className="presentation-inf-btn">
              <Button>+ Info</Button>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Assistants;
