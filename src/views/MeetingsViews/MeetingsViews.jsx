import React, { useState } from 'react';
import './MeetingsViews.scss';

const MeetingsViews = () => {
    const [filters, setFilters] = useState({
        feedback: '',
        table: '',
        date: '',
    });

    const initialMeetings = [
        { company: 'Zoom', hour: "09:00", table: 23, tema: 'Redescubriendo la educación' },
        { company: 'Google', hour: "11:00", table: 24, tema: 'Inteligencia Artificial' },
        { company: 'Microsoft', hour: "13:00", table: 25, tema: 'Transformación Digital' },
        { company: 'Apple', hour: "15:00", table: 26, tema: 'Innovación en Tecnología' },
        { company: 'Amazon', hour: "17:00", table: 27, tema: 'E-commerce y Logística' },
        { company: 'Facebook', hour: "19:00", table: 28, tema: 'Redes Sociales y Comunicación' },
        { company: 'Tesla', hour: "21:00", table: 29, tema: 'Automatización y Sostenibilidad' },
    ];

    const places = [
        {
            _id: "667a956bca83db7c1ffa109b",
            place_name: "Centro de Convenciones",
            capacity: 500,
            events: [],
            createdAt: "2024-06-25T10:01:15.265+00:00",
            updatedAt: "2024-06-25T10:01:15.265+00:00",
            __v: 0
        },
        // Añadir más datos de places aquí si es necesario
    ];

    const hours = Array.from({ length: 13 }, (_, i) => i + 9).map(hour => `${hour < 10 ? '0' : ''}${hour}:00`);

    const onChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value,
        });
    };

    const filteredMeetings = initialMeetings.filter((meeting) => {
        return (
            (filters.feedback === '' || meeting.feedback === Number(filters.feedback)) &&
            (filters.table === '' || meeting.table === Number(filters.table)) &&
            (filters.date === '' || meeting.date === filters.date)
        );
    });

    const meetingsByHour = hours.map(hour => ({
        hour,
        meeting: filteredMeetings.find(meeting => meeting.hour === hour)
    }));

    return (
        <div className="meetings-view">
            <section id="filters">
                <div className="filter-item">
                    <select id="feedback" name="feedback" value={filters.feedback} onChange={onChange}>
                        <option value="">Ponencias</option>
                        {[...new Set(initialMeetings.map((meeting, index) => meeting.company))].map((company, index) => (
                            <option key={index} value={company}>{company}</option>
                        ))}
                    </select>
                </div>
                <div className="filter-item">
                    <select id="table" name="table" value={filters.table} onChange={onChange}>
                        <option value="">Sala</option>
                        {[...new Set(initialMeetings.map((meeting) => meeting.table))].map((table, index) => (
                            <option key={index} value={table}>{table}</option>
                        ))}
                    </select>
                </div>
                <div className="filter-item">
                <select id="day" name="day" value={filters.day} onChange={onChange}>
                        <option value="">Día 1</option>
                        <option value="Dia 1">Día 1</option>
                        <option value="Dia 2">Día 2</option>
                    </select>
                </div>
            </section>
            <section id="meetings">
                {meetingsByHour.map(({ hour, meeting }) => (
                    <div key={hour} className="meeting">
                        <h2>{hour}</h2>
                        {meeting ? (
                            <div className="meeting-details">
                                <p>{meeting.company}  {meeting.tema}</p>
                            </div>
                        ) : (
                            <p className="no-meeting">No hay meetings en esta hora</p>
                        )}
                    </div>
                ))}
            </section>
        </div>
    );
};

export default MeetingsViews;
