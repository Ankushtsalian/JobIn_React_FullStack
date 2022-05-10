import customFetch from "../../utils/axios";

export const getAllJobsThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });

    return resp.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.msg) ||
      error.message ||
      error.toString();

    return thunkAPI.rejectWithValue(message);
  }
};
