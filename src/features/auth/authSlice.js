import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const token = localStorage.getItem("token") || "";
const user = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  user: user,
  users: [],
  userContactInfo: null,
  token: token,
  isError: false,
  isSuccess: false,
  message: '',
  isLoading:true
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
        state.users = action.payload;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.user.token;
        state.message = action.payload.message;
        state.isSuccess = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.message = action.payload;
        state.isError = true
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.token = "";
        state.isSuccessLogout = true;
    })
    .addCase(logout.rejected, (state) => {
        state.isError = true;
        state.message = action.payload.message;
        state.isErrorLogout = true;
    })
      .addCase(getUserById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isSuccess = true;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.message = action.payload;
        state.isError = true;
      })
      .addCase(getUserContactInfoById.fulfilled, (state, action) => {
        state.userContactInfo = action.payload.user;
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
    return authService.register(user);
  } catch (error) {
  }
});

export const updateUser = createAsyncThunk('auth/updateUser', async (user) => {
  try {
    return await authService.updateUser(user);
  } catch (error) {
    throw error.response.data;
  }
});

export const login = createAsyncThunk('auth/login', async (user) => {
  try {
    return authService.login(user)
  } catch (error) {
    console.error(error);
  }
});

export const getUserById = createAsyncThunk('auth/getUserById', async (id) => {
  const token = localStorage.getItem('token');
  //const user = JSON.parse(localStorage.getItem('user'));
  if (!token) {
    return ('Token');
  }
  try {
    return await authService.getUserById(id);
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
export const logout = createAsyncThunk("auth/logout", async () => {
  try {
      return await authService.logout();
  } catch (error) {
      console.error(error);
  }
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
