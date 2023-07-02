
import React from "react";

function Card(props)
{
    return (
        <>
            <div className="card">
                <div className="card-img">
                    <img src={props.src} alt={props.alt} />
                </div>
                <div className="card-description">
                    <p className="heading">{props.heading}</p>
                    <p className="person-name">{props.personname}</p>
                    <p className="fund-raised">{props.funddetails}</p>
                    <div className="buttons-card">
                        <button className="share">Share</button>
                        <button className="donate">Donate</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;