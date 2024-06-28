import React, { useEffect, useState } from 'react';
import './MeetingsViews.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../features/meeting/meetingSlice';

const MeetingsViews = () => {
    const dispatch = useDispatch();
    const { meetings, isLoading } = useSelector((state) => state.meeting.meetings);
    const [filters, setFilters] = useState({
        feedback: '',
        table: '',
        date: '',
    });

    useEffect(() => {
        dispatch(getAll());
    }, [dispatch]);

    const hours = Array.from({ length: 13 }, (_, i) => i + 9).map(hour => `${hour < 10 ? '0' : ''}${hour}:00`);

    const onChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value,
        });
    };

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

    if (isLoading) {
        return <div>Loading...</div>;
    }

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
                                    <div key={meeting.id} className="meeting-details">
                                        <p>Company ID: {meeting.id_collab} - User ID: {meeting.id_user_collab}</p>
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
