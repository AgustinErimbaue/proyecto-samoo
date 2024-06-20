import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const token = localStorage.getItem('token') || '';
const user = JSON.parse(localStorage.getItem('user')) || null;

const initialState = {
    user: user,
    token: token,
    isError: false,
    isSuccess: false,
    message: ''
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false,
                state.isSuccess = false,
                state.message = ''
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.user = action.payload;
                state.message = 'Registration successful';
            })
            .addCase(register.rejected, (state, action) => {
                state.isError = true;
                state.message = action.payload;
            });
    }
});


export const register = createAsyncThunk('auth/register', async (user) => {
    try {
        console.log(user)
        return authService.register(user)
    } catch (error) {
        console.error(error);
    }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;