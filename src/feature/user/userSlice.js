import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  user: null,
  isLoading: false,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkApi) => {
    console.log(`registerUser: ${JSON.stringify(user)}`);
  }
);
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkApi) => {
    console.log(`loginUser: ${JSON.stringify(user)}`);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
});

export default userSlice.reducer;
