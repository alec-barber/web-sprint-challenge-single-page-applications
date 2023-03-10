import './Form.css'
import React from "react";
import pizza from "./Pizza.jpg"

export default function Form (props) {
const { onChange, pizzaPreferences, onSubmit, buttonDisabled, errors } = props

    return (
        <div className='form'>
            { errors.name.length > 0 && <p className="error">{errors.name}</p> }
            { errors.size.length > 0 && <p className="error">{errors.size}</p> }
            { errors.sauce.length > 0 && <p className="error">{errors.sauce}</p> }
            <h2>Pizza Builder</h2>
            <img src={pizza} alt='pizza' />
            <div>
                <h3>Create Your Own Pizza</h3>
                <form id="pizza-form" onSubmit={onSubmit}>
                    <div className="formContainer">
                        <h4>This order is for:</h4>
                        <input name="name" type="text" placeholder="Name" id="name-input" onChange={onChange} value={pizzaPreferences.name} />
                    </div>
                    <div className="formContainer">
                        <h4>Choose Size</h4>
                        <p>Required</p>
                        <label>
                            <select name="size" id="size-dropdown" onChange={onChange} value={pizzaPreferences.size}>
                                <option value="">-- choose a size --</option>
                                <option value="Small">Small</option>
                                <option value="Medium">Medium</option>
                                <option value="Large">Large</option>
                                <option value="X-Large">X-Large</option>
                            </select>
                        </label>
                    </div>
                    <div className="formContainer">
                        <h4>Choice of Sauce</h4>
                        <p>Required</p>
                        <div className="innerContainer">
                            <label>Original Red
                                <input name="sauce" type="radio" onChange={onChange} value={'Original Red'} checked={pizzaPreferences.sauce === "Original Red"} />
                            </label>
                            <label>Garlic Ranch
                                <input name="sauce" type="radio" onChange={onChange} value={'Garlic Ranch'} checked={pizzaPreferences.sauce === "Garlic Ranch"} />
                            </label>
                            <label>BBQ
                                <input name="sauce" type="radio" onChange={onChange} value={'BBQ'} checked={pizzaPreferences.sauce === "BBQ"} />
                            </label>
                            <label>Spinach Alfredo
                                <input name="sauce" type="radio" onChange={onChange} value={'Spinach Alfredo'} checked={pizzaPreferences.sauce === "Spinach Alfredo"} />
                            </label>
                        </div>
                    </div>
                    <div className="formContainer">
                        <h4>Add Toppings</h4>
                        <p>Choose up to 5.</p>
                        <div className="innerContainer">
                            <label>Extra Cheese
                                <input name="extraCheese" type="checkbox" onChange={onChange} checked={pizzaPreferences.extraCheese}  />
                            </label>
                            <label>Sausage
                                <input name="sausage" type="checkbox" onChange={onChange} checked={pizzaPreferences.sausage} />
                            </label>
                            <label>Pepperoni
                                <input name="pepperoni" type="checkbox" onChange={onChange} checked={pizzaPreferences.pepperoni} />
                            </label>
                            <label>Bacon
                                <input name="bacon" type="checkbox" onChange={onChange} checked={pizzaPreferences.bacon} />
                            </label>
                            <label>Ham
                                <input name="ham" type="checkbox" onChange={onChange} checked={pizzaPreferences.ham} />
                            </label>
                            <label>Onion
                                <input name="onion" type="checkbox" onChange={onChange} checked={pizzaPreferences.onion} />
                            </label>
                            <label>Mushroom
                                <input name="mushroom" type="checkbox" onChange={onChange} checked={pizzaPreferences.mushroom} />
                            </label>
                            <label>Green Peppers
                                <input name="greenPeppers" type="checkbox" onChange={onChange} checked={pizzaPreferences.greenPeppers} />
                            </label>
                            <label>Spinach
                                <input name="spinach" type="checkbox" onChange={onChange} checked={pizzaPreferences.spinach} />
                            </label>
                            <label>Olives
                                <input name="olives" type="checkbox" onChange={onChange} checked={pizzaPreferences.olives} />
                            </label>
                        </div>
                    </div>
                    <div className="formContainer"> 
                        <h4>Choice of Substitute</h4>
                        <label>Gluten-free Crust (+$1)
                            <input name="gluten" className="slider" type="range" min="0" max="1" onChange={onChange} value={pizzaPreferences.gluten} />
                        </label>
                    </div>
                    <div className="formContainer">
                        <h4>Special Instructions</h4>
                        <input name="special" type="text" id="special-text" onChange={onChange} value={pizzaPreferences.special} />
                    </div>
                    <div className="orderButtonContainer formContainer">
                        <label>Quantity:
                            <input name="quantity" type="number" placeholder="1" min="1" max="10" onChange={onChange} value={pizzaPreferences.quantity} />
                        </label>
                        <div className='orderButton'>
                            <button id='order-button' disabled={buttonDisabled}>
                                <h4>Add to Order</h4>
                                <p>$17.99</p>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}