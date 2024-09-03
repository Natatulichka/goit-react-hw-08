import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66d1e70462816af9a4f53a95.mockapi.io";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(
        "https://66d1e70462816af9a4f53a95.mockapi.io/api/v1/contacts"
      );

      return data; // те, що повертається з санки потрапляє в action.payload в статусі fullfilled
    } catch (error) {
      return thunkApi.rejectWithValue(error.message); // те, що повертається з санки потрапляє в action.payload в статусі rejected
    }
  }
);
export const deleteContact = createAsyncThunk(
  "/contacts/deleteContact",
  async (contactId, thunkApi) => {
    try {
      const { data } = await axios.delete(
        `https://66d1e70462816af9a4f53a95.mockapi.io/api/v1/contacts/${contactId}`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contacts, thunkApi) => {
    try {
      const { data } = await axios.post(
        "https://66d1e70462816af9a4f53a95.mockapi.io/api/v1/contacts",
        contacts
      );

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
