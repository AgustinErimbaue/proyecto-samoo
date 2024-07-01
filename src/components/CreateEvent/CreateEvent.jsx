import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  Select,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { createEvent } from "../../features/event/eventSlice";

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
  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.event
  );
  const [formData, setFormData] = useState({
    desc_event: "",
    date: "",
    hour: "",
    interests: [],
    company: user.company,
    avatar_url: "",
    id_place: place._id,
    speakerEmail: user.email,
    id_supplier: user.id_supplier._id,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "select-multiple") {
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
    dispatch(createEvent({ formData, avatarFile: null }));
  };
  const hoursOptions = Array.from({ length: 13 }, (_, i) => `${9 + i}:00`);

  return (
    <>
      <Button
        variant="outline"
        colorScheme="teal"
        borderRadius="50px"
        onClick={onOpen} // Este es el botón que abre el modal
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
                    <Select
                      name="hour"
                      value={formData.hour}
                      onChange={handleChange}
                      placeholder="Selecciona una hora"
                    >
                      {hoursOptions.map((hour) => (
                        <option key={hour} value={hour}>
                          {hour}
                        </option>
                      ))}
                    </Select>
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

                  <Button
                    type="submit"
                    colorScheme="teal"
                    mt={4}
                    isLoading={isLoading}
                  >
                    Crear Evento
                  </Button>
                  {isSuccess && <p>Evento creado con éxito</p>}
                  {isError && <p>Error al crear el evento: {message}</p>}
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
