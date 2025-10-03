import React from "react";
import TransactionRow from "../TransactionRow/TransactionRow";
import "./TransactionTable.css";

function TransactionTable({ transactions, onUpdate }) {
  return (
    <div className="transaction-table">
      <div className="transaction-header">
        <span>Date</span>
        <span>Description</span>
        <span>Amount</span>
        <span>Balance</span>
        <span className="arrow"></span>
      </div>
      <div className="transaction-body">
        {(Array.isArray(transactions) ? transactions : []).map((t) => (
          <TransactionRow key={t.id} transaction={t} onUpdate={onUpdate} />
        ))}
      </div>
    </div>
  );
}

export default TransactionTable;
