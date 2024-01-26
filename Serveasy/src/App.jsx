import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";

function App() {
  return (
    <>
      <Navbar />
      <Signup />
      <SignIn />
      <Footer />
    </>
  );
}

export default App;

//route index to tell it's starting page
