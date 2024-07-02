import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllEvents,
  addUser,
  updateEvent,
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
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

const Events = () => {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.event);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [eventStatus, setEventStatus] = useState({});
  const userLogged = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(
        events.filter((event) =>
          event.desc_event.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [events, searchTerm]);

  useEffect(() => {
    const savedEventStatus = JSON.parse(localStorage.getItem("eventStatus"));
    if (savedEventStatus) {
      setEventStatus(savedEventStatus);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("eventStatus", JSON.stringify(eventStatus));
  }, [eventStatus]);

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
  };

  const handleUpdateEvent = (eventId, eventData) => {
    dispatch(updateEvent({ eventId, eventData }));
    setEventStatus((prevState) => ({ ...prevState, [eventId]: "confirmed" }));
  };

  const handleCancelClick = (eventId) => {
    dispatch(updateEvent({ eventId, eventData: { cancelled: true } }));
    setEventStatus((prevState) => ({ ...prevState, [eventId]: "cancelled" }));
  };

  const getCardBackgroundColor = (eventId) => {
    switch (eventStatus[eventId]) {
      case "confirmed":
        return "green.200";
      case "cancelled":
        return "red.200";
      default:
        return "white";
    }
  };

  return (
    <Box className="view-hall-container" p={4}>
      <Input
        type="text"
        placeholder="Buscar por descripción"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mb={4}
        p={2}
        width="100%"
      />

      {filteredEvents.map((event, index) => (
        <Box
          key={index}
          className="cards-info"
          mb={4}
          p={4}
          bg="white" // Keep the outer background white
        >
          <Flex className="card-1" align="center">
            <Box className="img-card" flexShrink={0} mr={4}>
              <Image src="" alt="" boxSize="50px" />
            </Box>
            <Box
              className="text-card"
              bg={getCardBackgroundColor(event._id)} // Apply the background color inside the card
              p={4}
              borderRadius="md"
            >
              <Box className="text-1" mb={2}>
                <Text>{event.desc_event}</Text>
                <Text>{event.company}</Text>
              </Box>
              <Text className="date">{formatDate(event.date)}</Text>
              <Text className="hour">{event.hour}</Text>
              <Flex className="pencil-and-number" align="center" mt={2}>
                {userLogged.user_type === "supplier" ? (
                  <IconButton
                    aria-label="Edit event"
                    icon={<EditIcon />}
                    onClick={() => handleEditClick(event)}
                    mr={2}
                  />
                ) : userLogged.user_type === "admin" ? (
                  <>
                    {eventStatus[event._id] !== "confirmed" && eventStatus[event._id] !== "cancelled" && (
                      <>
                        <Button
                          colorScheme="teal"
                          variant="outline"
                          color="black"
                          mr={2}
                          onClick={() => handleUpdateEvent(event._id, { confirmed: true })}
                        >
                          Confirmar
                        </Button>
                        <Button
                          colorScheme="teal"
                          variant="outline"
                          color="black"
                          onClick={() => handleCancelClick(event._id)}
                        >
                          Cancelar
                        </Button>
                      </>
                    )}
                  </>
                ) : (
                  <Button
                    colorScheme="teal"
                    variant="outline"
                    color="black"
                    onClick={() => handleRegisterClick(event._id)}
                  >
                    Registrarse
                  </Button>
                )}
                <Text className="number">{formatDate(event.date)}</Text>
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
