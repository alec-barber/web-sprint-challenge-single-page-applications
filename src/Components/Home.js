import "./Home.css"
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Form from "./Form";
import Nav from "./Nav";
import Food from "./Food";

const Home = () => {
  return (
    <>
      <div className="showcase">
        <h2>Your favorite food, delivered while coding</h2>
        <Link to="form">Pizza?</Link>
      </div>
      <h3>Food delivery in Gotham City</h3>
      <div className="foodOptions">
        <Food />
        <Food />
        <Food />
        <Food />
        <Food />
      </div>
      <Routes>
        <Route path="form" element={<Form />} />
      </Routes>
    </>
  );
};
export default Home;
