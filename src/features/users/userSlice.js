import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    name: "Martin Lucas",
  },
  {
    id: "2",
    name: "Saas Goldy",
  },
  {
    id: "3",
    name: "Lover cloud",
  },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});
export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;
