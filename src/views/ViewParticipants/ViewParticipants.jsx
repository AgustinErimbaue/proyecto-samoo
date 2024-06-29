import React, { useState } from "react";
import ParticipantsHeader from "../../components/ParticipantsHeader/ParticipantsHeader";
import Assistants from "../../components/Assistants/Assistants";
import Suppliers from "../../components/Suppliers/Suppliers";
import { Box } from "@chakra-ui/react";
import Participants from "../../components/Participants/Participants";
import Speakers from "../../components/Speakers/Speakers";
import PlatinumSuppliers from "../../components/PlatinumSuppliers/PlatinumSuppliers";
import GoldSuppliers from "../../components/GoldSuppliers/GoldSuppliers";
import SilverSuppliers from "../../components/SilverSuppliers/SilverSuppliers";

const ViewParticipants = () => {
  const [visibleComponent, setVisibleComponent] = useState("Speakers");

  const renderComponent = () => {
    switch (visibleComponent) {
      case "Assistants":
        return <Assistants />;
      case "Suppliers":
        return <Suppliers />;
      case "Participants":
        return <Participants />;
      case "Speakers":
        return <Speakers />;
      case "PlatinumSuppliers":
        return <PlatinumSuppliers />;
      case "GoldSuppliers":
        return <GoldSuppliers />;
      case "SilverSuppliers":
        return <SilverSuppliers />;
      default:
        return null;
    }
  };

  return (
    <Box className="suppliers-body" padding="20px">
      <ParticipantsHeader onShowComponent={setVisibleComponent} />
      {renderComponent()}
    </Box>
  );
};

export default ViewParticipants;
