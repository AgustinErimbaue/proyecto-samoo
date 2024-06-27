import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const token = localStorage.getItem("token") || "";
const user = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  user: user,
  userContactInfo: null,
  token: token,
  isError: false,
  isSuccess: false,
  message: ''
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      (state.isError = false), (state.isSuccess = false), (state.message = "");
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "Registration successful";
      })
      .addCase(register.rejected, (state, action) => {
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.message = action.payload.message;
        state.isSuccess = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.message = action.payload;
        state.isError = true
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isSuccess = true;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.message = action.payload;
        state.isError = true;
      })
      .addCase(getUserContactInfoById.fulfilled, (state, action) => {
        state.userContactInfo = action.payload;
        state.isSuccess = true;
        state.isError = false;
        state.message = '';
      })
      .addCase(getUserContactInfoById.rejected, (state, action) => {
        state.message = action.payload;
        state.isError = true;
        state.isSuccess = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload;
        localStorage.setItem('user', JSON.stringify(action.payload));
        state.isSuccess = true;
        state.message = 'User updated successfully';
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.message = action.payload;
        state.isError = true;
        state.isSuccess = false;
      });
  },
});

export const register = createAsyncThunk("auth/register", async (user) => {
  try {
    console.log(user);
    return authService.register(user);
  } catch (error) {
    console.error(error);
  }
});

export const updateUser = createAsyncThunk('auth/updateUser', async (user) => {
  try {
    console.log(user);
    return await authService.updateUser(user);
  } catch (error) {
    console.error(error);
    throw error.response.data;
  }
});

export const login = createAsyncThunk('auth/login', async (user) => {
  try {
    console.log(user)
    return authService.login(user)
  } catch (error) {
    console.error(error);
  }
});

export const getUserById = createAsyncThunk('auth/getUserById', async () => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));
  if (!token || !user) {
    return ('Token or user not found');
  }
  try {
    return await authService.getUserById(token, user._id);
  } catch (error) {
    console.error(error);
  }
});

export const getUserContactInfoById = createAsyncThunk('auth/getUserContactInfoById', async (userId) => {
  try {
    return await authService.getUserContactInfoById(token, userId);
  } catch (error) {
    console.error(error);
  }
});

export const getAllUsers = createAsyncThunk("auth/getUsers", async () => {
  try {
    const res = await authService.getAllUser();
    return res;
  } catch (error) {
    console.error(error);
  }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
