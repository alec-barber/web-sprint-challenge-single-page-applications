import "./App.css"
import React from "react";
import Form from "./Components/Form";
import Nav from "./Components/Nav";

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
      <div className="foodOptions">
        <h3>Food delivery in Gotham City</h3>
      </div>
      <Form />
    </>
  );
};
export default App;
