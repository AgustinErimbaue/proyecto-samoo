import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../features/auth/authSlice';
import { bookMeeting, createMeeting } from '../../features/meeting/meetingSlice';
import './OneToOne.scss';

const OneToOne = () => {
  const token= localStorage.getItem('token')
  const { user, users} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [newMeeting, setNewMeeting] = useState({ date: '', hour: '', id_supplier: '' });
  const [showForm, setShowForm] = useState(null);

  useEffect(() => {
    if (token) {
      dispatch(getAllUsers());
    }
  }, [dispatch, token]);

  console.log('token : ', token)

  const loggedInUserId = user._id;
  const suppliers = users?.filter(user => (user.user_type === 'supplier' && user.ids_meetings.length != 0));
  const loggedInUser = users?.find(user => user._id === loggedInUserId);
  let filteredSuppliers = suppliers?.filter(user => user._id !== loggedInUserId) || [];
  if (loggedInUser && loggedInUser.user_type === 'supplier') {
    filteredSuppliers = [loggedInUser, ...filteredSuppliers];
  };

  const handleCreateMeeting = (supplierId) => {
    const meeting = {
      ...newMeeting,
      id_supplier: supplierId,
    };
    dispatch(createMeeting({ meeting, token })).then(() => dispatch(getAllUsers()));
    setShowForm(null);
  };

  const handleBookMeeting = (meetingId) => {
    dispatch(bookMeeting({ meetingId, token }));
    dispatch(getAllUsers());
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
      };
    };
    return times;
  };
  
  return (
    <div className="one-to-one-container">
      {filteredSuppliers && filteredSuppliers.map(supplier => (
        <div key={supplier._id} className="supplier-card">
          <div>
            <h3>{supplier.name} {supplier.surname}</h3>
            <p className="supplier-company"><strong>{supplier.company}</strong></p>
          </div>
          <div className="meetings-list">
            {supplier.ids_meetings && supplier.ids_meetings.length > 0 ? (
              <ul>
                {supplier.ids_meetings.map(meeting => (
                  <li key={meeting._id} className="meeting-item">
                    <div className={meeting.id_user? "meeting-details-in-booked ":"meeting-details-in-avilieable"}>
                      <p>Fecha: {new Date(meeting.date).toLocaleDateString()}</p>
                      <p>Hora: {meeting.hour}</p>
                      <p>Colaboradores: {meeting.id_supplier.company_name}</p>
                      {meeting.id_user ? (
                        <p>Asistente: {meeting.id_user?.name}</p>
                      ) : (
                        <p>Meeting disponible</p>
                      )}
                    </div>

                    {(meeting.id_user_supplier != user._id && meeting.id_user == null) && (
                      <div className='book-btn-continer'>
                        <button onClick={() => handleBookMeeting(meeting._id)} className="book-button">
                          Asistir
                        </button>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No hay ninguna reunión disponible</p>
            )}
          </div>
          {user?._id === supplier._id && (
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
                <button className="save-button" type="submit">Save Meeting</button>
                <button className="cancel-button" type="button" onClick={() => setShowForm(null)}>Cancel</button>
              </form>
            ) : (
              <button onClick={() => setShowForm(supplier._id)} className="add-meeting-button">
                Añadir Reunión
              </button>
            )
          )}
        </div>
      ))}
    </div>
  );
}

export default OneToOne;
