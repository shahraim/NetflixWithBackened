import React, { useState } from "react";
import LogoImg from "../../assets/imgs/net.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [forumError, setForumError] = useState("");
  const navigate = useNavigate();

  // Sign up Button Loading
  const [btnloading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const url = "http://localhost:3001/register";
    console.log({ name, email, password });

    axios
      .post(url, { name, email, password })
      .then((res) => {
        console.log(res.data);
        toast.success('User Registered Successfully');
        navigate("/login");
      })
      .catch((err) => {
        if (err.response && err.response.status === 400) {
          toast.error('Email Already Exist');
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
          <h1 style={{ color: "white", textAlign: "left" }}>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <input type="text" name="name" id="name" required
                value={name}
                onChange={(e) => setName(e.target.value)} />
              <label className="active" htmlFor="name">
                Name
              </label>
              <p></p>
            </div>
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
              {btnloading ? <ClipLoader size={20} color='#fff' /> : 'Signup'}
            </button> <br />
            <br />
            <Link to="/login" className="signupButton">
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
export default SignUp;

const logoStyle = {
  height: "120px",
  marginTop: "-15px",
  marginLeft: "20px",
};
