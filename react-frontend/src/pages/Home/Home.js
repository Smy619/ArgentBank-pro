import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Feature from "../../components/feature/feature";
import "./Home.css"

function Home() {
  const isLoggedIn = false;
  const userName = "Tony";
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} userName={isLoggedIn ? userName : ""} />
      <main>
        <div className="main-content">
        <Feature />
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Home;
