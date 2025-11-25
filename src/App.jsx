import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from './Components/MainPage/MainPage.jsx';
import About from './Components/About/About.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import Validator from "./Components/validator/validator.jsx";

import { lenis } from './lenis';


function App() {
  React.useEffect(() => {
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
      <Route path="/validator" element={<Validator/>} />
    </Routes>
  );
}

// Aquí React monta la app completa en el DOM.
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


//This is the page where all the rest of the pages are loaded dinamically