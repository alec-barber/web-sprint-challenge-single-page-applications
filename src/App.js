import "./App.css"
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Form from "./Components/Form";
import Nav from "./Components/Nav";
import Food from "./Components/Food";
import Home from "./Components/Home";

const App = () => {
  return (
    <>
      <div className="header">
        <h1>Bloomtech Eats</h1>
        <Nav />
      </div>
      <Routes>
        <Route path="form" element={<Form />} />
        <Route path="/" element={<Home />} />
        <Route path="help" element={""} />
      </Routes>
    </>
  );
};
export default App;
