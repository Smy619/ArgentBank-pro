import React from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./Account.css";

function Account({
  title,
  amount,
  description,
  accountId,
  showButton = true,
  showCloseIcon = false,
}) {
  const navigate = useNavigate();

  const handleViewTransactions = () => {
     navigate(`/accounts/${accountId}`);
  };
  const handleClose = () => {
    navigate("/profile");
  };
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">
        {showButton && (
          <FontAwesomeIcon
            icon={faChevronRight} className="show-button"
            onClick={handleViewTransactions}
          />
        )}

        {showCloseIcon && (
          <button className="close-button" onClick={handleClose}>
            <AiOutlineClose />
          </button>
        )}
      </div>
    </section>
  );
}

export default Account;
