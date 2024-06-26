import React, { useState } from 'react';

const ReservationFormMeeting = ({ hour, onSubmit }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ hour });
  };

  return ( //AQUI ABAJO CUANDO ELIJAS UNA HORA DEBERIA HACERSE LA RESERVA
  
    <div className="reservation-form">
      <h3>Reservar hora: {hour}</h3>
      <form onSubmit={handleSubmit}>
        <button type="submit">Reservar</button>
      </form>
    </div>
  );
};

export default ReservationFormMeeting;