// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   user: "",
//   isError: false,
//   isFetching: false,
//   isSuccess: false,
//   message: "",
// };

// export const getUser = createAsyncThunk(
//   "user/getUser",
//   async (arg, { getState, rejectWithValue }) => {
//     try {
//       const { auth } = getState();
//       const userID = auth?.user?.user?.id;

//       const config = {
//         headers: {
//           Authorization: `Bearer ${auth?.user?.token}`,
//         },
//       };
//       const { data } = await axios.get(
//         process.env.REACT_APP_BASE_URI + `/auth/${userID}`,
//         config
//       );
//       if (data) {
//         localStorage.setItem("user", JSON.stringify(data));
//       }
//       return data;
//     } catch (error) {
//       const message =
//         (error.response && error.response.data && error.response.data.msg) ||
//         error.message ||
//         error.toString();
//       return rejectWithValue(message);
//     }
//   }
// );

// export const getUserSlice = createSlice({
//   name: "userData",
//   initialState,
//   reducers: {
//     // reset: (state) => {
//     //   state.user=""
//     //   state.isFetching = false;
//     //   state.isSuccess = false;
//     //   state.isError = false;
//     //   state.message = "";
//     // },
//   },

//   extraReducers: (builder) => {
//     builder
//       .addCase(getUser.pending, (state) => {
//         state.isFetching = true;
//       })
//       .addCase(getUser.fulfilled, (state, action) => {
//         state.isFetching = false;
//         state.isSuccess = true;
//         state.user = action.payload;
//       })
//       .addCase(getUser.rejected, (state, action) => {
//         state.isFetching = false;
//         state.isError = true;
//         state.message = action.payload;
//         state.user = null;
//       });
//   },
// });

// export const { reset } = getUserSlice.actions;
// export default getUserSlice.reducer;
