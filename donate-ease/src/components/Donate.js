import React from "react";
import Card from "./Card";
import details from "./details";

function Donate() {
  const handleWhatsAppPay = () => {
    const stripeLink = "https://buy.stripe.com/test_14k8zE9C60G9al24gg";
    const message = `Hey, I want to make a payment. Here's the link: ${stripeLink}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappLink);
  };

  return (
    <>
      <h1 className="main-heading">Trending FundRaisers</h1>
      <div className="Cards">
        {details.map((item) => (
          <Card
            key={item.key}
            src={item.src}
            alt={item.alt}
            heading={item.heading}
            personname={item.personName}
            funddetails={item.fundDetails}
          />
        ))}
      </div>

      <section className="donate-relative">
        <h1 className="main-heading">Donate Someone You Know!</h1>

        <div className="form">
          <div className="search">
            <input type="text" placeholder="Search user.." />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <input type="text" placeholder="Selected User" readOnly />
          <div className="details">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="details">
            <input type="email" placeholder="Email Id" />
            <input type="tel" placeholder="Mobile Number" />
          </div>
          <div className="details">
            <input type="text" placeholder="State" />
            <input type="text" placeholder="Country" />
          </div>

          <div className="payment-options">
            <div className="container1">
              <a
                href="https://buy.stripe.com/test_14k8zE9C60G9al24gg"
                target="_blank"
                rel="noopener noreferrer"
                className="make-payment"
              >
                Make Payment
              </a>
            </div>
            <div className="container2">
              <button className="whatsapp" onClick={handleWhatsAppPay}>
                <div className="align-container2">
                  <img src="./whatsapp.png" alt="" />
                  <span>Whatsapp and Pay</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Donate;
