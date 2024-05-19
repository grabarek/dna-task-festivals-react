import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "#contract/user";

export interface UserState {
  data: User | undefined;
}

const initialState: UserState = {
  data: JSON.parse(localStorage.getItem('user') || 'null'),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.data = undefined;
      localStorage.removeItem('user'); 
    },
    updateBalance: (state, action: PayloadAction<number>) => {
      if (state.data) {
        state.data.balance = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, logout, updateBalance } = userSlice.actions;

export default userSlice.reducer;
