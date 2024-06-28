import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  VStack,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { updateEvent } from "../../features/event/eventSlice";

const EditInfoEvent = ({ isOpen, onClose, event }) => {
  const dispatch = useDispatch();
  const [editedEvent, setEditedEvent] = useState(event);

  useEffect(() => {
    if (event) {
      setEditedEvent(event); // Resetea el estado local cuando cambia el evento
    }
  }, [event]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (editedEvent && editedEvent._id) {
      dispatch(updateEvent(editedEvent)); // Despacha la acción para actualizar el evento en el estado de Redux
      onClose(); // Cierra el modal
    } else {
      console.error("El evento no tiene un id válido.");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Editar Información del Evento</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack align="start" spacing={3}>
            <Text><strong>Descripción del evento:</strong></Text>
            <Textarea
              name="desc_event"
              value={editedEvent?.desc_event || ""}
              onChange={handleChange}
            />
            <Text><strong>Nombre de la empresa:</strong></Text>
            <Input
              name="company"
              value={editedEvent?.company || ""}
              onChange={handleChange}
            />
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSave}>
            Guardar
          </Button>
          <Button onClick={onClose}>Cerrar</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditInfoEvent;
