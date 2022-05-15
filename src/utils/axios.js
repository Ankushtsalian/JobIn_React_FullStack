import axios from "axios";
import { clearStore } from "../feature/user/userSlice";
const customFetch = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

export default customFetch;

export const checkForUnauthorizedResponse = (error, thunkApi) => {
  if (error.response.status === 401) {
    thunkApi.dispatch(clearStore());
    return thunkApi.rejectWithValue("Unauthorized! Logging Out...");
  }
  return thunkApi.rejectWithValue(error.response.data.msg);
};
