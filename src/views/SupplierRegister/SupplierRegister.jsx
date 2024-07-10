import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register, reset } from "../../features/suplier/supSlice";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Heading,
  Button,
  Text,
} from '@chakra-ui/react';
import './UpdateUser.scss';

const SupplierRegister = () => {
  const initialValue = {
    cif: "", 
    name: "", 
    email: "", 
    employes: 0, 
    password: "",
    type_collab:"",
    country:"",
  };

  const [data, setData] = useState(initialValue);
  const [btnDisable, setBtnDisable] = useState(true);
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isError, isSuccess, message } = useSelector((state) => state.sup);

  useEffect(() => {
    if (isSuccess) {
      navigate("/viewparticipants");
      setData(initialValue)
      dispatch(reset());
    }
  }, [isSuccess, navigate, dispatch]);

  const validate = (fieldValues = data) => {
    let tempErrors = { ...errors };

    if ("cif" in fieldValues) {
      if (!fieldValues.cif) tempErrors.cif = "CIF is required";
      else if (!/^[A-Za-z0-9]{8,10}$/.test(fieldValues.cif))
        tempErrors.cif = "CIF must be 8-10 alphanumeric characters";
      else delete tempErrors.cif;
    }

    if ("company_name" in fieldValues) {
      if (!fieldValues.company_name) tempErrors.company_name = "Name is required";
      else delete tempErrors.company_name;
    }

    if ("address_contact" in fieldValues) {
      if (!fieldValues.address_contact) tempErrors.address_contact = "Address is required";
      else delete tempErrors.address_contact;
    }

    if ("email" in fieldValues) {
      if (!fieldValues.email) tempErrors.email = "Email is required";
      else if (!/^\S+@\S+\.\S+(,\S+@\S+\.\S+)*$/.test(fieldValues.email))
        tempErrors.email = "Email is invalid add the e-mails direction separated by coma";
      else delete tempErrors.email;
    }

    if ("employes" in fieldValues) {
      if (fieldValues.employes < 0 || fieldValues.employes > 20)
        tempErrors.employes = "Number of employees must be between 0 and 20";
      else delete tempErrors.employes;
    }

    if ("password" in fieldValues) {
      if (!fieldValues.password) tempErrors.password = "Password is required";
      else if (fieldValues.password.length < 8)
        tempErrors.password = "Password must be at least 8 characters long";
      else delete tempErrors.password;
    }

    if ("country" in fieldValues) {
      if (!fieldValues.country) tempErrors.country = "Country is required";
      else delete tempErrors.country;
    }

    if ("phone_prefx" in fieldValues) {
      if (!fieldValues.phone_prefx) tempErrors.phone_prefx = "Phone prefx is required";
      else delete tempErrors.phone_prefx;
    }

    if ("phone_number" in fieldValues) {
      if (!fieldValues.phone_number) tempErrors.phone_number = "Phone number required";
      else delete tempErrors.phone_number;
    }

    setErrors(tempErrors);
    console.log('tempErrors : ', tempErrors)
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log('[name]: value', {[name]: value} )
    setData({
      ...data,
      [name]: value,
    });

    validate({ [name]: value });
  };

  useEffect(() => {
    setBtnDisable(!validate());
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const dataToSend={...data,email:data.email.split(",")[0],emails:data.email.split(",")}
      dispatch(register(dataToSend));
      console.log("Form data:", dataToSend);
      //setData(initialValue);
      //navigate("/viewparticipants");
    }
  };

  const handleCancel =(e)=>{
    e.preventDefault();
    console.log('hola')
    navigate("/viewparticipants");
  }

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <Heading as="h2" size="lg" mb={4} textAlign="center">
        Registro de Empresas
      </Heading>

      <FormControl mb={4}>
        <FormLabel>CIF</FormLabel>
        <Input
          required
          placeholder="CIF"
          type="text"
          name="cif"
          value={data.cif}
          onChange={handleInputChange}
        />
        {errors.cif && <Text color="red.500">{errors.cif}</Text>}
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Nombre</FormLabel>
        <Input
          required
          placeholder="Nombre de la empresa"
          type="text"
          name="company_name"
          value={data.company_name}
          onChange={handleInputChange}
        />
        {errors.name && <Text color="red.500">{errors.company_name}</Text>}
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Dirección</FormLabel>
        <Input
          required
          placeholder="dirección de la empresa"
          type="text"
          name="address_contact"
          value={data.address_contact}
          onChange={handleInputChange}
        />
        {errors.address_contact && <Text color="red.500">{errors.address_contact}</Text>}
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Emails de los asistentes</FormLabel>
        <Input
          required
          placeholder="test@example.com,test2@example.com,etc"
          type="text"
          name="email"
          value={data.email}
          onChange={handleInputChange}
        />
        {errors.email && <Text color="red.500">{errors.email}</Text>}
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Número de empleados</FormLabel>
        <Input
          required
          placeholder="Número de empleados"
          type="number"
          name="employes"
          min="0"
          max="20"
          value={data.employes}
          onChange={handleInputChange}
        />
        {errors.employes && <Text color="red.500">{errors.employes}</Text>}
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Contraseña</FormLabel>
        <Input
          required
          placeholder="Contraseña"
          type="password"
          name="password"
          value={data.password}
          onChange={handleInputChange}
        />
        {errors.password && <Text color="red.500">{errors.password}</Text>}
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Prefijo</FormLabel>
        <Input
          required
          placeholder="34"
          type="number"
          name="phone_prefx"
          value={data.phone_prefx}
          onChange={handleInputChange}
        />
        {errors.country && <Text color="red.500">{errors.phone_prefx}</Text>}
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Teléfono</FormLabel>
        <Input
          required
          placeholder="678123456"
          type="number"
          name="phone_number"
          value={data.phone_number}
          onChange={handleInputChange}
        />
        {errors.country && <Text color="red.500">{errors.phone_number}</Text>}
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Pais</FormLabel>
        <Input
          required
          placeholder="Pais"
          type="text"
          name="country"
          value={data.country}
          onChange={handleInputChange}
        />
        {errors.country && <Text color="red.500">{errors.country}</Text>}
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Tipo de colaboración</FormLabel>
        <Select
          required
          onChange={handleInputChange}
          name="type_collab"
        >
          <option value="Platinum" >Platinum</option>
          <option value="Gold" >Gold</option>
          <option value="Silver" >Silver</option>
        </Select>
      </FormControl>

      <Button colorScheme="teal" type="submit" disabled={btnDisable} mb={4}>
        Registrar
      </Button>

      <Button type="button" onClick={handleCancel}>
            Cancel
        </Button>
    </form>
  );
};

export default SupplierRegister;
