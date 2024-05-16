import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../service/userService";
import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : "",
  isError: false,
  isFetching: false,
  isSuccess: false,
  message: "",
};

export const register = createAsyncThunk(
  "auth/signup",
  async (user, thunkAPI) => {
    try {
      return await userService.register(user);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk("auth/signin", async (user, thunkAPI) => {
  try {
    return await userService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.msg) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const getUser = createAsyncThunk(
  "auth/getUser",
  async (arg, { getState, rejectWithValue }) => {
    try {
      const { auth } = getState();
      const userID = auth?.user?.user?.id;

      const config = {
        headers: {
          Authorization: `Bearer ${auth?.user?.token}`,
        },
      };
      const { data } = await axios.get(
        process.env.REACT_APP_BASE_URI + `/auth/${userID}`,
        config
      );
      if (data) {
        localStorage.setItem("user", JSON.stringify(data));
      }
      return data;
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString();
      return rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  userService.logout();
});

export const forgotPassword = createAsyncThunk(
  "auth/forgotpassword",
  async (user, thunkAPI) => {
    try {
      return await userService.forgotPassword(user);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isFetching = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isFetching = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isFetching = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(getUser.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isFetching = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(forgotPassword.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isFetching = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
