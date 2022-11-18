import React from "react";
import { Link } from "react-router-dom";
import "../Styles/SelectPizzaCity.css"

function SelectPizzaCity () {

    return (
        <>
        <div className="description">
            <h2>Descrption</h2>
        </div> 
        <div className="container">
            <h2>Select a City</h2>
            <div className="citycard-placeholder">
                <Link className="city" to="/city">
                    Manchester
                    </Link>
            </div>
            </div>
            </>
    )
}

export default SelectPizzaCity;