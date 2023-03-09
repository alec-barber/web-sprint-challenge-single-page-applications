import "./App.css"
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Form from "./Components/Form";
import Nav from "./Components/Nav";
import Food from "./Components/Food";
import Home from "./Components/Home";

const pizzaPreferencesBlank = {
  name: '',
  size: '',
  sauce: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  topping5: false,
  topping6: false,
  topping7: false,
  topping8: false,
  topping9: false,
  topping10: false,
  gluten: false,
  special: '',
}

const App = () => {
const [ pizzaPreferences, setPizzaPreferences ] = useState(pizzaPreferencesBlank)

const onChange = (e) => {
  const { name, value } = e.target

  setPizzaPreferences({...pizzaPreferences, [name]: value})
}

  return (
    <>
      <div className="header">
        <h1>Bloomtech Eats</h1>
        <Nav />
      </div>
      <Routes>
        <Route path="pizza" element={<Form onChange={onChange} pizzaPreferences={pizzaPreferences} />} />
        <Route path="/" element={<Home />} />
        <Route path="help" element={""} />
      </Routes>
    </>
  );
};
export default App;
