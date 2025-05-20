import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

const globalState = {
    user: {

        username: "",
        email: "",
        password: ""
    },

    isLoading: false

}

export const createUser = createAsyncThunk("create new user",
    async ({newUser}) => {

        const response = await axios.post("https://api.escuelajs.co/api/v1/users/",
            {
                "name": newUser.username,
                "email": newUser.email,
                "password": newUser.password,
                "avatar": "https://picsum.photos/800"
            }
        );
        const data = response.data
        console.log(data, "response data")
        return data

    }
)

const RegisterFormSlice = createSlice({
    name: 'registration',
    initialState: globalState,
    reducers: {
        SignIn: (state, action) => {
            state.user.username = action.payload.newUser.username;
            state.user.email = action.payload.newUser.email;
            state.user.password = action.payload.newUser.password;

            console.log(action.payload, "action.payload")
            console.log(globalState,"globalState")
            createUser()
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(createUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
        });
        builder.addCase(createUser.rejected, (state) => {
            state.isLoading = true
        })
    }
})
export const { SignIn } = RegisterFormSlice.actions;
export default RegisterFormSlice.reducer;