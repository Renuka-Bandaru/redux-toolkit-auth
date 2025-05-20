import { createSlice } from "@reduxjs/toolkit"


const globalState = {
    email: "",
    password: "",
    isAuthenticated:false
}

const AuthSlice = createSlice({
    name: 'authslice',
    initialState: globalState,
    reducers: {
        Login: (state, action) => {
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.isAuthenticated = action.payload.isAuthenticated
            console.log(action.payload , "action.payload")
        },
        Logout: (state, action) => {
            state.isAuthenticated = action.payload.isAuthenticated
            console.log(action.payload , "Logout action.payload")
        }
    }
})              

export const {Login, Logout}  = AuthSlice.actions;
export default AuthSlice.reducer;