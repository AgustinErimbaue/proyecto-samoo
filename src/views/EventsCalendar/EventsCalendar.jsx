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
        salas:''
    });

    useEffect(() => {
        dispatch(getAllEvents());
    }, []);
    
    const meetings = [...events.map((event) => { return (event.canceled != true && { ...event, type: "Ponencias" }) })]
    console.log(meetings)
    
    if (!meetings || meetings.length == 0) {
        return <div>No hay meetings ni Ponencias en el calendario</div>;
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



    const filteredMeetings = meetings.filter((meeting) => {
        return ((filters.date === '' || meeting.date === filters.date||meeting.date?.split("T")[0] === filters.date?.split("T")[0]) &&
                (filters.type === '' || meeting.type === filters.type) && 
                (filters.place === ''|| meeting.id_place?.place_name === filters.place)
            );
    });

    const EventsByHour = hours.map(hour => ({
        hour,
        meetings: filteredMeetings.filter(meeting => meeting.hour === hour)
    }));
    return (
        <div className="meetings-view">
            <section id="filters">
                <div className="filter-item">
                    <select id="date" name="date" value={filters.date} onChange={onChange}>
                        {[...new Set(meetings.map(meeting => { 
                            return meeting.date}))].map((date, index) => {return (
                            <option key={index} value={date}>{date?.split("T")[0]}</option>
                        )})}
                    </select>
                </div>
                <div className="filter-item">
                    <select id="type" name="type" value={filters.type} onChange={onChange}>
                    {[...new Set(meetings.map(meeting => meeting.type))].map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
                <div className="filter-item">
                <select id="place" name="place" value={filters.place} onChange={onChange}>
                    {[...new Set(meetings.map(meeting => meeting.id_place?.place_name))].map((place, index) => (
                            <option key={index} value={place}>{place}</option>
                        ))}
                    </select>
                </div>
            </section>
            <section id="meetings">
                {EventsByHour.map(({ hour, meetings }) => (
                    <div key={hour} className="meeting">
                        <div className="hour-column">
                            <h2>{hour}</h2>
                        </div>
                        <div className="details-column">
                            {meetings.length > 0 ? (
                                meetings.map(event => (
                                    <div key={event._id} className={event.confirmed==true?"meeting-details-booked":"meeting-details"}>
                                        <p> Empresa : {event.company} | Ponente:{event.speaker?.name} | Descripción : {event.desc_event} | Sala: {event.id_place?.place_name}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="no-meeting">No hay Ponencias a esta hora </p>
                            )}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default EventsCalendar;
