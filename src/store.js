import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./feature/user/userSlice";
import jobSlice from "./feature/job/jobSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
  },
});
