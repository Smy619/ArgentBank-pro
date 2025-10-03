import axios from "axios";

export const fetchTransactionsApi = async (accountId, token) => {
  const response = await axios.get(
    `http://localhost:3001/api/v1/accounts/${accountId}/transactions`,
    { headers: { Authorization: `Bearer ${token}`}}
  );
  return response.data.body;
};

export const updateTransactionApi = async (id, updates, token) => {
  const response =await axios.put(
  `http://localhost:3001/api/v1/transactions/${id}`,
    updates,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data.body; 
};