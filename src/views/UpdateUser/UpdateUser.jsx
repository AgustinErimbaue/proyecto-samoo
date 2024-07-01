import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../../features/auth/authSlice';
import Select from 'react-select';
import {
    FormControl,
    FormLabel,
    Input,
    Heading,
    Button,
    Text,
    Link,
} from '@chakra-ui/react';
import './UpdateUser.scss';

const UpdateUser = () => {
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
        job_title: [],
    });

    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, isSuccess } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user) {
            const {
                name,
                surname,
                email,
                phone_prefx,
                phone_number,
                address,
                zip_code,
                city,
                country,
                url_linkedin,
                interests,
                food_preferences,
                allergies,
                user_type,
                company,
                job_title,
            } = user;
            setFormData({
                name,
                surname,
                email,
                phone_prefx,
                phone_number,
                address,
                zip_code,
                city,
                country,
                url_linkedin,
                interests,
                food_preferences,
                allergies,
                user_type,
                company,
                job_title,
            });
        }
    }, [user]);

    useEffect(() => {
        if (isSuccess) {
            navigate('/UserProfile');
        }
    }, [isSuccess, navigate]);

    const onConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
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
            [field]: selectedOptions ? selectedOptions.map((option) => option.value) : [],
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (formData.password === confirmPassword) {
            dispatch(updateUser(formData));
            setFormData({
                ...formData,
                password: '',
                confirmed: false,
            });
            setConfirmPassword('');
        } else {
            console.error('Passwords do not match');
        }
    };

    return (
        <form className="update-user-form" onSubmit={onSubmit}>
            <Heading as="h2" size="lg">
                Update User
            </Heading>
            <FormControl>
                <FormLabel>Nombre</FormLabel>
                <Input
                    required
                    placeholder="Inserte su nombre"
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={onChange}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Apellidos</FormLabel>
                <Input
                    required
                    placeholder="Inserte sus apellidos"
                    type="text"
                    name="surname"
                    id="surname"
                    value={formData.surname}
                    onChange={onChange}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                    required
                    placeholder="ejemplo@correo.com"
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    readOnly
                />
            </FormControl>
            <FormControl>
                <FormLabel>Teléfono</FormLabel>
                <Input
                    required
                    placeholder="xx"
                    type="text"
                    name="phone_prefx"
                    id="phone_prefx"
                    value={formData.phone_prefx}
                    onChange={onChange}
                    width="20%"
                />
                <Input
                    required
                    placeholder="xxx xxx xxx"
                    type="tel"
                    name="phone_number"
                    id="phone_number"
                    value={formData.phone_number}
                    onChange={onChange}
                    width="80%"
                />
            </FormControl>
            <FormControl>
                <FormLabel>Dirección</FormLabel>
                <Input
                    required
                    placeholder="Inserte su dirección"
                    type="text"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={onChange}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Código postal</FormLabel>
                <Input
                    required
                    placeholder="xxxxx"
                    type="text"
                    name="zip_code"
                    id="zip_code"
                    value={formData.zip_code}
                    onChange={onChange}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Ciudad</FormLabel>
                <Input
                    required
                    placeholder="Inserte su ciudad"
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={onChange}
                />
            </FormControl>
            <FormControl>
                <FormLabel>País</FormLabel>
                <Input
                    required
                    placeholder="Inserte su país"
                    type="text"
                    name="country"
                    id="country"
                    value={formData.country}
                    onChange={onChange}
                />
            </FormControl>
            <FormControl>
                <FormLabel>LinkedIn URL</FormLabel>
                <Input
                    required
                    placeholder="Inserte su enlace a LinkedIn"
                    type="url"
                    name="url_linkedin"
                    id="url_linkedin"
                    value={formData.url_linkedin}
                    onChange={onChange}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Empresa</FormLabel>
                <Input
                    required
                    placeholder="Inserte su empresa"
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={onChange}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Seleccione sus trabajos</FormLabel>
                <Select
                    name="job_title"
                    options={jobOptions}
                    value={jobOptions.filter((option) => formData.job_title.includes(option.value))}
                    onChange={(selectedOptions) => handleSelectChange(selectedOptions, 'job_title')}
                    isMulti
                    placeholder="Seleccionar..."
                />
            </FormControl>
            <FormControl>
                <FormLabel>Seleccione sus preferencias alimenticias</FormLabel>
                <select
                    name="food_preferences"
                    value={formData.food_preferences}
                    onChange={onChange}
                    className="input"
                >
                    <option value="">Seleccionar...</option>
                    <option value="vegetariano">Vegetariano</option>
                    <option value="vegano">Vegano</option>
                    <option value="omnivoro">Omnívoro</option>
                </select>
            </FormControl>
            <FormControl>
                <FormLabel>Seleccione sus alergias</FormLabel>
                <Select
                    name="allergies"
                    options={allergyOptions}
                    value={allergyOptions.filter((option) => formData.allergies.includes(option.value))}
                    onChange={(selectedOptions) => handleSelectChange(selectedOptions, 'allergies')}
                    isMulti
                    placeholder="Seleccionar..."
                />
            </FormControl>
            <FormControl>
                <FormLabel>Contraseña</FormLabel>
                <Input
                    required
                    placeholder="xxxxxxx"
                    type="password"
                    name="password"
                    id="password"
                    value={formData.password}
                    onChange={onChange}
                />
            </FormControl>
            <FormControl>
                <FormLabel>Confirmar contraseña</FormLabel>
                <Input
                    required
                    placeholder="xxxxxxx"
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={onConfirmPasswordChange}
                />
            </FormControl>
            <Button className="submit" type="submit" colorScheme="teal">
                Submit
            </Button>
            <Text className="signin">
                Want to go back? <Link href="/profile">Profile</Link>
            </Text>
        </form>
    );
};

export default UpdateUser;
