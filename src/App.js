import "./App.css"
import React from "react";
import Form from "./Components/Form";
import Nav from "./Components/Nav";
import Food from "./Components/Food";

const App = () => {
  return (
    <>
      <div className="header">
        <h1>Bloomtech Eats</h1>
        <Nav />
      </div>
      <div className="showcase">
        <h2>Your favorite food, delivered while coding</h2>
        <button>Pizza?</button>
      </div>
      <h3>Food delivery in Gotham City</h3>
      <div className="foodOptions">
        <Food />
        <Food />
        <Food />
        <Food />
      </div>
      <Form />
    </>
  );
};
export default App;
