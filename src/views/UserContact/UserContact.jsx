import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getUserContactInfoById, reset } from '../../features/auth/authSlice';
import { Box, Button, Center, Image, Input, Text } from '@chakra-ui/react';
import './UserContact.scss'

const UserContact = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { userContactInfo, token, isError, isSuccess, message, user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getUserContactInfoById(id));
        return () => {
            dispatch(reset());
        };
    }, [dispatch, id]);

    if (!userContactInfo) {
        return <div>Loading...</div>;
    }

    console.log("User Contact Info: ", userContactInfo);
    console.log("Token: ", token);

    return (
        <Box className='userContact-container' mt={10} display="flex" justifyContent="center" alignItems="center" flexDirection="column" gap={4}>
      <Box className='profile-body' textAlign="center" mb={20}>
        <Center mb={4}>
        <Image
          borderRadius='full'
          boxSize='120px'
          src='https://bit.ly/dan-abramov'
          alt='Dan Abramov'
        />
        </Center>
        <Text fontSize='3xl'>{userContactInfo.name}</Text>
        <Text fontSize='xl'>{userContactInfo.job_title}</Text>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" width="100%">
        <Box display="flex" flexDirection="column" width="270px" gap={2}>
            <Box border='1px' borderRadius='8px 8px 0px 0px' height={14}>
                <Text color='#a4b8c4' ml={15}>Móvil</Text>
                <Text display='flex' justifyContent='center'>{userContactInfo.phone_prefx} {userContactInfo.phone_number}</Text>
            </Box>
            <Box border='1px' height={14}>
                <Text color='#a4b8c4' ml={15}>Correo electrónico</Text>
                <Text display='flex' justifyContent='center'>{userContactInfo.email}</Text>
            </Box>
            <Box border='1px' borderRadius='0px 0px 8px 8px' height={14}>
                <Text color='#a4b8c4' ml={15}>Perfil Profesional</Text>
                <Text display='flex' justifyContent='center'><a href={userContactInfo.url_linkedin} target="_blank" rel="noopener noreferrer">{userContactInfo.url_linkedin}</a></Text>
            </Box>
            <Box display="flex" justifyContent="center" mt={4}>
            <Button size="lg" colorScheme="teal" variant='solid' borderRadius={50} width={150} className='userProfile-btn' _hover={{ backgroundColor: '#fff' }} >Guardar</Button>
          </Box>
        </Box>
      </Box>
    </Box>
    )
}

export default UserContact