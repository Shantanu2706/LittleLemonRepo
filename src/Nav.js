import React from "react";
import {Link} from "react-router-dom";

function Nav(){
    return(
        <nav>
            <ul>
                <li><img src={require('./images/Logo.jpg')} alt="Logo" width="150" height="41"/></li>
                <li><Link to="/" className="nav-item">Home</Link></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><Link to="/booking" className="nav-item">Reservations</Link></li>
                <li><a href="">Order Online</a></li>
                <li><a href="">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;