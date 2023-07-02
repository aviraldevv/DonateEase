import React from "react";


function Card(props)
{
    const handleWhatsAppPay = () => {
        const stripeLink = "https://buy.stripe.com/test_14k8zE9C60G9al24gg";
        const message = `Hey, I want to make a payment. Here's the link: ${stripeLink}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/?text=${encodedMessage}`;
        window.open(whatsappLink);
      };
    
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
                        <button className="share" onClick={handleWhatsAppPay} >Share</button>
                        <button className="donate" onClick={() => window.location.href = "https://buy.stripe.com/test_14k8zE9C60G9al24gg"}>
                        Donate
                    </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;