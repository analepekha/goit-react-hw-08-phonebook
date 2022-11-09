import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut, currentUser } from './auth-operations';

const authInitialState = {
    user: { name: null, email: null },
    token: null,
    isLoggendIn: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
}

const handlePending = state => {
    state.isLoading = true;
    state.error = null;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: {
        [register.pending]: handlePending,
        [register.fulfilled] (state, action){
            state.isLoading = false;
            state.error = null;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        [register.rejected]: handleRejected,
        [logIn.pending]: handlePending,
        [logIn.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggendIn = true;
        },
        [logIn.rejected]: handleRejected,
        [logOut.pending]: handlePending,
        [logOut.fulfilled](state, action) {
            state.isLoading = false;
            state.user = null;
            state.token = null;
            state.isLoggendIn = false;
        },
        [logOut.rejected]: handleRejected,
        [currentUser.pending]: state => {
            state.isRefreshing = true;
            state.error = null;
        },
        [currentUser.fulfilled](state, action) {
            state.isRefreshing = false;
            state.user = action.payload.user;
            state.isLoggendIn = true;
        },
        [currentUser.rejected](state, action) {
            state.isRefreshing = false;
            state.error = action.payload;
        }
    }
})

export const authReducer = authSlice.reducer;