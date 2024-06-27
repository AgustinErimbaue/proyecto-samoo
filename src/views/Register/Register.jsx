import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../features/auth/authSlice';
import './Register.scss'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
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

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isError, isSuccess, message } = useSelector((state) => state.auth);
    const [confirmPassword, setConfirmPassword] = useState('');

    useEffect(() => {
        if (isSuccess) {
            navigate('/login');
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
            dispatch(register(formData));
            setFormData({
                name: '',
                surname: '',
                email: '',
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
        <form className='register-form' onSubmit={onSubmit}>
            <p>Registro</p>
            <label>
                <input required placeholder="Inserte su nombre" type="text" className="input" name="name" id="name" value={formData.name} onChange={onChange} />
            </label>
            <label>
                <input required placeholder="Inserte su username" type="text" className="input" name="surname" id="surname" value={formData.surname} onChange={onChange} />
            </label>
            <label>
                <input required placeholder="Inserte su email" type="email" className="input" name="email" id="email" value={formData.email} onChange={onChange} />
            </label>
            <label>
                <input required placeholder="Prefijo telefónico" type="tel" className="input" name="phone_prefx" id="phone_prefx" value={formData.phone_prefx} onChange={onChange} />
            </label>
            <label>
                <input required placeholder="Número de teléfono" type="tel" className="input" name="phone_number" id="phone_number" value={formData.phone_number} onChange={onChange} />
            </label>
            <label>
                <input required placeholder="Dirección" type="text" className="input" name="address" id="address" value={formData.address} onChange={onChange} />
            </label>
            <label>
                <input required placeholder="Códico postal" type="text" className="input" name="zip_code" id="zip_code" value={formData.zip_code} onChange={onChange} />
            </label>
            <label>
                <input required placeholder="Ciudad" type="text" className="input" name="city" id="city" value={formData.city} onChange={onChange} />
            </label>
            <label>
                <input required placeholder="País" type="text" className="input" name="country" id="country" value={formData.country} onChange={onChange} />
            </label>
            <label>
                <input required placeholder="Enlace a LinkedIn" type="url" className="input" name="url_linkedin" id="url_linkedin" value={formData.url_linkedin} onChange={onChange} />
            </label>
            <label>
                <select name="user_type" id="user_type" value={formData.user_type} onChange={onChange}>
                    <option value="assitant">Asistente</option>
                    <option value="admin">Admin</option>
                    {/* Add other user types as needed */}
                </select>
            </label>
            <label>
                <input required placeholder="Empresa" type="text" className="input" name="company" id="company" value={formData.company} onChange={onChange} />
            </label>
            <fieldset className="checkbox-group">
                <legend>Seleccione su trabajo:</legend>
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
                <p>Selecciona sus preferencias alimenticias:</p>
                <select name="food_preferences" id="food_preferences" value={formData.food_preferences} onChange={onChange}>
                    <option value="">Select...</option>
                    <option value="vegetariano">Vegetariano</option>
                    <option value="vegano">Vegano</option>
                    <option value="omnivore">Omnivore</option>
                </select>
            </label>
            <fieldset className="checkbox-group">
                <legend>Seleccione sus alergias:</legend>
                {["Gluten", "Lácteos", "Huevos", "Frutos secos", "Cacahuetes", "Mariscos", "Pescado", "Soja", "Sésamo", "Mostaza", "Apio", "Sulfitos", "Altramuz", "Moluscos", "Azucar", "Sal"].map((allergy) => (
                    <label key={allergy}>
                        <input type="checkbox" name="allergies" value={allergy} checked={formData.allergies.includes(allergy)} onChange={onChange} />
                        {allergy}
                    </label>
                ))}
                </fieldset>
                <fieldset className="checkbox-group">
            <legend>Seleccione sus:</legend>
            {["Tecnología", "Gestión de Proyectos", "Agile", "Softskills", "Marketing Digital", "Negocios", "Emprendimiento", "Educación", "Formación", "Salud y Bienestar", "Creatividad", "Diseño"].map((interest) => (
                <label key={interest}>
                    <input type="checkbox" name="interests" value={interest} checked={formData.interests.includes(interest)} onChange={onChange} />
                    {interest}
                </label>
            ))}
        </fieldset>
        <label>
            <input required placeholder="Inserte su contraseña" type="password" className="input" name="password" id="password" value={formData.password} onChange={onChange} />
        </label>
        <label>
            <input required placeholder="Confirmar contraseña" type="password" className="input" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={onConfirmPasswordChange} />
        </label>
        <button className="submit" type="submit">Submit</button>
        <p className="signin">¿Ya tienes cuenta? <a href="/login">Iniciar sesión</a></p>
    </form>
)
}

export default Register