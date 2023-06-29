import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://649c8e1b0480757192385644.mockapi.io/api/v1';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const addContact = createAsyncThunk(
    'contacts/fetchAll',
    async (contact, {rejectWithValue}) => {
        try {
            const response = await axios.post('/contacts', {contact});
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contact, {rejectWithValue}) => {
        try {
            const response = await axios.delete(`/contacts/${contact}`);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)