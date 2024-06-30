import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  VStack,
  Box,
  HStack,
} from "@chakra-ui/react";

const SupplierDetail = ({ company }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box className="presentation-inf-btn">
        <Button onClick={onOpen}>+Info</Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Información de la Empresa</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="start" spacing={4}>
              <HStack>
                <Text fontWeight="bold">CIF:</Text>
                <Text>{company.cif || "N/A"}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Nombre de la Empresa:</Text>
                <Text>{company.company_name || "N/A"}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Dirección:</Text>
                <Text>{company.address_contact || "N/A"}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">País:</Text>
                <Text>{company.country || "N/A"}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Correo Electrónico:</Text>
                <Text>{company.email || "N/A"}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Teléfono:</Text>
                <Text>
                  +{company.phone_prefx} {company.phone_number || "N/A"}
                </Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Tipo de Colaboración:</Text>
                <Text>{company.type_collab || "N/A"}</Text>
              </HStack>
              <Box>
                <Text fontWeight="bold">Intereses:</Text>
                {company.interests && company.interests.length > 0 ? (
                  company.interests.map((interest, index) => (
                    <Text key={index} ml={4}>
                      - {interest}
                    </Text>
                  ))
                ) : (
                  <Text ml={4}>Ninguno</Text>
                )}
              </Box>
              <HStack>
                <Text fontWeight="bold">Empleados:</Text>
                <Text>{company.employes || "N/A"}</Text>
              </HStack>
            </VStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SupplierDetail;
