import React from "react";
import MainPage from "./Components/MainPage";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { Route, Routes } from "react-router-dom";
import Videos from "./Components/Videos";
import { ToastContainer } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Model from "./Components/Model";
import { ContextProvider } from "./Context/Context";
import Slider from "./Components/Slider";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/model" element={<Model />} />
        </Routes>
        <ToastContainer
          pauseOnHover={false}
        />
      </ContextProvider>
    </div>
  );
}

export default App;
