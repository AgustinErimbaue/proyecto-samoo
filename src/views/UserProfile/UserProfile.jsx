import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserById, reset } from '../../features/auth/authSlice';
import QRCode from 'react-qr-code';
import { logout } from "../../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";

const UserProfile = () => {

  const dispatch = useDispatch();
  const { user, token, isError, isSuccess, mesage } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      dispatch(getUserById());
    }
    return () => {
      dispatch(reset());
    };
  }, [dispatch, token]);

  if (!user) {
    return <div>Loading...</div>;
  }
  const handleLogout = async () => {
    try {
      await dispatch(logout()).unwrap();
      navigate("/login");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };
  const userContactUrl = `http://localhost:5173/userContact/${user._id}`

  return (
    <div>
      <h1>User Profile</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Surname:</strong> {user.surname}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone_prefx} {user.phone_number}</p>
      <p><strong>Address:</strong> {user.address}</p>
      <p><strong>Zip Code:</strong> {user.zip_code}</p>
      <p><strong>City:</strong> {user.city}</p>
      <p><strong>Country:</strong> {user.country}</p>
      <p><strong>User Type:</strong> {user.user_type}</p>
      <p><strong>LinkedIn:</strong> <a href={user.url_linkedin} target="_blank" rel="noopener noreferrer">{user.url_linkedin}</a></p>
      <p><strong>Company:</strong> {user.company}</p>
      <p><strong>Job Title:</strong> {user.job_title.join(', ')}</p>
      <p><strong>Allergies:</strong> {user.allergies.join(', ')}</p>
      <p><strong>Interests:</strong> {user.interests.join(', ')}</p>
      <p><strong>Food Preferences:</strong> {user.food_preferences.join(', ')}</p>
      <p><strong>Account Created At:</strong> {new Date(user.createdAt).toLocaleString()}</p>
      <p><strong>Last Updated At:</strong> {new Date(user.updatedAt).toLocaleString()}</p>
      <QRCode value={userContactUrl} />
      <p><Link to={userContactUrl}>View Contact Info</Link></p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default UserProfile