import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    message: "",
    loading: false,
}

export const signUp = createAsyncThunk(
    'auth/authSlice',
    async ({registerData,setRegisterData},{rejectWithValue}) => {
        const res = axios.post('http://localhost:4000/api/signup',registerData)
          .then(function (response) {
            setRegisterData({ lastname: "", firstname: "", email: "", password: "", confirmPassword: "" })
          })
          .catch(function (error) {
            console.log(error?.response?.data?.message);
            return rejectWithValue(error);
          });
        return res
    })

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [signUp.pending]: (state) => {
            state.loading = true
        },
        [signUp.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.message=""
        },
        [signUp.rejected]: (state,{payload}) => {
            state.loading = false
            state.message=payload?.response?.data?.message
        },
    },
})



export const authReducer = authSlice.reducer