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
  Select
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { updateEvent, getAllEvents } from "../../features/event/eventSlice";

const EditInfoEvent = ({ isOpen, onClose, event }) => {
  const dispatch = useDispatch();
  const [editedEvent, setEditedEvent] = useState(event || { _id: null });

  useEffect(() => {
    if (event) {
      setEditedEvent(event);
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
    if (editedEvent && editedEvent._id !== null) {
      console.log('editedEvent : ', editedEvent)
      console.log('editedEvent._id : ', editedEvent._id)
      const eventId = editedEvent._id
      const eventData = { desc_event: editedEvent.desc_event,
                          date: editedEvent.date,
                          hour : editedEvent.hour,
                          cancelled: false,
                          confirmed:false
       }
      dispatch(updateEvent({ eventId, eventData })).then(() => dispatch(getAllEvents()))
      onClose();
    } else {
      console.error("El evento no tiene un id válido.");
    }
  };

  const hoursOptions = Array.from({ length: 13 }, (_, i) => `${9 + i}:00`);

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
            <Text>Fecha</Text>
            <Input
              type="date"
              name="date"
              value={editedEvent.date.split('T')[0]}
              onChange={handleChange}
            />
            <Text>Hora</Text>
            <Select
              name="hour"
              value={editedEvent.hour}
              onChange={handleChange}
              placeholder="Selecciona una hora"
            >
              {hoursOptions.map((hour) => (
                <option key={hour} value={hour}>
                  {hour}
                </option>
              ))}
            </Select>

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
