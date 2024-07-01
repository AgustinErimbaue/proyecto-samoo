import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../features/auth/authSlice';
import Select from 'react-select'; // Importa react-select
import './Register.scss';

const Register = () => {
    const [step, setStep] = useState(1);
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
        user_type: 'assistant',
        company: '',
        job_title: ''
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
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (formData.password === confirmPassword) {
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
                user_type: 'assistant',
                company: '',
                job_title: ''
            });
            setConfirmPassword('');
        } else {
            console.error('Passwords do not match');
        }
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const previousStep = () => {
        setStep(step - 1);
    };

    const jobOptions = [
        { value: "Desarrollador de Contenidos", label: "Desarrollador de Contenidos" },
        { value: "Instructor / Formador", label: "Instructor / Formador" },
        { value: "Coordinador de Cursos", label: "Coordinador de Cursos" },
        { value: "Administrador de Plataforma", label: "Administrador de Plataforma" },
        { value: "Especialista en Evaluación", label: "Especialista en Evaluación" },
        { value: "Diseñador Instruccional", label: "Diseñador Instruccional" },
        { value: "Director de Formación", label: "Director de Formación" },
        { value: "Consultor de E-learning", label: "Consultor de E-learning" },
        { value: "Gestor de Proyectos", label: "Gestor de Proyectos" },
        { value: "Desarrollador de E-learning", label: "Desarrollador de E-learning" },
        { value: "Investigador en E-learning", label: "Investigador en E-learning" },
        { value: "Especialista en Soporte Técnico", label: "Especialista en Soporte Técnico" },
        { value: "Gestor de Comunidad", label: "Gestor de Comunidad" },
        { value: "Responsable de Calidad", label: "Responsable de Calidad" },
        { value: "Director de Tecnología", label: "Director de Tecnología" },
        { value: "Analista de Datos Educativos", label: "Analista de Datos Educativos" },
        { value: "Especialista en Marketing de E-learning", label: "Especialista en Marketing de E-learning" },
        { value: "Facilitador de Talleres", label: "Facilitador de Talleres" },
        { value: "Asesor Pedagógico", label: "Asesor Pedagógico" },
        { value: "Director de Innovación", label: "Director de Innovación" },
    ];

    const allergyOptions = [
        { value: "Gluten", label: "Gluten" },
        { value: "Lácteos", label: "Lácteos" },
        { value: "Huevos", label: "Huevos" },
        { value: "Frutos secos", label: "Frutos secos" },
        { value: "Cacahuetes", label: "Cacahuetes" },
        { value: "Mariscos", label: "Mariscos" },
        { value: "Pescado", label: "Pescado" },
        { value: "Soja", label: "Soja" },
        { value: "Sésamo", label: "Sésamo" },
        { value: "Mostaza", label: "Mostaza" },
        { value: "Apio", label: "Apio" },
        { value: "Sulfitos", label: "Sulfitos" },
        { value: "Altramuz", label: "Altramuz" },
        { value: "Moluscos", label: "Moluscos" },
        { value: "Azúcar", label: "Azúcar" },
        { value: "Sal", label: "Sal" },
    ];

    const interestOptions = [
        { value: "Tecnología", label: "Tecnología" },
        { value: "Gestión de Proyectos", label: "Gestión de Proyectos" },
        { value: "Agile", label: "Agile" },
        { value: "Softskills", label: "Softskills" },
        { value: "Marketing Digital", label: "Marketing Digital" },
        { value: "Negocios", label: "Negocios" },
        { value: "Emprendimiento", label: "Emprendimiento" },
        { value: "Educación", label: "Educación" },
        { value: "Formación", label: "Formación" },
        { value: "Salud y Bienestar", label: "Salud y Bienestar" },
        { value: "Creatividad", label: "Creatividad" },
        { value: "Diseño", label: "Diseño" },
    ];

    const handleSelectChange = (selectedOptions, field) => {
        setFormData({
            ...formData,
            [field]: selectedOptions ? selectedOptions.map(option => option.value) : []
        });
    };

    return (
        <form className='register-form' onSubmit={onSubmit}>
            {step === 1 && (
                <>
                    <p>Información Personal</p>
                    <label>
                        Nombre
                        <input required placeholder="Inserte su nombre" type="text" className="input" name="name" id="name" value={formData.name} onChange={onChange} />
                    </label>
                    <label>
                        Apellidos
                        <input required placeholder="Inserte sus apellidos" type="text" className="input" name="surname" id="surname" value={formData.surname} onChange={onChange} />
                    </label>
                    <label>
                        Email
                        <input required placeholder="ejemplo@correo.com" type="email" className="input" name="email" id="email" value={formData.email} onChange={onChange} />
                    </label>
                    <label>
                        Prefijo telefónico
                        <input required placeholder="+ xx" type="tel" className="input" name="phone_prefx" id="phone_prefx" value={formData.phone_prefx} onChange={onChange} />
                    </label>
                    <label>
                        Número de teléfono
                        <input required placeholder="xxx xxx xxx" type="tel" className="input" name="phone_number" id="phone_number" value={formData.phone_number} onChange={onChange} />
                    </label>
                    <label>
                        Dirección
                        <input required placeholder="Inserte su dirección" type="text" className="input" name="address" id="address" value={formData.address} onChange={onChange} />
                    </label>
                    <label>
                        Código postal
                        <input required placeholder="xxxxx" type="text" className="input" name="zip_code" id="zip_code" value={formData.zip_code} onChange={onChange} />
                    </label>
                    <label>
                        Ciudad
                        <input required placeholder="Inserte su ciudad" type="text" className="input" name="city" id="city" value={formData.city} onChange={onChange} />
                    </label>
                    <label>
                        País
                        <input required placeholder="Inserte su país" type="text" className="input" name="country" id="country" value={formData.country} onChange={onChange} />
                    </label>
                    <button className="submit" type="button" onClick={nextStep}>Siguiente</button>
                </>
            )}

            {step === 2 && (
                <>
                    <p>Información Adicional</p>
                    <label>
                        Enlace a LinkedIn
                        <input required placeholder="Inserte su enlace a LinkedIn" type="url" className="input" name="url_linkedin" id="url_linkedin" value={formData.url_linkedin} onChange={onChange} />
                    </label>
                    <label>
                        Empresa
                        <input required placeholder="Inserte su empresa" type="text" className="input" name="company" id="company" value={formData.company} onChange={onChange} />
                    </label>
                    <label>
                        <p>Seleccione su trabajo:</p>
                        <Select
                            name="job_title"
                            options={jobOptions}
                            value={jobOptions.find(option => option.value === formData.job_title)}
                            onChange={option => setFormData({ ...formData, job_title: option.value })}
                            isClearable
                            placeholder="Seleccionar..."
                        />
                    </label>
                    <label>
                        <p>Seleccione sus preferencias alimenticias:</p>
                        <select name="food_preferences" id="food_preferences" value={formData.food_preferences} onChange={onChange}>
                            <option value="">Seleccionar...</option>
                            <option value="vegetariano">Vegetariano</option>
                            <option value="vegano">Vegano</option>
                            <option value="omnivoro">Omnívoro</option>
                        </select>
                    </label>
                    <label>
                        <p>Seleccione sus alergias:</p>
                        <Select
                            name="allergies"
                            options={allergyOptions}
                            value={allergyOptions.filter(option => formData.allergies.includes(option.value))}
                            onChange={selectedOptions => handleSelectChange(selectedOptions, 'allergies')}
                            isMulti
                            placeholder="Seleccionar..."
                        />
                    </label>
                    <label>
                        <p>Seleccione sus intereses:</p>
                        <Select
                            name="interests"
                            options={interestOptions}
                            value={interestOptions.filter(option => formData.interests.includes(option.value))}
                            onChange={selectedOptions => handleSelectChange(selectedOptions, 'interests')}
                            isMulti
                            placeholder="Seleccionar..."
                        />
                    </label>
                    <label>
                        Contraseña
                        <input required placeholder="xxxxxxx" type="password" className="input" name="password" id="password" value={formData.password} onChange={onChange} />
                    </label>
                    <label>
                        Confirmar contraseña
                        <input required placeholder="xxxxxxx" type="password" className="input" name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={onConfirmPasswordChange} />
                    </label>
                    <button type="button" onClick={previousStep}>Anterior</button>
                    <button className="submit" type="submit">Submit</button>
                </>
            )}
            <p className="signin">¿Ya tienes cuenta? <a href="/login">Iniciar sesión</a></p>
        </form>
    );
};

export default Register;
