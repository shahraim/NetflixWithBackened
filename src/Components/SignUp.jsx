import React, { useState } from "react";
import LogoImg from "../assets/imgs/net.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forumError, setForumError] = useState("");
  const navigate = useNavigate();

  // Sign up Button Loading
  const [btnloading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const url = "http://localhost:2000/register";
    console.log({ name, email, password });

    axios
      .post(url, { name, email, password })
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          toast.error("Email Already Exist");
        } else if (err.message === "Network Error") {
          toast.error("Network Error");
        } else {
          console.error("Error", err);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="backContainerLog">
      <div className="overlayLog"></div>
      <div>
        <img src={LogoImg} alt="logo" style={logoStyle} />
      </div>
      <div className="loginMain">
        <div className="login signup">
          <h1 style={{ color: "white", textAlign: "left" }}>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label className="active" htmlFor="name">
                Name
              </label>
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className="active" htmlFor="email">
                Email
              </label>
            </div>
            <div className="input-container">
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label className="active" htmlFor="password">
                Password
              </label>
              <p>
                <small>{forumError}</small>
              </p>
            </div>
            <button className="btn btn-primary" type="submit">
              {btnloading ? <ClipLoader size={20} color="#fff" /> : "Sign up"}
            </button>
            <br />
            <br />
            <Link to="/login" className="signupButton">
              <small>
                <span className="span1">Already have an account? </span>{" "}
                <span className="span2">Sign In Here!</span>
              </small>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
export default SignUp;

const logoStyle = {
  height: "120px",
  marginTop: "-15px",
  marginLeft: "20px",
};
