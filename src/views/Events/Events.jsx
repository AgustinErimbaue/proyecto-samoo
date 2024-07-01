import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../../features/event/eventSlice";
import EditInfoEvent from '../../components/EditInfoEvent/EditInfo';
import {
  Box,
  Input,
  Text,
  Flex,
  Image,
  IconButton,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

const Events = () => {
  const dispatch = useDispatch();
  const { events } = useSelector((state) => state.event);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filteredEvents, setFilteredEvents] = useState([]);

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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short" };
    return date.toLocaleDateString("en-US", options);
  };

  const handleEditClick = (event) => {
    setSelectedEvent(event);
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
        <Box key={index} className="cards-info" mb={4} p={4}>
          <Flex className="card-1" align="center">
            <Box className="img-card" flexShrink={0} mr={4}>
              <Image src="" alt="" boxSize="50px" />
            </Box>
            <Box className="text-card">
              <Box className="text-1" mb={2}>
                <Text>{event.desc_event}</Text>
                <Text>{event.company}</Text>
              </Box>
              <Text className="date">{formatDate(event.date)}</Text>
              <Text className="hour">{event.hour}</Text>
              <Flex className="pencil-and-number" align="center" mt={2}>
                <IconButton
                  aria-label="Edit event"
                  icon={<EditIcon />}
                  onClick={() => handleEditClick(event)}
                  mr={2}
                />
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
