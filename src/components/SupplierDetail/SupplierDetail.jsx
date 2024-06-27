import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure
} from '@chakra-ui/react';

const EventDetail = ({company}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button className="info-btn" size="md" onClick={onOpen}>+Info</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Detalles del evento</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{company.company_name}</p>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EventDetail;
