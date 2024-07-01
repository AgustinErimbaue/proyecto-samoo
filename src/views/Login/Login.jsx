import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login, reset } from '../../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, FormControl, Heading, Input, Text, useToast } from '@chakra-ui/react'

import './Login.scss'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  
  const {email, password} = formData
  const { user, message, isSuccess, isError } = useSelector((state) => state.auth);

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const toast = useToast();

useEffect(() => {
  if (isSuccess) {
    toast({
      title: "Success",
      description: message,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    if (user && !user.completed) {
      navigate("/updateUser");
    } else {
      navigate("/UserProfile");
    }
  }
  if (isError) {
    toast({
      title: "Contraseña o email incorrecto",
      description: message,
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }
  dispatch(reset());
}, [isSuccess, isError, message, dispatch, navigate, toast]);


  const onChange = (e) =>{
    setFormData ({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(login(formData))
  }

  return (
    <Box className='body-login' p='4' borderRadius='md' mt='40'>
    <Box className="form-box" p="4" borderWidth="none" borderRadius="md" boxShadow="none">
    <form className="form" onSubmit={onSubmit}>
      <Heading as="span" size="lg" mb="4" display="block">Iniciar sesión</Heading>
      <Box className="form-container" mb="4" mt='7'>
        <FormControl mb="4">
          <Text>Email</Text>
          <Input 
            type="email" 
            name="email" 
            placeholder="example@youremail.com" 
            background='#EEE'
            value={email} 
            onChange={onChange} 
          />
        </FormControl>
        <FormControl mb="4">
          <Text>Contraseña</Text>
          <Input 
            type="password" 
            name="password" 
            placeholder="******" 
            background='#EEE'
            value={password} 
            onChange={onChange} 
          />
        </FormControl>
      </Box>
      <Button type="submit" colorScheme="blue" w="full" className='login-btn'>Enviar</Button>
    </form>
    <Box className="form-section" mt="4">
     <Text className='text-register'>Regístrate aquí <Link to='/register' className='link-register'> Registrarse</Link> </Text>
    </Box>
  </Box>
  </Box>
  )
}

export default Login