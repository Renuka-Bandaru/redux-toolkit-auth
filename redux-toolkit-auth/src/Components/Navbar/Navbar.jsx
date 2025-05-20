import React, { useState } from 'react';
import {AppBar, Box, Button, Modal, Toolbar, Typography} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Login, Logout } from '../../Redux-toolkit/AuthSlice';
import LoginForm from '../LoginForm/LoginForm';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [regModalOpen, setRegModalOpen] = useState(false);
  const isAuthenticated = useSelector((state) =>  state.auth.isAuthenticated)
  console.log(isAuthenticated,"isAuthenticated")
  
  const dispatch = useDispatch()
  const navigate = useNavigate();

 
  
  const handleLogin = () => {

    setModalOpen(true)

  }

  const handleLogout = () => {
     dispatch(Logout({isAuthenticated:false}))
     navigate("./")
  }

  const handleClose = () => {
    setModalOpen(false)
    setRegModalOpen(false)
  }

  const handleRegister = () => {
    setRegModalOpen(true)
  }

  return (
    <div>
      <AppBar >
        <Toolbar>
        <Typography variant='h6' sx={{ flexGrow: 1 }}>
          Redux-App
        </Typography>
        <Button color='inherit'>Home</Button>
        <Button color='inherit'>About</Button>
        <Button color='inherit'>Courses</Button>
        {isAuthenticated ? 
        <Button color='inherit' onClick={handleLogout}>Logout</Button> :
        <Button color='inherit' onClick={handleLogin}>Login</Button>
        }
        <Button color='inherit' onClick={handleRegister}>Register</Button>
        </Toolbar>
      </AppBar>

<Modal open={modalOpen} onClose={handleClose} >
                <Box sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "400px",
                    bgcolor: "background.paper",
                    border: "2px solid #000",
                    p: 4,

                }}>
                    <LoginForm onClose={handleClose} />
                </Box>


            </Modal>

            <Modal open={regModalOpen} onClose={handleClose} >
                <Box sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "400px",
                    bgcolor: "background.paper",
                    border: "2px solid #000",
                    p: 4,

                }}>
                    <RegisterForm onClose={handleClose} />
                </Box>


            </Modal>
           

    </div>
  )
}



export default Navbar;
