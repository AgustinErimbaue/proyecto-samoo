import React, { useEffect, useState } from 'react';
import './MeetingsViews.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../features/meeting/meetingSlice';
import { getUserById, reset } from '../../features/auth/authSlice';

const MeetingsViews = () => {
    const dispatch = useDispatch();
    const {isLoading} = useSelector((state) => state.meeting.meetings);
    const { user, token, isError, isSuccess, mesage } = useSelector((state) => state.auth);
    const meetings=user.ids_meetings 
    console.log(user)
    const [filters, setFilters] = useState({
        feedback: '',
        table: '',
        date: '',
    });

    useEffect(() => {
        dispatch(getAll());
    }, [dispatch]);

    const hours = Array.from({ length: 23 }, (_, i) => i/2+ 9).map(hour => `${hour < 10 ? '0' : ''}${hour -(hour%1) }:${hour%1 > 0?'30':'00' }`);

    const onChange = (e) => {
        const { name, value } = e.target;
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
    
    const filteredMeetings = meetings.filter((meeting) => {
        return (
            (filters.feedback === '' || meeting.feedback === Number(filters.feedback)) &&
            (filters.table === '' || meeting.table === Number(filters.table)) &&
            (filters.date === '' || meeting.date === filters.date)
        );
    });

    const meetingsByHour = hours.map(hour => ({
        hour,
        meetings: filteredMeetings.filter(meeting => meeting.hour === hour)
    }));

    return (
        <div className="meetings-view">
            <section id="filters">
                <div className="filter-item">
                    <select id="feedback" name="feedback" value={filters.feedback} onChange={onChange}>
                        <option value="">Ponencias</option>
                        {[...new Set(meetings.map(meeting => meeting.feedback))].map((feedback, index) => (
                            <option key={index} value={feedback}>{feedback}</option>
                        ))}
                    </select>
                </div>
                <div className="filter-item">
                    <select id="table" name="table" value={filters.table} onChange={onChange}>
                        <option value="">Sala</option>
                        {[...new Set(meetings.map(meeting => meeting.table))].map((table, index) => (
                            <option key={index} value={table}>{table}</option>
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
                {meetingsByHour.map(({ hour, meetings }) => (
                    <div key={hour} className="meeting">
                        <div className="hour-column">
                            <h2>{hour}</h2>
                        </div>
                        <div className="details-column">
                            {meetings.length > 0 ? (
                                meetings.map(meeting => (
                                    <div key={meeting._id} className="meeting-details">
                                        <p> Empresa : {meeting.id_supplier.company_name} - Colaborador: {meeting.id_user_supplier}</p>
                                    </div>
                                ))
                            ) : (
                                <p className="no-meeting">No hay meetings en esta hora</p>
                            )}
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default MeetingsViews;
