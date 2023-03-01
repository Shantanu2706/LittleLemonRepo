import React from "react";

function Card(props) {
    return (
        <div className="card">

            <img src={props.url} alt="Image" width="100%" height="190" />
            <div className="cardBody">
                <h4 className="title">{props.title}</h4>
                <h4 className="price">{props.price}</h4>
                <p className="description">{props.description}</p>
                <h5 className="order">Order a delivery</h5>
            </div>


        </div>
    );
}

export default Card;