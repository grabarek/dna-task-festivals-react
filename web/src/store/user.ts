import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "#contract/user";

export interface UserState {
  data: User | undefined;
}

const initialState: UserState = {
  data: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
    },
    updateBalance: (state, action: PayloadAction<number>) => {
      if (state.data) {
        state.data.balance = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, updateBalance } = userSlice.actions;

export default userSlice.reducer;
