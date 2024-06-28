import React from 'react';
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
  VStack
} from '@chakra-ui/react';

const SupplierDetail = ({ company }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>+Info</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Informacion de la empresa</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="start" spacing={3}>
              <Text><strong>CIF:</strong> {company.cif}</Text>
              <Text><strong>Company Name:</strong> {company.company_name}</Text>
              <Text><strong>Address:</strong> {company.address_contact}</Text>
              <Text><strong>Country:</strong> {company.country}</Text>
              <Text><strong>Email:</strong> {company.email}</Text>
              <Text><strong>Phone:</strong> +{company.phone_prefx} {company.phone_number}</Text>
              <Text><strong>Type of Collaboration:</strong> {company.type_collab}</Text>
              <Text><strong>Interests:</strong> {company.interests.length > 0 ? company.interests.join(', ') : 'None'}</Text>
              <Text><strong>Employees:</strong> {company.employes}</Text>
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
