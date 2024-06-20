import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../features/auth/authSlice';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isError, isSuccess, message } = useSelector((state) => state.auth);
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        if (isSuccess) {
            navigate('/');
            dispatch(reset());
        }
    }, [isSuccess, navigate, dispatch]);

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const onConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (formData.password === confirmPassword) {
            console.log('Form Data:', formData);
            dispatch(register(formData));
            setFormData({
                name: '',
                email: '',
                password: '',
            });
            setConfirmPassword('');
        } else {
            console.error('Passwords do not match');
        }
    };

    return (
        <form className='register-form' onSubmit={onSubmit}>
            <p>Register</p>
            <label>
                <input required placeholder="Insert your name" type="text" className="input" name="name" id="name" value={formData.name} onChange={onChange} />
            </label>
            <label>
                <input required placeholder="Insert your email" type="email" className="input" name="email" id="email" value={formData.email} onChange={onChange} />
            </label>
            <label>
                <input required placeholder="Insert your password" type="password" className="input" name="password" id="password" value={formData.password} onChange={onChange} />
            </label>
            <label>
                <input required placeholder="Confirm your password" type="password" className="input" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={onConfirmPasswordChange}/>
            </label>
            <button className="submit" type="submit">Submit</button>
            <p className="signin">Already have an account? <a href="/login">Signin</a></p>
        </form>
    )
}

export default Register