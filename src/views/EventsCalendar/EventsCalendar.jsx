import React, { useEffect, useState } from 'react';
import './EventsCalendar.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEvents } from "../../features/event/eventSlice";


const EventsCalendar = () => {
    const dispatch = useDispatch();
    const { events, isLoading } = useSelector((state) => state.event);

    const [filters, setFilters] = useState({
        type: 'Ponencias',
        date: '',
        place:''
    });

    useEffect(() => {
        dispatch(getAllEvents());
    }, []);
    
    const eventsInCalendar = [...events.map((event) => { return (event.cancelled != true && { ...event, type: "Ponencias" }) })]
    console.log(eventsInCalendar)
    
    if (!eventsInCalendar || eventsInCalendar.length == 0) {
        return <div>No hay Ponencias en el calendario</div>;
    }
    
    const hours = Array.from({ length: 13 }, (_, i) => i + 9).map(hour => `${hour < 10 ? '0' : ''}${hour}:00`);

    const onChange = (e) => {
        const { name, value } = e.target;
        console.log('name and value ', name + " | "+value)
        setFilters({
            ...filters,
            [name]: value,
        });                                  
    };



    if (isLoading) {
        return <div>Loading...</div>;
    }



    const filteredeventsInCalendar = eventsInCalendar.filter((event) => {
        return ((filters.date === '' || event.date === filters.date||event.date?.split("T")[0] === filters.date?.split("T")[0]) &&
                (filters.type === '' || event.type === filters.type) && 
                (filters.place === ''|| event.id_place?.place_name === filters.place)
            );
    });

    const EventsByHour = hours.map(hour => ({
        hour,
        eventsInCalendar: filteredeventsInCalendar.filter(event => (event.hour === hour || '0'+event.hour === hour))
    }));
    return (
        <div className="eventsInCalendar-view">
            <section id="filters">
                <div className="filter-item">
                    <select id="date" name="date" value={filters.date} onChange={onChange}>
                        {[...new Set(eventsInCalendar.map(event => { 
                            return event.date}))].map((date, index) => {return (
                            <option key={index} value={date}>{date?.split("T")[0]}</option>
                        )})}
                    </select>
                </div>
                <div className="filter-item">
                    <select id="type" name="type" value={filters.type} onChange={onChange}>
                    {[...new Set(eventsInCalendar.map(event => event.type))].map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
                <div className="filter-item">
                <select id="place" name="place" value={filters.place} onChange={onChange}>
                    {[...new Set(eventsInCalendar.map(event => event.id_place?.place_name))].map((place, index) => (
                            <option key={index} value={place}>{place}</option>
                        ))}
                    </select>
                </div>
            </section>
            <section id="eventsInCalendar">
                {EventsByHour.map(({ hour, eventsInCalendar }) => (
                    <div key={hour} className="event">
                        <div className="hour-column">
                            <h2>{hour}</h2>
                        </div>
                        <div className="details-column">
                            {eventsInCalendar.length > 0 ? (
                                eventsInCalendar.map(event => (
                                    <div key={event._id} className={event.confirmed==true?"event-details-booked":"event-details"}>
                                        <p> Empresa : {event.company} | Ponente:{event.speaker?.name} | Descripción : {event.desc_event} | Sala: {event.id_place?.place_name}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="no-event">No hay Ponencias a esta hora </p>
                            )}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default EventsCalendar;
