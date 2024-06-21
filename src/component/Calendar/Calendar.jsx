import { Eventcalendar, setOptions, localeEs } from '@mobiscroll/react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import './Calendar.scss';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

setOptions({
  locale: localeEs,
  theme: 'ios',
  themeVariant: 'light',
});

const eventsArray = [
  {
    start: "2024-06-18T16:00:00.000Z",
    end: "2024-06-18T17:00:00.000Z",
    title: "Zoom meeting",
    location: "Place 1",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zoom_Communications_Logo.svg/1200px-Zoom_Communications_Logo.svg.png"
  },
  {
    start: "2024-06-18T10:00:00.000Z",
    end: "2024-06-18T12:00:00.000Z",
    title: "Advanced e-Learning Techniques",
    location: "Place 2",
    img: "https://example.com/logo2.png"
  },
  {
    start: "2024-06-18T14:00:00.000Z",
    end: "2024-06-18T16:00:00.000Z",
    title: "Interactive e-Learning",
    location: "Place 1",
    img: "https://example.com/logo3.png"
  },
  {
    start: "2024-06-19T09:00:00.000Z",
    end: "2024-06-19T11:00:00.000Z",
    title: "e-Learning Best Practices",
    location: "Place 2",
    img: "https://example.com/logo4.png"
  },
  {
    start: "2024-06-19T13:00:00.000Z",
    end: "2024-06-19T15:00:00.000Z",
    title: "Future of e-Learning",
    location: "Place 1",
    img: "https://example.com/logo5.png"
  }
];

function Calendar() {
  const [myEvents, setEvents] = useState([]);

  const myView = useMemo(() => ({ agenda: { type: 'day' } }), []);
  // const handleEventClick = useCallback((event) => {
  //   // Verificar si el evento ya está seleccionado
  //   if (selectedEvents.some(e => e.id === event.id)) {
  //     return; // No hacer nada si ya está seleccionado
  //   }

  //   // Agregar el evento seleccionado al estado
  //   setSelectedEvents(prevEvents => [...prevEvents, event]);

  //   // Aquí podrías implementar la lógica para guardar el evento en el perfil del usuario
  //   // Por ejemplo, podrías enviar el evento a un servidor para guardarlo en la base de datos del usuario
  //   // fetch('/api/saveEvent', { method: 'POST', body: JSON.stringify(event) });
  // }, [selectedEvents]);

  const customEvent = useCallback(
    (data) => (
      <div className="mbsc-flex mbsc-flex-1-1" onClick={() => handleEventClick(data.original)}>
        <img className="mds-agenda-event-img" alt={data.title} src={data.original.img} />
        <div className="mbsc-flex-1-1">
          <div className="mds-agenda-event-title">{data.title}</div>
          <div className="mbsc-flex">
            <div className="mds-agenda-event-location mbsc-flex-1-1">
              <div className="mds-agenda-event-label">Location</div>
              <div>{data.original.location}</div>
            </div>
            <div className="mds-agenda-event-time">
              <div className="mds-agenda-event-label">Start</div>
              <div>{data.start}</div>
              <div className='mds-agenda-event-label'>End</div>
              <div>{data.end}</div>
            </div>
          </div>
        </div>
      </div>
    ),
    [],
  );

  useEffect(() => {
    setEvents(eventsArray);
  }, []);

  return (
    <div>
      {myEvents.length > 0 ? (
        <Eventcalendar renderEvent={customEvent} data={myEvents} view={myView} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Calendar;