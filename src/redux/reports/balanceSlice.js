import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 0,
};

const balanceSlice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    setBalance(state, action) {
      console.log('Nowa wartość balansu:', action.payload);
      state.balance = action.payload;
    },
  },
});

export const { setBalance } = balanceSlice.actions;
export default balanceSlice.reducer;
