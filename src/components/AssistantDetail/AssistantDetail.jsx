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

const AssistantDetail = ({ user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box className="presentation-inf-btn">
        <Button onClick={onOpen}>+Info</Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Información del asistente</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="start" spacing={4}>
              <HStack>
                <Text fontWeight="bold">ID:</Text>
                <Text>{user._id || "N/A"}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Nombre:</Text>
                <Text>{user.name}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Apellido:</Text>
                <Text>{user.surname || "N/A"}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Email:</Text>
                <Text>{user.email || "N/A"}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">País:</Text>
                <Text>{user.country || "N/A"}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Tipo de usuario:</Text>
                <Text>{user.user_type}</Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Teléfono:</Text>
                <Text>
                  +{user.phone_prefx} {user.phone_number || "N/A"}
                </Text>
              </HStack>
              <HStack>
                <Text fontWeight="bold">Tipo de Colaboración:</Text>
                <Text>{user.type_collab || "N/A"}</Text>
              </HStack>
              <Box>
                <Text fontWeight="bold">Intereses:</Text>
                {user.interests && user.interests.length > 0 ? (
                  user.interests.map((interest, index) => (
                    <Text key={index} ml={4}>
                      - {interest}
                    </Text>
                  ))
                ) : (
                  <Text ml={4}>Ninguno</Text>
                )}
              </Box>
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

export default AssistantDetail;
