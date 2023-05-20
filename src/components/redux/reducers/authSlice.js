import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    error:{status:"",message:""},
    loading: false,
}

export const signUp = createAsyncThunk(
    'auth/signUp',
    async ({registerData,setRegisterData},{rejectWithValue}) => {
        const res = axios.post('http://localhost:4000/api/signup',registerData)
          .then(function (response) {
            setRegisterData({ lastname: "", firstname: "", email: "", password: "", confirmPassword: "" })
          })
          .catch(function (error) {
            console.log(error?.response?.data?.message)
            return rejectWithValue(error);
          });
        return res
    })

export const signIn = createAsyncThunk(
    'auth/signIn',
    async ({signInData,setSignInData},{rejectWithValue}) => {
        const res = axios.post('http://localhost:4000/api/signin',signInData)
          .then(function (response) {
            setSignInData({ email: "", password: "" })
          })
          .catch(function (error) {
            console.log(error?.response?.data?.message)
            return rejectWithValue(error);
          });
        return res
    })

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        resetSignupError:(state)=>{
            state.error={status:"",message:""}
        }
    },
    extraReducers: {
        [signUp.pending]: (state) => {
            state.loading = true
        },
        [signUp.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.error.message="user created successfully"
            state.error.status="success"
        },
        [signUp.rejected]: (state,{payload}) => {
            state.loading = false
            state.error.message=payload?.response?.data?.message
            state.error.status="error"
        },
        [signIn.pending]: (state) => {
            state.loading = true
        },
        [signIn.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.error.message="signed in successfully"
            state.error.status="success"
        },
        [signIn.rejected]: (state,{payload}) => {
            state.loading = false
            state.error.message=payload?.response?.data?.message
            state.error.status="error"
        },
    },
})

export const { resetSignupError } = authSlice.actions

export const authReducer = authSlice.reducer