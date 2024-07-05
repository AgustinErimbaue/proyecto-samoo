import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getUserContactInfoById, reset } from '../../features/auth/authSlice';

const UserContact = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { userContactInfo, token, isError, isSuccess, message, user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getUserContactInfoById(id));
        return () => {
            dispatch(reset());
        };
    }, [dispatch, id]);

    if (!userContactInfo) {
        return <div>Loading...</div>;
    }

    console.log("User Contact Info: ", userContactInfo);
    console.log("Token: ", token);

    return (
        <div>
            <h1>Contact Info</h1>
            <p><strong>Name:</strong> {userContactInfo.name}</p>
            <p><strong>Surname:</strong> {userContactInfo.surname}</p>
            <p><strong>Email:</strong> {userContactInfo.email}</p>
            <p><strong>Phone:</strong> {userContactInfo.phone_prefx} {userContactInfo.phone_number}</p>

            {token && (
                <>
                    <p><strong>Company:</strong> {userContactInfo.company}</p>
                    <p><strong>Job Title:</strong> {userContactInfo.job_title}</p>
                    <p><strong>LinkedIn:</strong> <a href={userContactInfo.url_linkedin} target="_blank" rel="noopener noreferrer">{userContactInfo.url_linkedin}</a></p>
                </>
            )}
        </div>
    )
}

export default UserContact