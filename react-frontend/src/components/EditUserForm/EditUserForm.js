import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserInfo } from "../feature/auth/authSlice";
import "./EditUserForm.css";

function EditUserForm({ onCancel }) {
  const user = useSelector((state) => state.auth.user);
  const [newUserName, setNewUserName] = useState(user?.userName || "");
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.userName) {
      setNewUserName(user.userName);
    } else {
      const savedUser = localStorage.getItem("user");
      if (savedUser) {
        const parsed = JSON.parse(savedUser);
        setNewUserName(parsed.userName);
        dispatch(setUserInfo(parsed));
      }
    }
  }, [user, dispatch]);

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      // Call API to update user info
      const results = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // You need to get the token from the store
        },
        body: JSON.stringify({ userName: newUserName }), // Only userName is editable
      });

      const data = await results.json();

      if (!results.ok) throw new Error(`Server error: ${results.status}`);
      if (data.status !== 200) throw new Error(data.message || "Update failed");

      // Update Redux store with new info
      dispatch(setUserInfo(data.body));

      //Update localStorage
      localStorage.setItem("user", JSON.stringify(data.body));

      //Close form
      onCancel();
    } catch (error) {
      console.error("Error updating user info:", error);
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <div className="edit-user-info">
        <h2>Edit user info</h2>
        <div className="input-container">
          <div className="input-wrapper">
            <label htmlFor="userName">User name:</label>
            <input
              type="text"
              id="userName"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="firstName">First name:</label>
            <input
              type="text"
              id="firstName"
              value={user?.firstName || ""}
              disabled
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="lastName">Last name:</label>
            <input
              type="text"
              id="lastName"
              value={user?.lastName || ""}
              disabled
            />
          </div>
        </div>
        <div className="buttons">
          <button type="button" className="save-button" onClick={handleSave}>
            Save
          </button>
          <button type="button" className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditUserForm;
