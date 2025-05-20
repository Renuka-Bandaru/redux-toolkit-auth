import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Login } from '../../Redux-toolkit/AuthSlice'


const LoginForm = ({ onClose }) => {
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();
    const dispath = useDispatch();
    

    const handleUserDetails = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserDetails((prev) => ({
            ...prev, [name]: value
        }))

    }

    const handleLogin = () => {
        console.log(userDetails, "userDetails After Login")
        dispath(Login({email: userDetails.email, password: userDetails.password, isAuthenticated: true}))
        navigate('/home')
        onClose()
    }

    return (
        <div>
            <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField type='email' label='Email' name='email' variant='outlined' onChange={handleUserDetails} fullWidth />
                <TextField type='password' label='password' name='password' variant='outlined' onChange={handleUserDetails} fullWidth />
                <Button variant='contained' onClick={handleLogin}>Login</Button>

            </Box>
        </div>
    )
}

export default LoginForm;
