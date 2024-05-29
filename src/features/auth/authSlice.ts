import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { IUser } from "@/models/IUser";

export interface AuthState {
    user: IUser | null,
    isAuth: boolean,
    isLoading: boolean,
    error: string | null
}

const initialState: AuthState = {
    user: null,
    isAuth: false,
    isLoading: false,
    error: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        },
    }
})

export const { 
    setAuth, 
    setUser, 
} = authSlice.actions

export default authSlice.reducer