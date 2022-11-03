import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://6363ba3237f2167d6f817e1c.mockapi.io/api';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkApi) => {
    try {
        const response = await axios.get('/contacts')
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})

export const addContact = createAsyncThunk('contacts/addContact', async (data, thunkApi) => {
    try {
        const response = await axios.post('/contacts', data);
        return response.data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkApi) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
})