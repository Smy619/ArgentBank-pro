import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import TransactionTable from "../../components/Transaction/TransactionTable/TransactionTable";
import Account from "../../components/account/Account";
import Footer from "../../components/footer/Footer";
import {
  fetchTransactions,
  updateTransaction,
} from "../../components/feature/transactionSlice.js";
import "./Transactions.css";
import { useDispatch, useSelector } from "react-redux";

function Transactions() {
  const { accountId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const {
    items: transactions,
    loading,
    error,
  } = useSelector((state) => state.transactions);

  const {
    items: accounts,
    loading: accountsLoading,
  } = useSelector((state) => state.accounts);

  const currentAccount = accounts.find(
    (acc) => acc.accountId === Number(accountId)
  );

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    if (accountId) {
      dispatch(fetchTransactions(accountId));
    }
  }, [accountId, dispatch, navigate, isAuthenticated]);

  return (
    <>
      <Navbar isLoggedIn={isAuthenticated} />
      <main className="main">
        <div className="main-content">
          {(loading || accountsLoading) && <p>Loading ...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}

          {!loading && !accountsLoading && currentAccount && (
            <>
              <Account
                title={currentAccount.title}
                amount={currentAccount.amount}
                description={currentAccount.description}
                showButton={false}
                showCloseIcon={true}
              />

              <TransactionTable
                transactions={transactions}
                onUpdate={(id, updates) => {
                  dispatch(updateTransaction({ id, updates }));
                }}
              />
            </>
          )}

          {!loading && !accountsLoading && !currentAccount && (
            <p>Account not found.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Transactions;
