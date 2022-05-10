import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getUserFromLocalStorage } from "../../utils/localStorage";

const initialState = {
  isLoading: false,
  position: "",
  company: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["pending", "interview", "declined"],
  status: "pending",
  isEditing: false,
  editJobId: "",
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
  },
});
export const { handleChange } = jobSlice.actions;
export default jobSlice.reducer;
