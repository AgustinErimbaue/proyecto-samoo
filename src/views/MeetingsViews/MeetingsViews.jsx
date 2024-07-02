import React, { useEffect, useState } from 'react';
import './MeetingsViews.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getUserById, reset } from '../../features/auth/authSlice';

const MeetingsViews = () => {
    const dispatch = useDispatch();
    const { user, token, isError, isSuccess, mesage,isLoading} = useSelector((state) => state.auth);
    
    const meetings=[...user.ids_meetings.map((meeting)=>{return({...meeting,type:"Mis Meetings"})}),...user.ids_meetings_atendee.map((meeting)=>{return({...meeting,type:"Meetings Reservados"})}),...user.speaker_events.map((event)=>{return({...event,type:"Mis Ponencias"})})]
    

    const [filters, setFilters] = useState({
        type: meetings[0].type,
        date: '',
    });

    useEffect(() => {
        dispatch(getUserById(user._id));
    }, [dispatch]);

    const hoursAndHalf = Array.from({ length: 23 }, (_, i) => i/2+ 9).map(hour => `${hour < 10 ? '0' : ''}${hour -(hour%1) }:${hour%1 > 0?'30':'00' }`);
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
    
    

    if (!meetings) {
        return <div>No meetings available</div>;
    }
    
    
    meetings.map((meeting)=>{console.log(' hola : ',meeting.type+" | "+filters.type)})
    

    const filteredMeetings = meetings.filter((meeting) => {
        return ((filters.date === '' || meeting.date === filters.date) &&
                (filters.type === '' || meeting.type === filters.type)   );
    });

    
    const meetingsByHour = hoursAndHalf.map(hour => ({
        hour,
        meetings: filteredMeetings.filter(meeting => meeting.hour === hour)
    }));
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
                <select id="day" name="day" value={filters.day} onChange={onChange}>
                        <option value="Dia 1">Día 1</option>
                        <option value="Dia 2">Día 2</option>
                    </select>
                </div>
            </section>
            <section id="meetings">
                {(filters.type=='Mis Meetings'||filters.type=='Meetings Reservados') ? meetingsByHour.map(({ hour, meetings }) => (
                    <div key={hour} className="meeting">
                        <div className="hour-column">
                            <h2>{hour}</h2>
                        </div>
                        <div className="details-column">
                            {meetings.length > 0 ? (
                                meetings.map(meeting => (
                                    <div key={meeting._id} className={meeting.id_user ? "meeting-details-booked":"meeting-details-avilieable"}>
                                        <p> Empresa : {meeting.id_supplier.company_name} | Colaborador: {meeting.type=="Mis Meetings"? user.name:meeting.id_user_supplier.name} | Asistente : {meeting.id_user ? (meeting.type=="Meetings Reservados"? user.name+" (usted)":meeting.id_user.name): "..."}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="no-meeting">No hay meetings en esta hora</p>
                            )}
                        </div>
                    </div>
                )):
                EventsByHour.map(({ hour, meetings }) => (
                    <div key={hour} className="meeting">
                        <div className="hour-column">
                            <h2>{hour}</h2>
                        </div>
                        <div className="details-column">
                            {meetings.length > 0 ? (
                                meetings.map(meeting => (
                                    <div key={meeting._id} className="meeting-details">
                                        <p> Empresa : {meeting.company} | Ponente: | Descripción : {meeting.desc_event}</p>
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

export default MeetingsViews;
