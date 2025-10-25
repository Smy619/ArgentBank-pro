import React, { useState } from "react";
import axios from "axios";
import { FaChevronDown, FaChevronUp, FaPen} from "react-icons/fa";
import "./TransactionRow.css";

function TransactionRow({ transaction, onUpdate }) {
  const {
    id,
    date,
    description,
    amount,
    balance,
    transactionType,
    category,
    note,
  } = transaction;

  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditingCategory, setIsEditingCategory] = useState(false);
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [editCategory, setEditCategory] = useState(category);
  const [editNote, setEditNote] = useState(note);

  const handleSave = async () => {
    const API_BASE_URL = process.env.REACT_APP_API_URL;
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `${API_BASE_URL}/transactions/${id}`,
        { category: editCategory, note: editNote },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      onUpdate(id, { category: editCategory, note: editNote });
      setIsEditingCategory(false);
      setIsEditingNote(false);
    } catch (err) {
      console.error("Error updating transaction :", err);
      alert("Failed to update transaction");
    }
  };
  const handleCancel = () => {
    setIsEditingCategory(false);
    setIsEditingNote(false);
    setEditCategory(category);
    setEditNote(note);
  };

  return (
    <div className="transaction-row">
      <div
        className="transaction-summary"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="date">{date}</span>
        <span className="description">{description}</span>
        <span className="amount">${amount.toFixed(2)}</span>
        <span className="balance">${balance.toFixed(2)}</span>
        <span className="arrow">{isExpanded ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>
      {isExpanded && (
        <div className="transaction-details-content">
          <div className="detail-item">
            <span className="label">Transaction type:</span>
            <span className="value">{transactionType}</span>
          </div>

          <div className="detail-item">
            <span className="label">Category:</span>
            {isEditingCategory ? (
              <select
                className="select-inline"
                value={editCategory}
                onChange={(e) => setEditCategory(e.target.value)}
              >
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Shopping">Shopping</option>
                <option value="Other">Other</option>
              </select>
            ) : (
              <span className="value">
                {category}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsEditingCategory(true);
                  }}
                >
                 <FaPen/>
                </button>
              </span>
            )}
          </div>

          <div className="detail-item">
            <span className="label">Note:</span>
            {isEditingNote ? (
              <input
                type="text"
                value={editNote}
                onChange={(e) => setEditNote(e.target.value)}
              />
            ) : (
              <span className="value">
                {note}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsEditingNote(true);
                  }}
                >
                   <FaPen/>
                </button>
              </span>
            )}
          </div>

          {(isEditingCategory || isEditingNote) && (
            <div style={{ marginTop: "1rem" }}>
              <button onClick={handleSave}>💾 Save</button>
              <button button onClick={handleCancel}>
                ❌ Cancel
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TransactionRow;
