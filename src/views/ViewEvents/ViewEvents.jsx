import React, { useState } from "react";
import "./ViewEvents.scss";
import Halls from "../../components/Halls/Halls";
import EventsHeader from "../../components/EventsHeader/EventsHeader";
import { Box } from "@chakra-ui/react";
import HallsDetail from "../HallsDetail/HallsDetail";

const ViewEvents = () => {
  const [visibleComponent, setVisibleComponent] = useState("Salas");

  const renderComponent = () => {
    switch (visibleComponent) {
      case "Salas":
        return <Halls />;
      case "Ponencias":
        return <HallsDetail />;
      default:
        return null;
    }
  };

  return (
    <div className="view-hall-container">
      <Box>
        <EventsHeader onShowComponent={setVisibleComponent} />
        {renderComponent()}
      </Box>
    </div>
  );
};

export default ViewEvents;
