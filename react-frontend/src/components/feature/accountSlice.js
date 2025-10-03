import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAccounts } from "../../services/accountsService";

export const fetchAccountsThunk = createAsyncThunk("accounts/fetch",async (_, { rejectWithValue}) =>{
    try {
       return  await fetchAccounts();
    } catch (err) {
      return rejectWithValue("Failed to fetch accounts")
    }
});

const initialState ={
  items: [],
  loading: false,
  error: null,
}
const accountSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccountsThunk.pending, (state) =>{
        state.loading = true;
      })
      .addCase(fetchAccountsThunk.fulfilled, (state,action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAccountsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error =action.payload || action.error.message;
      });
  },
});

export default accountSlice.reducer;