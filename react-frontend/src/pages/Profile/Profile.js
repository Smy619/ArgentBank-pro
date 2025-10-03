import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Account from "../../components/account/Account";
import EditUserForm from "../../components/EditUserForm/EditUserForm";
import { loginSuccess, setUserInfo } from "../../components/feature/auth/authSlice";
import { getProfile } from "../../utils/api";
import { fetchAccountsThunk } from "../../components/feature/accountSlice";
import "./Profile.css";

function Profile() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  const accountsState = useSelector((state) => state.accounts);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const restoreFromLocalStorage = () => {
      const savedToken = localStorage.getItem("token");
      const savedUser = localStorage.getItem("user");
      if (savedToken && savedUser) {
       dispatch(loginSuccess({
        token:savedToken,
        user:JSON.parse(savedUser)
       }));
      }
    };

    const fetchProfile = async () => {
      try {
        const data = await getProfile(token);
        dispatch(setUserInfo(data.body));
        localStorage.setItem("user", JSON.stringify(data.body));
      } catch (error) {
        console.error("Error fetching profile:", error);
        restoreFromLocalStorage();
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchProfile();
    } else {
      restoreFromLocalStorage();
    }
  }, [token,dispatch]);

  useEffect(()=> {
    dispatch(fetchAccountsThunk())
}, [dispatch]);

  if (loading) return <p>Loading profile ...</p>;

  return (
    <>
      <Navbar isLoggedIn={!!token} userName={user?.userName} />
      <main>
        <div className="main-content">
          <div className="header">
            {isEditing ? (
              <EditUserForm onCancel={() => setIsEditing(false)} />
            ) : (
              <>
                <h1>
                  Welcome back
                  <br />
                  {user?.firstName} {user?.lastName}
                  {user?.userName && ` (${user.userName})`}!
                </h1>
                <button
                  className="edit-button"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Name
                </button>
              </>
            )}
          </div>

          {/* Account Section */}
          <h2 className="sr-only">Accounts</h2>
          {accountsState.loading &&<p>Loading accounts ...</p>}
          {accountsState.error && <p>{accountsState.error}</p>}
          {accountsState.items.map((account) => (
            <Account
              key={account.accountId}
              title={account.title}
              amount={account.amount}
              description={account.description}
              accountId={account.accountId}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Profile;
