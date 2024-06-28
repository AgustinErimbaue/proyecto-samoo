import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../../features/auth/authSlice';

const UpdateUser = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        password: '',
        confirmed: false,
        phone_prefx: '',
        phone_number: '',
        address: '',
        zip_code: '',
        city: '',
        country: '',
        url_linkedin: '',
        interests: [],
        food_preferences: '',
        allergies: [],
        user_type: 'assitant',
        company: '',
        job_title: []
    });
    const [email, setEmail] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, isError, isSuccess, message } = useSelector((state) => state.auth);
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        if (user) {
            setFormData({
                ...formData,
                ...user
            });
            setEmail(user.email);
        }
    }, [user]);

    useEffect(() => {
        if (isSuccess) {
            navigate('/UserProfile');
            dispatch(reset());
        }
    }, [isSuccess, navigate, dispatch]);

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                [name]: checked ? [...formData[name], value] : formData[name].filter(item => item !== value),
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const onConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (formData.password === confirmPassword) {
            console.log('Form Data:', formData);
            dispatch(updateUser(formData));
            setFormData({
                name: '',
                surname: '',
                password: '',
                confirmed: false,
                phone_prefx: '',
                phone_number: '',
                address: '',
                zip_code: '',
                city: '',
                country: '',
                url_linkedin: '',
                interests: [],
                food_preferences: '',
                allergies: [],
                user_type: 'assitant',
                company: '',
                job_title: []
            });
            setConfirmPassword('');
        } else {
            console.error('Passwords do not match');
        }
    };

    return (
        <form className='update-user-form' onSubmit={onSubmit}>
            <p>Update User</p>
            <label>
                <input required placeholder="Insert your name" type="text" className="input" name="name" id="name" value={formData.name} onChange={onChange} />
            </label>
            <label>
                <input required placeholder="Insert your surname" type="text" className="input" name="surname" id="surname" value={formData.surname} onChange={onChange} />
            </label>
            <label>
                <input required placeholder="Email" type="email" className="input" name="email" id="email" value={email} readOnly />
            </label>
            <label>
                <input required placeholder="Phone prefix" type="tel" className="input" name="phone_prefx" id="phone_prefx" value={formData.phone_prefx} onChange={onChange} />
            </label>
            <label>
                <input required placeholder="Phone number" type="tel" className="input" name="phone_number" id="phone_number" value={formData.phone_number} onChange={onChange} />
            </label>
            <label>
                <input required placeholder="Address" type="text" className="input" name="address" id="address" value={formData.address} onChange={onChange} />
            </label>
            <label>
                <input required placeholder="Zip code" type="text" className="input" name="zip_code" id="zip_code" value={formData.zip_code} onChange={onChange} />
            </label>
            <label>
                <input required placeholder="City" type="text" className="input" name="city" id="city" value={formData.city} onChange={onChange} />
            </label>
            <label>
                <input required placeholder="Country" type="text" className="input" name="country" id="country" value={formData.country} onChange={onChange} />
            </label>
            <label>
                <input required placeholder="LinkedIn URL" type="url" className="input" name="url_linkedin" id="url_linkedin" value={formData.url_linkedin} onChange={onChange} />
            </label>
            <label>
                <input required placeholder="Company" type="text" className="input" name="company" id="company" value={formData.company} onChange={onChange} />
            </label>
            <fieldset>
                <legend>Select your job titles:</legend>
                {[
                    "Desarrollador de Contenidos",
                    "Instructor / Formador",
                    "Coordinador de Cursos",
                    "Administrador de Plataforma",
                    "Especialista en Evaluación",
                    "Diseñador Instruccional",
                    "Director de Formación",
                    "Consultor de E-learning",
                    "Gestor de Proyectos",
                    "Desarrollador de E-learning",
                    "Investigador en E-learning",
                    "Especialista en Soporte Técnico",
                    "Gestor de Comunidad",
                    "Responsable de Calidad",
                    "Director de Tecnología",
                    "Analista de Datos Educativos",
                    "Especialista en Marketing de E-learning",
                    "Facilitador de Talleres",
                    "Asesor Pedagógico",
                    "Director de Innovación",
                ].map((job) => (
                    <label key={job}>
                        <input type="checkbox" name="job_title" value={job} checked={formData.job_title.includes(job)} onChange={onChange} />
                        {job}
                    </label>
                ))}
            </fieldset>
            <label>
                <p>Select your food preferences:</p>
                <select name="food_preferences" id="food_preferences" value={formData.food_preferences} onChange={onChange}>
                    <option value="">Select...</option>
                    <option value="vegetariano">Vegetariano</option>
                    <option value="vegano">Vegano</option>
                    <option value="omnivore">Omnivore</option>
                </select>
            </label>
            <fieldset>
                <legend>Select your allergies:</legend>
                {["Gluten", "Lácteos", "Huevos", "Frutos secos", "Cacahuetes", "Mariscos", "Pescado", "Soja", "Sésamo", "Mostaza", "Apio", "Sulfitos", "Altramuz", "Moluscos", "Azucar", "Sal"].map((allergy) => (
                    <label key={allergy}>
                        <input type="checkbox" name="allergies" value={allergy} checked={formData.allergies.includes(allergy)} onChange={onChange} />
                        {allergy}
                    </label>
                ))}
            </fieldset>

            <fieldset>
                <legend>Select your interests:</legend>
                {["Tecnología", "Gestión de Proyectos", "Agile", "Softskills", "Marketing Digital", "Negocios", "Emprendimiento", "Educación", "Formación", "Salud y Bienestar", "Creatividad", "Diseño"].map((interest) => (
                    <label key={interest}>
                        <input type="checkbox" name="interests" value={interest} checked={formData.interests.includes(interest)} onChange={onChange} />
                        {interest}
                    </label>
                ))}
            </fieldset>
            <label>
                <input required placeholder="Insert your password" type="password" className="input" name="password" id="password" value={formData.password} onChange={onChange} />
            </label>
            <label>
                <input required placeholder="Confirm your password" type="password" className="input" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={onConfirmPasswordChange} />
            </label>
            <button className="submit" type="submit">Submit</button>
            <p className="signin">Want to go back? <a href="/profile">Profile</a></p>
        </form>
    );
};

export default UpdateUser;
