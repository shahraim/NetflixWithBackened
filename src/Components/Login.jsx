import React, { useState } from "react";
import LogoImg from "../assets/imgs/net.png";
import { Link } from "react-router-dom";

function Login() {

  
  
  
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
          <form>
            <div className="input-container">
              <input type="email" name="email" id="email" required />
              <label className="active" htmlFor="email">
                Email
              </label>
              <p></p>
            </div>
            <div className="input-container">
              <input type="password" name="password" id="password" required />
              <label className="active" htmlFor="password">
                Password
              </label>
              <p></p>
            </div>
            <button className="btn btn-primary">Submit</button> <br />
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

// import React from "react";
// import LogoImg from "../assets/imgs/net.png";
// import { Link } from "react-router-dom";

// function Login() {
//   return (
//     <div className="backContainer">
//       <div className="overlay"></div>
//       <div>
//         <img src={LogoImg} alt="logo" style={logoStyle} />
//       </div>
//       <div className="login">
//         <h1 style={{ color: "white" }}>Sign In</h1>
//         <form action="/login" method="POST">
//           <label htmlFor="email">Email</label>
//           <input type="email" name="email" />
//           <br />
//           <br />
//           <label htmlFor="password">Password</label>
//           <input id="password" type="password" name="<PASSWORD>" />
//           <br />
//           <br />
//           <button class="btn btn-primary">Submit </button>
//           <Link to="/signup">
//             <small>Don't have an account? Sign Up Here!</small>
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Login;

// const logoStyle = {
//   height: "120px",
//   marginTop: "-15px",
//   marginLeft: "20px",
// };
