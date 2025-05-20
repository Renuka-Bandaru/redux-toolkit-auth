import {configureStore} from '@reduxjs/toolkit';
import AuthSlice from './Redux-toolkit/AuthSlice';
import RegisterFormSlice from './Redux-toolkit/RegisterFormSlice';

const store = configureStore({
    reducer: {
       auth: AuthSlice,
       register: RegisterFormSlice
    }
})

export default store;