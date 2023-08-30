import React from "react";
import MainPage from "./Components/MainPage";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { Route, Routes } from "react-router-dom";
import Videos from "./Components/Videos";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </div>
  );
}

export default App;
