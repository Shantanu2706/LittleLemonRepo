import React from "react";
function Footer() {
    return (
        <footer>
            <img src={require('./images/restaurant chef B.jpg')} alt="Image" width="170" height="200"/>
            <ul>
                <li><h5>Doormat Navigation</h5></li>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Menu</a></li>
                <li><a href="">Reservations</a></li>
                <li><a href="">Order Online</a></li>
                <li><a href="">Login</a></li>
            </ul>
            <ul>
                <li><h5>Contact</h5></li>
                <li><a href="">Address</a></li>
                <li><a href="">Phone Number</a></li>
                <li><a href="">Email</a></li>
            </ul>
            <ul>
                <li><h5>Social Media Links</h5></li>
                <li><a href="">Facebook</a></li>
                <li><a href="">Instagram</a></li>
                <li><a href="">Twitter</a></li>
                <li><a href="">LinkedIn</a></li>

            </ul>
        </footer>
    );
}

export default Footer;