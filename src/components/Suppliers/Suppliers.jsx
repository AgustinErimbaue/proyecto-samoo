import React, { useEffect, useState } from "react";
import {
  AvatarGroup,
  Box,
  Heading,
  Text,
  Input,
  useMediaQuery,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getAllSuppliers } from "../../features/suplier/supSlice";
import SupplierDetail from "../SupplierDetail/SupplierDetail";

const Suppliers = () => {
  const { suppliers } = useSelector((state) => state.sup);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    dispatch(getAllSuppliers());
  }, [dispatch]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredUsers(suppliers);
    } else {
      setFilteredUsers(
        suppliers.filter((company) =>
          company.company_name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [suppliers, searchTerm]);

  if (!suppliers) {
    return "Cargando";
  }

  if (!Array.isArray(suppliers)) {
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
          Empresas
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
      {filteredUsers.map((company) => (
        <Box
          key={company._id}
          className="card"
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          alignItems="center"
          padding="20px"
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

          <Box
            className="info-container"
            display="flex"
            flexDirection="column"
            ml={["0", "20px"]}
            mb={["4", "0"]}
            flex="1"
          >
            <Heading as="h4" size="md" textAlign={isMobile ? "center" : "left"}>
              {company.company_name}
            </Heading>
            <Text textAlign={isMobile ? "center" : "left"}>
              E-Mail: {company.email}
            </Text>
            <Text textAlign={isMobile ? "center" : "left"}>
              Tema de ponencias: {company.interests + " "}
            </Text>
            <Text textAlign={isMobile ? "center" : "left"}>
              Representantes: {company.employes}
            </Text>
          </Box>

          <Box className="detail-button-container" ml={["0", "20px"]}>
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

export default Suppliers;
