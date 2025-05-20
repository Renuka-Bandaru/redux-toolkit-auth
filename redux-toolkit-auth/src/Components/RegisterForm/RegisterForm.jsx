import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUser, SignIn } from '../../Redux-toolkit/RegisterFormSlice'

const RegisterForm = ({onClose}) => {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: ""
  })

  const newUserGlobalData = useSelector((data) => data.register.user)
  console.log(newUserGlobalData,"newUserGlobalData")

  const dispatch = useDispatch();
console.log("this is registration")

  const registerDetails = (event) => {
    const {name , value} = event.target;
    setNewUser((prev) => ({
      ...prev , [name]: value 
    }))
  }
  console.log(newUser, "newUser")

  const handleRegister = () => {
    console.log(newUser,"newUser details after submitting")
    dispatch(SignIn({newUser}))
    dispatch(createUser({newUser}))
    getUsers()
    
  }

  const getUsers = async() =>{
    const url = await get("https://api.escuelajs.co/api/v1/users")
    const result = url.data
    console.log(result)
  }
  return (
    <div>
      <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField type='username' label='username' name='username' variant='outlined' onChange={registerDetails} fullWidth />
        <TextField type='email' label='Email' name='email' variant='outlined' onChange={registerDetails} fullWidth />
        <TextField type='password' label='password' name='password' variant='outlined' onChange={registerDetails} fullWidth />
        <Button variant='contained' onClick={handleRegister}>Register</Button>

      </Box>
    </div>
  )
}

export default RegisterForm
