import authHeader from "../../utils/authHeader";
import customFetch from "../../utils/axios";
import { getAllJobs, hideLoading, showLoading } from "../allJobs/allJobsSlice";
import { logoutUser } from "../user/userSlice";
import { clearValues } from "./jobSlice";

export const createJobThunk = async (job, thunkAPI) => {
  try {
    const resp = await customFetch.post("/jobs", job, authHeader(thunkAPI));
    thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.msg) ||
      error.message ||
      error.toString();
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
    }
    return thunkAPI.rejectWithValue(message);
  }
};

export const deleteJobThunk = async (jobId, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const resp = await customFetch.delete(
      `/jobs/${jobId}`,
      authHeader(thunkAPI)
    );
    thunkAPI.dispatch(getAllJobs());
    return resp.data.msg;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    const message =
      (error.response && error.response.data && error.response.data.msg) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
};

export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    const resp = await customFetch.patch(
      `/jobs/${jobId}`,
      job,
      authHeader(thunkAPI)
    );
    thunkAPI.dispatch(clearValues());
    return resp.data.msg;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    const message =
      (error.response && error.response.data && error.response.data.msg) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
};
