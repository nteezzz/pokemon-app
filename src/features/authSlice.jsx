import { createSlice } from "@reduxjs/toolkit";

const initialState={loggedIn: false, username: ' '}

export const authSlice= createSlice({
    name: 'auth',
    initialState,
    reducers:{
        login: (state)=>{
            state.loggedIn= true;
        },
        logout:(state)=>{
            state.loggedIn=false;
        },
        setUsername: (state, action) => {
            state.username = action.payload;
          }
    }
})

export const {login, logout, setUsername}=authSlice.actions;

export default authSlice.reducer;