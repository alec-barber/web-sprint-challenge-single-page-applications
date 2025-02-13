import "./App.css"
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import * as yup from 'yup'
import axios from "axios";
import Form from "./Components/Form";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Confirmation from './Components/Confirmation'
import formSchema from "./Validation/Schema";

const pizzaPreferencesBlank = {
  name: '',
  size: '',
  sauce: '',
  extraCheese: false,
  sausage: false,
  pepperoni: false,
  bacon: false,
  ham: false,
  onion: false,
  mushroom: false,
  greenPeppers: false,
  spinach: false,
  olives: false,
  gluten: 0,
  special: '',
  quantity: 1
}

const App = () => {
const [ pizzaPreferences, setPizzaPreferences ] = useState(pizzaPreferencesBlank)
const [ buttonDisabled, setButtonDisabled ] = useState(true)
const [ errors, setErrors ] = useState(pizzaPreferencesBlank)
const [ orderList, setOrderList ] = useState([])

const onChange = (e) => {
  const { name, value, checked, type } = e.target
  const updatedInfo = type === 'checkbox' ? checked : value

  yup
  .reach(formSchema, name)
  .validate(value)
  .then(valid => {
    setErrors({
      ...errors, [name]: ""
    });
  })
  .catch(err => {
    setErrors({
      ...errors, [name]: err.errors[0]
    });
  });

  setPizzaPreferences({...pizzaPreferences, [name]: updatedInfo})
}

useEffect( () => {
  formSchema.isValid(pizzaPreferences).then( valid => {
    setButtonDisabled(!valid)
  })
}, [pizzaPreferences])

const onSubmit = (e) => {
  e.preventDefault()
  console.log("Submitted")
  axios.post('https://reqres.in/api/order', pizzaPreferences)
    .then( (res) => {  
      setOrderList([...orderList, res.data])
    })
    .catch( err => console.error(err))
    .finally(() => setPizzaPreferences(pizzaPreferencesBlank))
}

  return (
    <>
      <div className="header">
        <h1>Bloomtech Eats</h1>
        <Nav />
      </div>
      <Routes>
        <Route path="pizza" element={<Form onChange={onChange} onSubmit={onSubmit} pizzaPreferences={pizzaPreferences} buttonDisabled={buttonDisabled} errors={errors} />} />
        <Route path="/" element={<Home />} />
        <Route path="help" element={""} />
      </Routes>
    </>
  );
};
export default App;
