import React from "react";
import './Food.css'
import pizza from "./Pizza.jpg"

export default function Food (props) {


    return (
        <div className="container">
            <div>
                <img src={pizza} alt="McDonalds"/>
            </div>
            <div>
                <h4>McDonalds</h4>
                <div>
                    $ | American ・ Fast Food ・ Burgers
                </div>
                <div>
                    <div>20-30 min.</div><div>$3.99 Delivery Fee</div>
                </div>
            </div>
        </div>
    )
}