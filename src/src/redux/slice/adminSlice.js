import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import adminService from "../service/adminService";


const admin = JSON.parse(localStorage.getItem("admin"));

const initialState = {
  admin: admin ? admin : "",
  isError: false,
  isFetching: false,
  isSuccess: false,
  message: "",
};

export const register = createAsyncThunk(
  "admin/signup",
  async (admin, thunkAPI) => {
    try {
      return await adminService.register(admin);
    } catch (error) {
      const message =
        (error.response && error.response.data && error.response.data.msg) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const login = createAsyncThunk("admin/signin", async (admin, thunkAPI) => {
  try {
    return await adminService.login(admin);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.msg) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const logout = createAsyncThunk("admin/logout", async () => {
  adminService.logout();
});

export const adminSlice = createSlice({
  name: "admin",
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
        state.admin = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isFetching = false;
        state.isError = true;
        state.message = action.payload;
        state.admin = null;
      })
      .addCase(login.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.admin = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isFetching = false;
        state.isError = true;
        state.message = action.payload;
        state.admin = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.admin = null;
      })
  },
});

export const { reset } = adminSlice.actions;
export default adminSlice.reducer;
