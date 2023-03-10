import "./Home.css"
import React from "react";
import { Link } from "react-router-dom";
import Food from "./Food";

const Home = () => {
  return (
    <>
      <div className="showcase">
        <h2>Your favorite food, delivered while coding</h2>
        <Link to="pizza" id="order-pizza">Pizza?</Link>
      </div>
      <h3>Food delivery in Gotham City</h3>
      <div className="foodOptions">
        <Food />
        <Food />
        <Food />
        <Food />
        <Food />
      </div>
    </>
  );
};
export default Home;
