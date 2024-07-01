import React, { useEffect, useState } from "react";
import { Box, Button, Heading, Text, Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import AssistantDetail from "../AssistantDetail/AssistantDetail";

const Assistants = () => {
  const { users } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredUsers(users);
    } else {
      setFilteredUsers(
        users.filter((user) =>
          `${user.name} ${user.surname}`.toLowerCase().includes(searchTerm.toLowerCase())
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
          No hay asistentes disponibles.
        </Heading>
      </Box>
    );
  }

  const handleButton = () => {
    navigate("/assistantdetail");
  };

  return (
    <Box className="participants-body" padding="20px">
      <Box className="suppliers-header" mb="4" mt="50px">
        <Heading as="h2" size="lg" mb="4">
          Asistentes
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
      {filteredUsers.map((assistant) => (
        <Box
          key={assistant._id || assistant.email}
          className="card"
          display="flex"
          flexDirection={["column", "row"]}
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
              width="170"
              height="236"
              viewBox="0 0 236 236"
              fill="none"
            >
              <image
                href={
                  assistant.avatar_url
                    ? assistant.avatar_url
                    : "https://bit.ly/dan-abramov"
                }
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
              {assistant.name} {assistant.surname}
            </Heading>
            <Text>Empresa: {assistant.company}</Text>
            <Text>Cargo: {assistant.position}</Text>
            <Text>Email: {assistant.email}</Text>
            <Text>Preferencias: {assistant.interests + ""}</Text>
          </Box>
          <Box
            className="presentation-container"
            marginLeft="auto"
            alignItems="center"
          >
            <Box className="detail-button-container" ml={["0", "20px"]}>
              <AssistantDetail user={assistant} />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Assistants;
