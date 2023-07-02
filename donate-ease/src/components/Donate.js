import React from "react";
import Card from "./Card";
import details from "./details";



function Donate(){

    return (
    <>
        <h1 className="main-heading">Trending FundRaisers</h1>
        <div className="Cards">
            {details.map((item)=>{
                return <Card 
                key={item.key}
                src={item.src}
                alt={item.alt}
                heading={item.heading}
                personname={item.personName}
                funddetails={item.fundDetails}
                />
            })}
            {/* <Card/>
            <Card/>
            <Card/> */}
        </div>

        <section className="donate-relative">
            <h1 className="main-heading">Donate Someone You Know!</h1>

            <div className="form">
                <div className="search">
                    <input type="text" placeholder="Search user.."/>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <input type="text" placeholder="Selected User"readOnly/>
                <div className="details">
                    <input type="fName" placeholder="First Name" />
                    <input type="lName" placeholder="Last Name" />
                </div>
                <div className="details">
                    <input type="email" placeholder="Email Id" />
                    <input type="mobile" placeholder="Mobile Number" />
                </div>
                <div className="details">
                    <input type="State" placeholder="State" />
                    <input type="Country" placeholder="Country"/>
                </div>

                <div className="payment-options">
                    <div className="container1">
                    <a href="https://buy.stripe.com/test_14k8zE9C60G9al24gg" target="_blank" rel="noopener noreferrer" className="make-payment">
                    Make Payment
                    </a>
                    </div>
                    <div className="container2">
                        <button className="whatsapp">
                            <div className="align-container2">
                                <img src="./whatsapp.png" alt="" />
                                <span>Whatsapp and pay</span>
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