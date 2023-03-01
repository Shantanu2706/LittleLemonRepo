import React from "react";

function Header() {
    return (
        <header>
            <div className="leftDiv">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>We are a family owned Mediterranean restaurant focused on traditional recipes served with modern twist.</p>
                <button type="button">Reserve a Table</button>
            </div>
            <div className="rightDiv">
                <img src={require('./images/restaurantfood.jpg')} className="headerImage" alt="Restaurant Food" width="230" height="270" />
            </div>




        </header>
    );
}

export default Header;