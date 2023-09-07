import React, { useState } from "react";
import LogoImg from "../assets/imgs/net.png";
import { Link, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import { toast } from "react-toastify";
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Sign in Button Loading
  const navigate = useNavigate();
  const [btnloading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const url = "http://localhost:2000/login";
    console.log({ email, password });
    axios
      .post(url, { email, password })
      .then((res) => {
        toast.success("Login Successfull");
        navigate("/videos");
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          toast.error('Invalid email or password');
        } else if (err.message === 'Network Error') {
          toast.error('Network Error');
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
      <div className="navLog">
        <img src={LogoImg} alt="logo" style={logoStyle} />
        <Link className="btnBack" to="/">
          &rarr;
        </Link>
      </div>
      <div className="loginMain">
        <div className="login">
          <h1 style={{ color: "white", textAlign: "left" }}>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input type="email" name="email" id="email" required
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
              <label className="active" htmlFor="email">
                Email
              </label>
              <p></p>
            </div>
            <div className="input-container">
              <input type="password" name="password" id="password" required
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
              <label className="active" htmlFor="password">
                Password
              </label>
              <p></p>
            </div>
            <button className="btn btn-primary">
              {btnloading ? <ClipLoader size={20} color='#fff' /> : 'Login'}
            </button> <br />
            <br />
            <Link to="/signup" className="signupButton">
              <small>
                <span className="span1">New to Netflix? </span>{" "}
                <span className="span2">Sign Up Here!</span>
              </small>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

const logoStyle = {
  height: "120px",
  marginTop: "-15px",
  marginLeft: "20px",
};

export default Login;