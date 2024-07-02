import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../features/auth/authSlice';
import './OneToOne.scss';

const OneToOne = () => {
  const { user, users, token, isError, isSuccess, message, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
    useEffect(() => {
        if (token) {
          dispatch(getAllUsers())
        }
    }, [dispatch]);

    const suppliers = users?.filter(user => user.user_type === 'supplier');

  return (
    <div style={{ width: '100%', padding: '20px' }}>
      {suppliers && suppliers.map(supplier => (
        <div key={supplier._id} style={{
          border: '1px solid #ccc',
          padding: '20px',
          marginBottom: '20px',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
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
                  </li>
                ))}
              </ul>
            ) : (
              <p>No meetings available</p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

export default OneToOne