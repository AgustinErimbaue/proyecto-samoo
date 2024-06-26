import React, { useEffect } from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllSuppliers } from "../../features/suplier/supSlice";

const Suppliers = () => {
  const { user } = useSelector((state) => state.sup);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSuppliers());
  }, []);

  if (!user) {
    return `Cargando`;
  }

  const getGradient = (type) => {
    switch (type) {
      case "gold":
        return "#FFF48D, #DCD279, #FFF7AB";
      case "platinum":
        return "#C2DEF3, #88B3DC, #ACE2FA";
      case "silver":
        return "#CBCBCB, #E7E7E7, #A4A4A4";
      default:
        return "#FFFFFF"; 
    }
  };
  return (
    <Box className="suppliers-body" padding="20px">
      <Box className="suppliers-header" mb="4" mt="50px">
        <Heading as="h2" size="lg" mb="4">
          Empresas
        </Heading>
      </Box>
      {user.map((company) => (
        <Box
          key={company.id} 
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
              <circle cx="118" cy="118" r="118" fill="url(#paint0_linear_1_33)" />
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
                  id="paint0_linear_1_33"
                  x1="37.4603"
                  y1="32.5197"
                  x2="202.574"
                  y2="237.278"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#C2DEF3" />
                  <stop offset="0.5" stopColor="#88B3DC" />
                  <stop offset="1" stopColor="#ACE2FA" />
                </linearGradient>
              </defs>
            </svg>
          </Box>

          <Box className="info-container" ml={["0", "20px"]} mb={["4", "0"]}>
            <Heading as="h4" size="md">
              {company.company_name}
            </Heading>
            <Text>Descripción de la empresa:</Text>
            <Text>Tema de ponencias: {company.interests} </Text>
            <Text>Representantes: {company.id_users}</Text>
            <Button className="info-btn" size="md">
              + Info
            </Button>
          </Box>

          <Box
            className="avatar-container"
            marginLeft="auto"
            display="flex"
            alignItems="center"
          >
            <AvatarGroup size="sm" max={2}>
              
            </AvatarGroup>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Suppliers;
