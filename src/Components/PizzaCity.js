import React from "react";
import '../Styles/PizzaCity.css';
import StarRating from "./StarRating";
import { useState } from "react";

function PizzaCity() {

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [value, setValue] = useState(2.5);

    const submitRating = (event) => {
        event.preventDefault()
        setIsSubmitted(true)
        console.log("submitted ", value, setIsSubmitted(true))
        
    }

    return (
        <>
        <div className="container">
            <form className='rating-form' onSubmit={submitRating}>
            <div className="cityname">
            <h2>Manchester</h2>
            </div>
            <div className="restaurant-info">
            <div className="restaurant-name">
                Nells NY Pizza
            </div>
            <div className="rating">
            {<StarRating
                rating={value}
                setValue={setValue}/>}
            </div>
            
            </div>
            <button 
                className="submit-btn" 
                type="submit">
                    Submit
                </button>
            </form>
            </div>
            </>
    )
}

export default PizzaCity;