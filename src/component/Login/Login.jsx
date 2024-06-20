import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login, reset } from '../../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'

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
    <div className="form-box">
    <form className="form" onSubmit={onSubmit}>
        <span className="title">Login</span>
        <span className="subtitle">Welcome back.</span>
        <div className="form-container">
          <input type="email" name='email' className="input" placeholder="Email" value={email} onChange={onChange}/>
          <input type="password" name='password' className="input" placeholder="Password" value={password} onChange={onChange}/>
        </div>
        <button>Login</button>
    </form>
    <div className="form-section">
    </div>
    </div>
  )
}

export default Login