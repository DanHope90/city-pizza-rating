import React from "react";
import Rating from '@mui/material/Rating';
import { useState } from "react";

function StarRating({value, setValue}) {

const handleChange = (event, newValue) => {
    
    setValue(newValue)
    console.log(newValue)
}

    return (
        <div>
            <Rating 
            name="simple-controlled"
            value={value}
            precision={0.5}
            onChange={handleChange}
            />
        </div>
    )
}

export default StarRating;