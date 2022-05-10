import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./feature/user/userSlice";
import jobSlice from "./feature/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    job: jobSlice,
  },
});
