import React, { useEffect, useState } from "react";
import { Box, Heading, Text, Input, useMediaQuery, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../features/auth/authSlice";
import AssistantDetail from "../AssistantDetail/AssistantDetail";

const Speakers = () => {
  const { users } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSpeakers, setFilteredSpeakers] = useState([]);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    const speakers = users.filter((user) => user.user_type === "speaker");
    if (searchTerm === "") {
      setFilteredSpeakers(speakers);
    } else {
      setFilteredSpeakers(
        speakers.filter((speaker) =>
          speaker.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [users, searchTerm]);

  if (!users) {
    return "Cargando";
  }

  if (!Array.isArray(users) || users.length === 0) {
    return (
      <Box padding="20px">
        <Heading as="h2" size="lg" mb="4">
          No hay ponentes disponibles.
        </Heading>
      </Box>
    );
  }

  return (
    <Box className="participants-body" padding="20px">
      <Box className="suppliers-header" mb="4" mt="50px">
        <Heading as="h2" size="lg" mb="4">
          Ponentes
        </Heading>
      </Box>
      <Input
        type="text"
        placeholder="Buscar por nombre"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mb={4}
        p={2}
        width="100%"
      />
      {filteredSpeakers.map((assistant) => (
        <Box
          key={assistant.id || assistant.email}
          className="card"
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          alignItems="center"
          padding="20px"
          bg="white"
          borderRadius="md"
          boxShadow="md"
          mb="4"
        >
          <Box className="image-container" flexShrink="0" mb={["4", "0"]}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={isMobile ? "100" : "170"}
              height={isMobile ? "100" : "236"}
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
            <Heading as="h4" size="md" textAlign={isMobile ? "center" : "left"}>
              {assistant.name} {assistant.surname}
            </Heading>
            <Text textAlign={isMobile ? "center" : "left"}>
              Empresa: {assistant.company}
            </Text>
            <Text textAlign={isMobile ? "center" : "left"}>
              Cargo: {assistant.position}
            </Text>
            <Text textAlign={isMobile ? "center" : "left"}>
              Email: {assistant.email}
            </Text>
            <Text textAlign={isMobile ? "center" : "left"}>
              Preferencias: {assistant.interests}
            </Text>
          </Box>
          <Box className="presentation-container" marginLeft="auto" alignItems="center">
          <Box className="detail-button-container" ml={["0", "20px"]}>
              <AssistantDetail user={assistant} />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Speakers;
