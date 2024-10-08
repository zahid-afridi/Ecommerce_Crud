import {createSlice} from '@reduxjs/toolkit'

const initialState={
    Auth:null
}

export const  AuthSlice=createSlice({
    name:"Auth",
    initialState,
    reducers:{
        setAuth:(state,action)=>{
            state.Auth=action.payload
        },
        logOut:(state)=>{
            state.Auth=null
        }
    }
})

export const {setAuth,logOut}=AuthSlice.actions
export default AuthSlice.reducer