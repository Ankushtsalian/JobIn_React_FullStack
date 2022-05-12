import authHeader from "../../utils/authHeader";
import customFetch from "../../utils/axios";

export const getAllJobsThunk = async (_, thunkAPI) => {
  try {
    const resp = await customFetch.get("/jobs", authHeader(thunkAPI));
    return resp.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.msg) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
};

export const showStatsThunk = async (_, thunkAPI) => {
  try {
    const resp = await customFetch.get("/jobs/stats", authHeader(thunkAPI));
    return resp.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.msg) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
};
