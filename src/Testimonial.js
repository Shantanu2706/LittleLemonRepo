import React from "react";

function Testimonial(props){
    return (
        <div className="testimonial">
            <p className="rating">{props.rating} stars</p>
            <img src={props.url} alt={props.name} width="100" height="100"/>
            <p className="name">{props.name}</p>
            <p className="review">{props.review}</p>
        </div>
    );
}

export default Testimonial;