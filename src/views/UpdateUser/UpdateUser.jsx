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
    InputGroup,
    InputLeftAddon,
} from '@chakra-ui/react';
import './UpdateUser.scss';

const UpdateUser = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phone_prefx: '',
        phone_number: '',
        address: '',
        zip_code: '',
        city: '',
        country: '',
        password: '',
        confirmPassword: '',
    });

    const [additionalData, setAdditionalData] = useState({
        url_linkedin: '',
        interests: [],
        food_preferences: '',
        allergies: [],
        user_type: 'assistant',
        company: '',
        job_title: '',
    });

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
                password: '',
                confirmPassword: '',
            });
            setAdditionalData({
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

    const onAdditionalChange = (e) => {
        const { name, value } = e.target;
        setAdditionalData({
            ...additionalData,
            [name]: value,
        });
    };

    const handleNextStep = () => {
        if (validateStep(step)) {
            setStep(step + 1);
        } else {
            alert('Por favor, complete todos los campos requeridos antes de continuar.');
        }
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
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
        setAdditionalData({
            ...additionalData,
            [field]: selectedOptions ? selectedOptions.map((option) => option.value) : [],
        });
    };

    const validateStep = (step) => {
        if (step === 1) {
            return Object.values(formData).every(field => field !== '') &&
            formData.password === formData.confirmPassword;
        }
        if (step === 2) {
            return true;
        }
        return true;
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (formData.password === formData.confirmPassword) {
            dispatch(updateUser({
                ...formData,
                ...additionalData
            }));
        } else {
            alert('Las contraseñas no coinciden');
        }
    };

    return (
        <form className="register-form" onSubmit={onSubmit}>
            <Heading as="h2" size="lg" mb={4} textAlign="center">
                Actualización de Usuario
            </Heading>

            {step === 1 && (
                <>
                    <Heading as="h6" size="md" mb={4} textAlign="center">
                        Información Personal
                    </Heading>
                    <FormControl mb={4}>
                        <FormLabel>Nombre</FormLabel>
                        <Input
                            required
                            placeholder="Inserte su nombre"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={onChange}
                        />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Apellidos</FormLabel>
                        <Input
                            required
                            placeholder="Inserte sus apellidos"
                            type="text"
                            name="surname"
                            value={formData.surname}
                            onChange={onChange}
                        />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Email</FormLabel>
                        <Input
                            required
                            placeholder="ejemplo@correo.com"
                            type="email"
                            name="email"
                            value={formData.email}
                            readOnly 
                        />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Teléfono</FormLabel>
                        <InputGroup>
                            <InputLeftAddon children="+" />
                            <Input
                                required
                                placeholder="xx"
                                type="text"
                                name="phone_prefx"
                                value={formData.phone_prefx}
                                onChange={onChange}
                                width="20%"
                            />
                            <Input
                                required
                                placeholder="xxx xxx xxx"
                                type="tel"
                                name="phone_number"
                                value={formData.phone_number}
                                onChange={onChange}
                                width="80%"
                            />
                        </InputGroup>
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Dirección</FormLabel>
                        <Input
                            required
                            placeholder="Inserte su dirección"
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={onChange}
                        />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Código postal</FormLabel>
                        <Input
                            required
                            placeholder="xxxxx"
                            type="text"
                            name="zip_code"
                            value={formData.zip_code}
                            onChange={onChange}
                        />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Ciudad</FormLabel>
                        <Input
                            required
                            placeholder="Inserte su ciudad"
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={onChange}
                        />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>País</FormLabel>
                        <Input
                            required
                            placeholder="Inserte su país"
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={onChange}
                        />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Contraseña</FormLabel>
                        <Input
                            required
                            placeholder="Contraseña"
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={onChange}
                        />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Confirmar contraseña</FormLabel>
                        <Input
                            required
                            placeholder="Confirmar contraseña"
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={onChange}
                        />
                    </FormControl>
                    <Button colorScheme="teal" onClick={handleNextStep} mb={4}>
                        Siguiente
                    </Button>
                </>
            )}

            {step === 2 && (
                <>
                    <Heading as="h6" size="md" mb={4} textAlign="center">
                        Información Profesional
                    </Heading>
                    <FormControl mb={4}>
                        <FormLabel>Seleccione sus intereses</FormLabel>
                        <Select
                            name="interests"
                            options={interestOptions}
                            value={interestOptions.filter(option => additionalData.interests.includes(option.value))}
                            onChange={(selectedOptions) => handleSelectChange(selectedOptions, 'interests')}
                            isMulti
                            placeholder="Seleccionar..."
                        />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Enlace a LinkedIn</FormLabel>
                        <Input
                            placeholder="Inserte su enlace a LinkedIn"
                            type="url"
                            name="url_linkedin"
                            value={additionalData.url_linkedin}
                            onChange={onAdditionalChange}
                        />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Empresa</FormLabel>
                        <Input
                            placeholder="Inserte su empresa"
                            type="text"
                            name="company"
                            value={additionalData.company}
                            onChange={onAdditionalChange}
                        />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Seleccione su trabajo</FormLabel>
                        <Select
                            name="job_title"
                            options={jobOptions}
                            value={jobOptions.find(option => option.value === additionalData.job_title)}
                            onChange={(option) => setAdditionalData({ ...additionalData, job_title: option ? option.value : '' })}
                            isClearable
                            placeholder="Seleccionar..."
                        />
                    </FormControl>
                    <Heading as="h6" size="md" mb={4}>Especificaciones alimenticias</Heading>
                    <FormControl mb={4}>
                        <FormLabel>Especificaciones alimenticias</FormLabel>
                        <Select
                            name="allergies"
                            options={allergyOptions}
                            value={allergyOptions.filter(option => additionalData.allergies.includes(option.value))}
                            onChange={(selectedOptions) => handleSelectChange(selectedOptions, 'allergies')}
                            isMulti
                            placeholder="Seleccionar..."
                        />
                    </FormControl>
                    <FormControl mb={4}>
                        <FormLabel>Seleccione sus preferencias alimenticias</FormLabel>
                        <select
                            name="food_preferences"
                            value={additionalData.food_preferences}
                            onChange={onAdditionalChange}
                        >
                            <option value="">Seleccionar...</option>
                            <option value="vegetariano">Vegetariano</option>
                            <option value="vegano">Vegano</option>
                            <option value="omnivoro">Omnívoro</option>
                        </select>
                    </FormControl>
                    <Button colorScheme="teal" onClick={handlePreviousStep} mb={4}>
                        Anterior
                    </Button>
                    <Button colorScheme="teal" type="submit" mb={4}>
                        Actualizar
                    </Button>
                </>
            )}
        </form>
    );
};

export default UpdateUser;
