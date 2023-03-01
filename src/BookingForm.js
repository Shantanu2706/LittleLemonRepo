import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function BookingForm(props) {
    const [resDate, setResDate] = useState("");
    const [resTime, setResTime] = useState("");
    const [noOfGuests, setNoOfGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const navigate = useNavigate();

    function handleSubmit(){
       
            navigate("/confirmed");
    
        
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={resDate} onChange={(e) => setResDate(e.target.value)} required />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={resTime} onChange={(e) => setResTime(e.target.value)}>
                {props.availableTimes.map((availableTime) => {
                    return <option>{availableTime}</option>
                })}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={noOfGuests} onChange={(e) => setNoOfGuests(e.target.value)} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <button type="submit">
                Make Your reservation
            </button>


        </form>
    );
}

export default BookingForm;