import axios from "axios";
const API_BASE_URL = process.env.REACT_APP_API_URL;

export const fetchTransactionsApi = async (accountId, token) => {
  const response = await axios.get(
    `${API_BASE_URL}/accounts/${accountId}/transactions`,
    { headers: { Authorization: `Bearer ${token}`}}
  );
  return response.data.body;
};

export const updateTransactionApi = async (id, updates, token) => {
  const response =await axios.put(
  `${API_BASE_URL}/transactions/${id}`,
    updates,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data.body; 
};