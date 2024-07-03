import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../features/auth/authSlice';
import { bookMeeting, createMeeting } from '../../features/meeting/meetingSlice';
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

  const loggedInUserId = user._id;
  const suppliers = users?.filter(user => user.user_type === 'supplier');
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
    <div style={{ width: '100%', padding: '20px' }}>
      {filteredSuppliers && filteredSuppliers.map(supplier => (
        <div key={supplier._id} style={{
          border: '1px solid #ccc',
          padding: '20px',
          marginBottom: '20px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <div>
            <h3>{supplier.name} {supplier.surname}</h3>
            <p>{supplier.company}</p>
          </div>
          <div>
            {supplier.ids_meetings && supplier.ids_meetings.length > 0 ? (
              <ul>
                {supplier.ids_meetings.map(meeting => (
                  <li key={meeting._id}>
                    <p>Date: {new Date(meeting.date).toLocaleDateString()}</p>
                    <p>Hour: {meeting.hour}</p>
                    <p>Supplier: {meeting.id_supplier.company_name}</p>
                    {meeting.id_user ? (
                      <p>Reserved by: {meeting.id_user.name}</p>
                    ) : (
                      <button className="book-button" onClick={() => handleBookMeeting(meeting._id)}>Book Meeting</button>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No meetings available</p>
            )}
          </div>
          {user._id === supplier._id && ( // Mostrar botón solo si es el usuario actual
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
              <button className="add-meeting-button" onClick={() => setShowForm(supplier._id)}>Add Meeting</button>
            )
          )}
        </div>
      ))}
    </div>
  );
}

export default OneToOne;
