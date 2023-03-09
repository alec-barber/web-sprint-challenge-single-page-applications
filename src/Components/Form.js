import './Form.css'
import React from "react";
import pizza from "./Pizza.jpg"

export default function Form (props) {


    return (
        <div className='form'>
            <h2>Pizza Builder</h2>
            <img src={pizza} alt='pizza' />
            <div>
                <h3>Create Your Own Pizza</h3>
                <form id="pizza-form">
                <div className="formContainer">
                        <h4>This order is for:</h4>
                        <input name="name" type="text" placeholder="Name" id="name-input"/>
                    </div>
                    <div className="formContainer">
                        <h4>Choose Size</h4>
                        <p>Required</p>
                        <label>
                            <select name="size" id="size-dropdown">
                                <option>-- choose a size --</option>
                                <option>Small</option>
                                <option>Medium</option>
                                <option>Large</option>
                                <option>X-Large</option>
                            </select>
                        </label>
                    </div>
                    <div className="formContainer">
                        <h4>Choice of Sauce</h4>
                        <p>Required</p>
                        <div className="innerContainer">
                            <label>Original Red
                                <input name="sauce" type="radio" />
                            </label>
                            <label>Garlic Ranch
                                <input name="sauce" type="radio" />
                            </label>
                            <label>BBQ
                                    <input name="sauce" type="radio" />
                            </label>
                            <label>Spinach Alfredo
                                    <input name="sauce" type="radio" />
                            </label>
                        </div>
                    </div>
                    <div className="formContainer">
                        <h4>Add Toppings</h4>
                        <p>Choose up to 5.</p>
                        <div className="innerContainer">
                            <label>Extra Cheese
                                <input name="topping1" type="checkbox" checked={false} />
                            </label>
                            <label>Sausage
                                <input name="topping2" type="checkbox" checked={false} />
                            </label>
                            <label>Pepperoni
                                <input name="topping3" type="checkbox" checked={false} />
                            </label>
                            <label>Bacon
                                <input name="topping4" type="checkbox" checked={false} />
                            </label>
                            <label>Ham
                                <input name="topping5" type="checkbox" checked={false} />
                            </label>
                            <label>Onion
                                <input name="topping6" type="checkbox" checked={false} />
                            </label>
                            <label>Mushroom
                                <input name="topping7" type="checkbox" checked={false} />
                            </label>
                            <label>Green Peppers
                                <input name="topping8" type="checkbox" checked={false} />
                            </label>
                            <label>Spinach
                                <input name="topping9" type="checkbox" checked={false} />
                            </label>
                            <label>Olives
                                <input name="topping10" type="checkbox" checked={false} />
                            </label>
                        </div>
                    </div>
                    <div className="formContainer"> 
                        <h4>Choice of Substitute</h4>
                        <label>Gluten-free Crust (+$1)
                            <input name="gluten" type="range" min="0" max="1" />
                        </label>
                    </div>
                    <div className="formContainer">
                        <h4>Special Instructions</h4>
                        <input name="special" type="text" id="special-text"/>
                    </div>
                    <div className="orderButtonContainer formContainer">
                        <label>Quantity:
                            <input name="quantity" type="number" placeholder="1" min="1" max="10" />
                        </label>
                        <div className='orderButton'>
                            <button id='order-button'>
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