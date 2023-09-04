import React from "react";
import { Link } from "react-router-dom";
import LogoImg from "../assets/imgs/net.png";
import MainPageBottom from "./MainPageBottom";
import Footer from "./Footer";
import { ArrowRight } from 'lucide-react';

function MainPage() {
  return (
    <div className="backContainer">
      <div className="overlay"></div>
      <div className="container" style={MainPageStyle}>
        <div style={navsetStyle}>
          <img src={LogoImg} alt="logo" style={logoStyle} />
          <Link to="/login" className="btnClr" style={buttonStyle}>
            Sign In
          </Link>
        </div>
        <div className="secEdit">
          <h1>Unlimited movies, TV shows, and more</h1>
          <p>Watch anywhere. Cancel anytime.</p>
          <div className="emailSec">
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div>
              <input type="email" placeholder="Email address" />
              <button className="flex gap-3 items-center text-xl">Get Started <ArrowRight /> </button>
            </div>
          </div>
        </div>
      </div>
      <MainPageBottom />
      <Footer />
    </div>
  );
}

const buttonStyle = {
  marginTop: "-10px",
  background: "#E50914",
  color: "white",
  fontSize: "15px",
  fontWeight: "bolder",
  borderRadius: "5px",
  padding: " 5px 15px",
  textDecoration: "none",
};

const MainPageStyle = {
  height: "100%",
  padding: "0 20px",
};

const logoStyle = {
  height: "100px",
  marginTop: "-10px",
};

const navsetStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

export default MainPage;
