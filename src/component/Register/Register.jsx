import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [confirmPassword, setConfirmPassword] = useState('');

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