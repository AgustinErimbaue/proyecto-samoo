import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../features/auth/authSlice';
import { createMeeting } from '../../features/meeting/meetingSlice';
import './OneToOne.scss';

const OneToOne = () => {
  const { user, users, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [newMeeting, setNewMeeting] = useState({ date: '', hour: '', id_supplier: '' });
  const [showForm, setShowForm] = useState(null);

  useEffect(() => {
    if (token) {
      dispatch(getAllUsers());
    }
  }, [dispatch, token]);

  const suppliers = users?.filter(user => user.user_type === 'supplier');

  const handleCreateMeeting = (supplierId) => {
    const meeting = {
      ...newMeeting,
      id_supplier: supplierId,
    };
    dispatch(createMeeting({ meeting, token }));
    setShowForm(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMeeting((prevMeeting) => ({
      ...prevMeeting,
      [name]: value,
    }));
  };

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 9; hour <= 18; hour++) {
      times.push(`${String(hour).padStart(2, '0')}:00`);
      if (hour < 18) {
        times.push(`${String(hour).padStart(2, '0')}:30`);
      }
    }
    return times;
  };

  return (
    <div style={{ width: '100%', padding: '20px' }}>
      {suppliers && suppliers.map(supplier => (
        <div key={supplier._id} style={{
          padding: '20px',
          marginBottom: '20px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRadius: '8px',
          border: '1px solid #0f8ba0',
          fontFamily: 'DM Sans',
        }}>
          <div>
            <h3>{supplier.name} {supplier.surname}</h3>
            <p style={{
              marginBottom:'15px'
            }}><strong>{supplier.company}</strong></p>
          </div>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
          }}>
            {supplier.ids_meetings && supplier.ids_meetings.length > 0 ? (
              <ul>
                {supplier.ids_meetings.map(meeting => (
                  <li key={meeting._id} style={{
                    borderRadius: '8px',
                    border: '1px solid #0f8ba0',
                    marginBottom: '5px',
                    listStyle: 'none'
                  }}>
                    <div style={{
                      padding: '10px'
                    }}>
                    <p>Fecha: {new Date(meeting.date).toLocaleDateString()}</p>
                    <p>Hora: {meeting.hour}</p>
                     <p>Colaboradores: {meeting.id_supplier.company_name}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No hay ninguna reunión disponible</p>
            )}
          </div>
          {user._id === supplier._id && ( 
            showForm === supplier._id ? (
              <form onSubmit={(e) => { e.preventDefault(); handleCreateMeeting(supplier._id); }}>
                <div>
                  <label>
                    Date:
                    <input type="date" name="date" value={newMeeting.date} onChange={handleInputChange} required />
                  </label>
                </div>
                <div>
                  <label>
                    Hour:
                    <select name="hour" value={newMeeting.hour} onChange={handleInputChange} required>
                      <option value="">Select Hour</option>
                      {generateTimeOptions().map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <button type="submit">Save Meeting</button>
                <button type="button" onClick={() => setShowForm(null)}>Cancel</button>
              </form>
            ) : (
              <button onClick={() => setShowForm(supplier._id)}style={{
                width: '127px',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '24px',
                border: '1px solid #0f8ba0',
                background: '#0f8ba0',
                color: '#fff',
                marginTop: '12px'

              }}>Añadir Reunión</button>
            )
          )}
        </div>
      ))}
    </div>
  );
}

export default OneToOne;
