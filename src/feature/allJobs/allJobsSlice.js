import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllJobsThunk } from "./allJobsThunk";

const initialFilterState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 1,
  stats: {},
  monthlyApplications: [],
  ...initialFilterState,
};

export const getAllJobs = createAsyncThunk(
  "job/createJob",
  async (_, thunkAPI) => {
    return getAllJobsThunk("/jobs", thunkAPI);
  }
);

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,

  extraReducers: {
    [getAllJobs.pending]: (state) => {
      state.isLoading = true;
    },

    [getAllJobs.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.jobs = payload.jobs;
    },

    [getAllJobs.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

// export const { handleChange, clearValues } = jobSlice.actions;
export default allJobsSlice.reducer;