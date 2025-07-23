const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  accessToken: null,
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.isAuthenticated = true;
    },
    updateAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    logout: (state, action) => {
      state.accessToken = null;
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setCredentials, updateAccessToken, logout } = authSlice.actions;

export default authSlice.reducer;
