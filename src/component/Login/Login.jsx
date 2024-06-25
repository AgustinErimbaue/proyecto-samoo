import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login, reset } from '../../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Button, FormControl, Heading, Input, Text } from '@chakra-ui/react'
import './Login.scss'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  
  const {email, password} = formData
//   const {message, isSuccess, isError} = useSelector((state) => state.auth)

  const navigate = useNavigate()
  const dispatch = useDispatch()

//   useEffect(() => {
//     if(isSuccess){
//       notification.success({
//         message: 'Success',
//         description: message
//       })
//       navigate('/home')
//     }
//     if(isError){
//       notification.error({
//         message: 'Error',
//         description: message
//       })
//     }
//     dispatch(reset())
//   },[isSuccess, message, isError])

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
    <Box className='body-login' p='4' borderRadius='md'>
    <Box className="form-box" p="4" borderWidth="1px" borderRadius="md" boxShadow="md">
    <form className="form" onSubmit={onSubmit}>
      <Heading as="span" size="lg" mb="4" display="block">Inicia sesión</Heading>
      <Box className="form-container" mb="4">
        <FormControl mb="4">
          <Text>Email</Text>
          <Input 
            type="email" 
            name="email" 
            placeholder="example@youremail.com" 
            value={email} 
            onChange={onChange} 
          />
        </FormControl>
        <FormControl mb="4">
          <Text>Contraseña</Text>
          <Input 
            type="password" 
            name="password" 
            placeholder="******************" 
            value={password} 
            onChange={onChange} 
          />
        </FormControl>
        <FormControl>
          <Text>Número de participantes</Text>
          <Input placeholder='aquí deberia ir un contador de asistentes'/>
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