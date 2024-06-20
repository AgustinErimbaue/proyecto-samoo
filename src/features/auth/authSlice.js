import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const token = localStorage.getItem("token") || '';
const user = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  user: user,
  token: token,
  posts: [],
  isError: false,
  isSuccess: false,
  message: '',
  userProfile:null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) =>{
      state.isError = false,
      state.isSuccess = false,
      state.message = ''
    }
  },
  
  extraReducers : (builder) => {
    builder 
    .addCase(login.fulfilled, (state, action)=>{
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.message = action.payload.message;
      state.isSuccess = true;
    })
    .addCase(login.rejected, (state, action) =>{
      state.message = action.payload;
      state.isError = true
    });
  }
})
export default authSlice.reducer;



export const login = createAsyncThunk("auth/login", async (user,thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    console.error(error);
    const msgError = error.response.data.message
    return thunkAPI.rejectWithValue(msgError)
  }
});




export const { reset } = authSlice.actions;