import React from "react";
import { useState } from "react";
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
  VStack,
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

const interestsOptions = [
  "Tecnología",
  "Gestión de Proyectos",
  "Agile",
  "Softskills",
  "Marketing Digital",
  "Negocios",
  "Emprendimiento",
  "Educación",
  "Formación",
  "Salud y Bienestar",
  "Creatividad",
  "Diseño",
];

const CreateEvent = ({ place }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    desc_event: "",
    date: "",
    hour: "",
    interests: [],
    company: user.company,
    avatar_url: "",
    id_place: place.id,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
      }));
    } else if (type === "select-multiple") {
      const selectedOptions = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      setFormData((prevData) => ({
        ...prevData,
        [name]: selectedOptions,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleInterestChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      interests: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Button
        variant="outline"
        colorScheme="teal"
        borderRadius="50px"
        onClick={onOpen}
      >
        Añadir ponencia
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crear Evento</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack align="start" spacing={3}>
              <Box p={5} maxWidth="600px" mx="auto">
                <Heading as="h1" mb={6}>
                  Crear Evento
                </Heading>
                <form onSubmit={handleSubmit}>
                  <FormControl id="desc_event" mb={4}>
                    <FormLabel>Descripción del Evento</FormLabel>
                    <Textarea
                      name="desc_event"
                      value={formData.desc_event}
                      onChange={handleChange}
                      placeholder="Conferencia sobre nuevas tendencias en tecnología"
                    />
                  </FormControl>

                  <FormControl id="date" mb={4}>
                    <FormLabel>Fecha</FormLabel>
                    <Input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </FormControl>

                  <FormControl id="hour" mb={4}>
                    <FormLabel>Hora</FormLabel>
                    <Input
                      type="time"
                      name="hour"
                      value={formData.hour}
                      onChange={handleChange}
                    />
                  </FormControl>

                  <FormControl id="interests" mb={4}>
                    <FormLabel>Intereses</FormLabel>
                    <Menu closeOnSelect={false}>
                      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        {formData.interests.length > 0
                          ? formData.interests.join(", ")
                          : "Selecciona intereses"}
                      </MenuButton>
                      <MenuList>
                        <MenuOptionGroup
                          defaultValue={formData.interests}
                          type="checkbox"
                          onChange={handleInterestChange}
                        >
                          {interestsOptions.map((interest) => (
                            <MenuItemOption key={interest} value={interest}>
                              {interest}
                            </MenuItemOption>
                          ))}
                        </MenuOptionGroup>
                      </MenuList>
                    </Menu>
                  </FormControl>

                  <FormControl id="avatar_url" mb={4}>
                    <FormLabel>URL del Avatar</FormLabel>
                    <Input
                      type="url"
                      name="avatar_url"
                      value={formData.avatar_url}
                      onChange={handleChange}
                      placeholder="https://example.com/avatar.jpg"
                    />
                  </FormControl>

                  <Button type="submit" colorScheme="teal" mt={4}>
                    Crear Evento
                  </Button>
                </form>
              </Box>{" "}
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

export default CreateEvent;
