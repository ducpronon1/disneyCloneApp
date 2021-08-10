import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  email: null,
  photo: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSignUp: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setSignOut: (state, payload) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setSignUp, setSignOut } = userSlice.actions;

export default userSlice.reducer;
