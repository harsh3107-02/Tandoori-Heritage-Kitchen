import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    name: "",
    email: "",
    password: "",
    isLoggedIn: false
  },
  reducers: {
    setUserInfo: (state, action) => {
      const { name, email, password } = action.payload;
      state.name = name;
      state.email = email;
      state.password = password;
    },
    loginUser: (state) => {
      state.isLoggedIn = true;
    },
    logoutUser: (state) => {
      state.name = "";
      state.email = "";
      state.password = "";
      state.isLoggedIn = false;
    }
  },
});

export const { setUserInfo, loginUser, logoutUser } = userSlice.actions;
export default UserSlice.reducer;
