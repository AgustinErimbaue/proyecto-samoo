import React, { useEffect } from "react";
import { AvatarGroup, Box, Button, Heading, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSuppliers } from "../../features/suplier/supSlice";
import SupplierDetail from "../SupplierDetail/SupplierDetail";

const SilverSuppliers = () => {
  const { user } = useSelector((state) => state.sup);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSuppliers());
  }, [dispatch]);

  if (!user) {
    return "Cargando";
  }

  if (!Array.isArray(user)) {
    return "Error: Expected an array of users.";
  }

  const getColor = (type) => {
    switch (type) {
      case "Gold":
        return "#E8DD80";
      case "Platinum":
        return "#94BCE0";
      case "Silver":
        return "#C0C0C0";
      default:
        return "#4875a3";
    }
  };

  return (
    <Box className="suppliers-body" padding="20px">
      <Box className="suppliers-header" mb="4" mt="50px">
        <Heading as="h2" size="lg" mb="4">
          Empresas Silver
        </Heading>
      </Box>
      {user
        .filter((company) => company.type_collab === "Silver")
        .map((company) => (
          <Box
            key={company.id}
            className="card"
            display="flex"
            flexDirection={["column", "row"]}
            alignItems="center"
            padding="20px"
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
                <circle
                  cx="118"
                  cy="118"
                  r="118"
                  fill={getColor(company.type_collab)}
                />
                <image
                  href={
                    company.avatar_url !== "false"
                      ? company.avatar_url
                      : "https://bit.ly/dan-abramov"
                  }
                  x="29"
                  y="29"
                  height="178px"
                  width="178px"
                  clipPath="circle(89px at center)"
                />
              </svg>
            </Box>

            <Box className="info-container" ml={["0", "20px"]} mb={["4", "0"]}>
              <Heading as="h4" size="md">
                {company.company_name}
              </Heading>
              <Text>E-Mail: {company.email}</Text>
              <Text>Tema de ponencias: {company.interests} </Text>
              <Text>Representantes: {company.employes}</Text>
              <SupplierDetail company={company} />
            </Box>

            <Box
              className="avatar-container"
              marginLeft="auto"
              display="flex"
              alignItems="center"
            >
              <AvatarGroup size="sm" max={2}></AvatarGroup>
            </Box>
          </Box>
        ))}
    </Box>
  );
};

export default SilverSuppliers;
