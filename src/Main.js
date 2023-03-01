import React, {useReducer} from "react";
import { Route, Routes } from "react-router-dom";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import HomePage from "./HomePage";

function Main() {
    function updateTimes(availableTimes, action){
        return availableTimes;
    }

    function initializeTimes(){
        return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    }

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/booking" element={<BookingPage availableTimes={availableTimes}/>}></Route>
                <Route path="/confirmed" element={<ConfirmedBooking/>}></Route>
            </Routes >
        </>
    );
}



export default Main;