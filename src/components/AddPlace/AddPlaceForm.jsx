import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPlace } from "../../features/place/placeSlice";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

const AddPlaceForm = ({ isOpen, onClose, token }) => {
  const dispatch = useDispatch();
  const [placeName, setPlaceName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const place = {
      place_name: placeName,
      capacity: parseInt(capacity, 10),
    };
    console.log(place);
    dispatch(createPlace({ place, token })).then(() => {
      onClose();
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Añadir nueva sala</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        <FormControl mt={4}>
            <FormLabel>Capacidad</FormLabel>
            <Input value={capacity} onChange={(e) => setCapacity(e.target.value)} />
          </FormControl>
          <FormControl>
            <FormLabel>Nombre de la sala</FormLabel>
            <Input value={placeName} onChange={(e) => setPlaceName(e.target.value)} />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Imagen</FormLabel>
            <Input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" onClick={handleSubmit}>
            Añadir
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddPlaceForm;
