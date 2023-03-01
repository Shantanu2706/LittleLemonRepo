import React from "react";
import BookingForm from "./BookingForm";

function BookingPage(props) {
    return (
        <section className="bookingPage">
        <h1>Book Your Table</h1>
        <BookingForm availableTimes={props.availableTimes}/>
        </section>
        
    );
}

export default BookingPage;