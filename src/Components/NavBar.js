import React from "react";
import '../Styles/NavBar.css';

function NavBar() {

    return (
        <>
        <div className="navbar-container" >
        <h1 className="title">City Pizza Review</h1>
        <div className="dropdown">
            <button>Menu</button>
            <div className="dropdown-options">
                <a href="/">Home</a>
                <a href='/city'>City</a>
            </div>
        </div>
        </div>
        </>
        
    )
}

export default NavBar;

