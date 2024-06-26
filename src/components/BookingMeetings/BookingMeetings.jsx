import React, { useState } from 'react';
import ReservationFormMeeting from '../ReservationFormMeeting/ReservationFormMeeting';
import './BookingMeeting.scss'

const BookingMeetings = () => {
  const [selectedHour, setSelectedHour] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [reservedHours, setReservedHours] = useState([]);

  const handleHourClick = (hour) => {
    if (!reservedHours.includes(hour)) {
      setSelectedHour(hour);
      setShowForm(true);
    }
  };

  const handleSubmit = (formData) => {
// Implementa la lógica para manejar la reserva aquí
    console.log(formData);
// Agregar la hora reservada al estado de reservedHours
    setReservedHours([...reservedHours, selectedHour]);
    setSelectedHour(null);
    setShowForm(false);
  };

  const isHourReserved = (hour) => reservedHours.includes(hour);

  const availableHours = [
    '09:00', '10:00', '11:00', '12:00', '13:00',
    '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  return (
    <div className="booking-meetings-container">
      <h2>Seleccione una hora disponible:</h2>
      {/* Renderiza las horas disponibles aquí */}
      <div className="available-hours">
        {/* Ejemplo básico, ajusta según tu lógica */}
        {availableHours.map((hour, index) => (
          <div
            key={index}
            className={`hour ${isHourReserved(hour) ? 'reserved' : ''}`}
            onClick={() => handleHourClick(hour)}
          >
            {hour}
          </div>
        ))}
      </div>
      
      {/* Mostrar el formulario solo si showForm es true */}
      {showForm && (
        <ReservationFormMeeting hour={selectedHour} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default BookingMeetings;