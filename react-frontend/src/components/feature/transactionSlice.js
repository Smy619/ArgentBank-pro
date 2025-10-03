import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { fetchTransactionsApi, updateTransactionApi } from "../../services/transactionsService"


//Async thunk to fetch transactions by accountId
export const fetchTransactions = createAsyncThunk(
  "transactions/fetchTransactions",// action type prefix

  async (accountId, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token || localStorage.getItem("token");
      return  await fetchTransactionsApi(accountId, token);
    } catch (err) {
      // error → return custom error message
      return rejectWithValue(err.response?.data.message || err.message || "Fetch failed" );
    }
  }
);

export const updateTransaction = createAsyncThunk(
  "transactions/updateTransaction",
  async ({ id, updates },{ rejectWithValue, getState}) => {
    try {
      const token =getState().auth.token || localStorage.getItem("token");
      return await updateTransactionApi(id, updates, token);
    } catch (err) {
      return rejectWithValue(err.response?.data.message || err.message || "Update failed");
    }
  }
)

//Create slice for transactions
const transactionSlice =createSlice( {
  name : "transactions",
  initialState: {
    items: [],// transaction list
    loading: false,// loading status
    error: null,// error message
    saving: false,
  },
  reducers:{
    // if you want later: local edits like updateCategory, updateNote, etc.
  },

  //Handle async thunk states
  extraReducers : (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state,action) =>{
        state.loading = false;
        state.items = action.payload;// store transactions into state
      })
      .addCase(fetchTransactions.rejected, (state,action) => {
        state.loading = false;
        state.error =action.payload;// save error message
      })
      .addCase(updateTransaction.pending, (state) => {
        state.saving = true;
        state.error = null;
      })
      .addCase(updateTransaction.fulfilled, (state, action) => {
        state.saving = false;
        const updated = action.payload;
        state.items = state.items.map((t) =>
          t.id === updated.id ? updated :t
        );
      })
      .addCase(updateTransaction.rejected, (state, action) => {
        state.saving = false;
        state.error = action.payload;
      });
   },
});

export default transactionSlice.reducer;