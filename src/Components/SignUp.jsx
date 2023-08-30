import React from "react";
import LogoImg from "../assets/imgs/net.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [forumError, setForumError] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:6246/";
    // console.log(name, email, password);

    axios
      .post(url, { name, email, password })
      .then((res) => {
        console.log(res.data);
        // navigate("/login");
      })
      .catch((err) => {
        console.error("Error", err.response.data.message);
      });
  };

  return (
    <div className="backContainerLog">
      <div className="overlayLog"></div>
      <div>
        <img src={LogoImg} alt="logo" style={logoStyle} />
      </div>
      <div className="loginMain">
        <div className="login">
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
              Submit
            </button>{" "}
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
