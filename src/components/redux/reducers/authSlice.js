import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    error:{status:"",message:""},
    loading: false,
    methode:"",
    isUserSignedIn:false
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

export const logOut = createAsyncThunk(
    'auth/logOut',
    async (_,{rejectWithValue}) => {
        const res = axios.get('http://localhost:4000/api/logout', {withCredentials: true})
          .then(function (response) {

          })
          .catch(function (error) {

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
        },
        tokenExpired:(state)=>{
            state.isUserSignedIn=false
            state.methode="logout"
        }
    },
    extraReducers: {
        [signUp.pending]: (state) => {
            state.loading = true
            state.methode=""
        },
        [signUp.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.error.message="user created successfully"
            state.error.status="success"
            state.methode=""
        },
        [signUp.rejected]: (state,{payload}) => {
            state.loading = false
            state.error.message=payload?.response?.data?.message
            state.error.status="error"
            state.methode=""
        },
        [signIn.pending]: (state) => {
            state.loading = true
            state.methode=""
        },
        [signIn.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.error.message="signed in successfully"
            state.error.status="success"
            state.isUserSignedIn=true
            state.methode=""
        },
        [signIn.rejected]: (state,{payload}) => {
            state.loading = false
            state.error.message=payload?.response?.data?.message
            state.error.status="error"
        },
        [logOut.pending]: (state) => {
            state.loading = true
        },
        [logOut.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.error.message="log out successfully"
            state.error.status="success"
            state.methode="logout"
            state.isUserSignedIn=false
        },
        [logOut.rejected]: (state,{payload}) => {
            state.loading = false
            state.error.message=payload?.response?.data?.message
            state.error.status="error"
        },
    },
})

export const { resetSignupError,tokenExpired } = authSlice.actions

export const authReducer = authSlice.reducer