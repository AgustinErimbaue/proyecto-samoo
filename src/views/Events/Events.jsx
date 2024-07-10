import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllEvents,
  addUser,
  updateEvent,
  removeEvent,
  removeUserFromEvent,
} from "../../features/event/eventSlice";
import EditInfoEvent from "../../components/EditInfoEvent/EditInfo";
import {
  Box,
  Input,
  Text,
  Flex,
  Image,
  IconButton,
  Button,
  HStack
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

const Events = () => {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.event);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [eventStatus, setEventStatus] = useState({});
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const userLogged = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("eventStatus", JSON.stringify(eventStatus));
    localStorage.setItem("registeredEvents", JSON.stringify(registeredEvents));
  }, [eventStatus, registeredEvents]);

  useEffect(() => {
    const storedRegisteredEvents =
      JSON.parse(localStorage.getItem("registeredEvents")) || [];
    setRegisteredEvents(storedRegisteredEvents);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short" };
    return date.toLocaleDateString("en-US", options);
  };

  const handleEditClick = (event) => {
    setSelectedEvent(event);
  };

  const handleRegisterClick = (eventId) => {
    dispatch(addUser({ eventId, userId: userLogged._id }));
    setRegisteredEvents((prevEvents) => {
      const updatedEvents = [...prevEvents, eventId];
      localStorage.setItem("registeredEvents", JSON.stringify(updatedEvents));
      return updatedEvents;
    });
  };

  const handleRemoveUser = (eventId) => {
    const token = localStorage.getItem("token");
    dispatch(removeUserFromEvent({ eventId, token }));
    setRegisteredEvents((prevEvents) => {
      const updatedEvents = prevEvents.filter((id) => id !== eventId);
      localStorage.setItem("registeredEvents", JSON.stringify(updatedEvents));
      return updatedEvents;
    });
  };

  const handleConfirmEvent = (eventId, eventData) => {
    dispatch(updateEvent({ eventId, eventData })).then(()=>dispatch(getAllEvents()))
  };

  const handleCancelClick = (eventId, eventData) => {
    dispatch(updateEvent({ eventId, eventData })).then(()=>dispatch(getAllEvents()))
  };

  const handleRemoveEvent = (eventId) => {
    dispatch(removeEvent(eventId));
    dispatch(getAllEvents());
  };

  const getCardBackgroundColor = (event) => {
    if (event.cancelled === true) return "red.200";
    if (event.confirmed === true) return "green.200";
    return "white";
  };

  return (
    <Box className="view-hall-container" p={4}>
      <Box display='flex'
        justifyContent='flex-start'>
        <Input
          type="text"
          placeholder="Buscar por descripción"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          mb={4}
          p={2}
          width="30%"
          ml={80}
        />
      </Box>

      {events
        .filter((event) =>
          userLogged.user_type === "supplier"
            ? userLogged.id_supplier._id === event.id_supplier &&
            event.confirmed === true &&
            event.cancelled === false
            : userLogged.user_type === "assistant"
              ? event.confirmed === true
              : []
        )
        .filter((event) =>
          event.desc_event.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((event, index) => (
          <Box key={index} className="cards-info" mb={4} p={4} bg="white">
            <Flex className="card-1" align="center">
              <Box className="img-card" flexShrink={0} mr={4}>
                <Image src="" alt="" boxSize="50px" />
              </Box>
              <Box
                className="text-card"
                bg={getCardBackgroundColor(event)}
                p={4}
                borderRadius="md"
              >
                <Box className="text-1" mb={2}>
                  <Text>{event.desc_event}</Text>
                  <Text>{event.company}</Text>
                </Box>
                {/* <Text className="date">{formatDate(event.date)}</Text> */}
                <Text className="hour">{event.hour}</Text>
                <Flex className="pencil-and-number" align="center" mt={2}>
                  <Text className="number">{formatDate(event.date)}</Text>
                  {userLogged.user_type === "supplier" ? (
                    <Box>
                      {!registeredEvents.includes(event._id) && (
                        <IconButton
                          aria-label="Edit event"
                          icon={<EditIcon />}
                          onClick={() => handleEditClick(event)}
                          ml={2}
                        />
                      )}
                    </Box>
                  ) : userLogged.user_type === "admin" ? (
                    <HStack spacing={2}>
                      {(event.cancelled !== true && event.confirmed !== true) && (
                        <>
                          <Button
                            colorScheme="teal"
                            variant="outline"
                            color="black"
                            onClick={() =>
                              handleConfirmEvent(event._id, {confirmed: true, cancelled: false })
                            }
                          >
                            Confirmar
                          </Button>
                          <Button
                            colorScheme="teal"
                            variant="outline"
                            color="black"
                            onClick={() => handleCancelClick(event._id, { cancelled: true })}
                          >
                            Cancelar
                          </Button>
                        </>
                      )}
                      {event.cancelled== true && (
                        <>
                          <Button
                            colorScheme="teal"
                            variant="outline"
                            color="black"
                            onClick={() => handleRemoveEvent(event._id)}
                          >
                            Borrar
                          </Button>
                          <Button
                          colorScheme="teal"
                          variant="outline"
                          color="black"
                          onClick={() => handleConfirmEvent(event._id, {confirmed: true, cancelled: false })}
                        >
                          Rectivar
                        </Button>
                        </>
                      )}
                      {event.confirmed== true && (
                        <>
                          <Button
                          colorScheme="teal"
                          variant="outline"
                          color="black"
                          onClick={() => handleCancelClick(event._id, {confirmed: false, cancelled: true })}
                        >
                          cancelar
                        </Button>
                        </>
                      )}
                    </HStack>
                  ) : (
                    <HStack spacing={2}>
                      {!registeredEvents.includes(event._id) ? (
                        <Button
                          colorScheme="teal"
                          variant="outline"
                          color="black"
                          onClick={() => handleCancelClick(event._id, { cancelled: true })}
                        >
                          Registrarse
                        </Button>
                      ) : (
                        <Button
                          colorScheme="teal"
                          variant="outline"
                          color="black"
                          onClick={() => handleRemoveUser(event._id)}
                        >
                          Cancelar registro
                        </Button>
                      )}
                    </HStack>
                  )}
                </Flex>

              </Box>
            </Flex>
          </Box>
        ))}

      {selectedEvent && (
        <EditInfoEvent
          isOpen={true}
          onClose={() => setSelectedEvent(null)}
          event={selectedEvent}
        />
      )}
    </Box>
  );
};

export default Events;
