import React from "react";
import { useParams } from "react-router-dom";
import Events from "../../views/Events/Events";

const HallsDetail = () => {
  const { placeId } = useParams();

  return (
    <div>
      <Events placeId={placeId} />
    </div>
  );
};

export default HallsDetail;
