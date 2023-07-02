import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import './styles.css';
import "./responsive.css";
import { useState } from 'react';

const GetFunds = () => {
  const history = useHistory(); // Access the history object


  const [isprivate,setPrivate]=useState(false);
  const[ispublic,setPublic]=useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();

    history.push('/'); 
  }

  return (
    <div className="getfunds">
      <div>
        <h1 className='main-heading'>Why Get Funds?</h1>
      </div>
      <div className="card">
          <div className="align-card">
              <div class="nice-form-group">
                <label><h2>Full Name</h2></label>
                <input type="text" placeholder="Your name" value="" />
              </div>

              <div class="nice-form-group">
                <label><h2>Email</h2></label>
                <input type="email" placeholder="Your email" value="" />
              </div>

              <div class="nice-form-group">
                <label><h2>Phone Number</h2></label>
                <input type="tel" placeholder="Your phonenumber" value="" />
              </div>

              <div class="nice-form-group">
                <label><h2>Aadhar Number</h2></label>
                <input type="text" placeholder="Your aadhar number" value="" />
              </div>

              <div class="nice-form-group">
                <label><h2>Address</h2></label>
                <textarea type="text" placeholder="Your Full Address" value="" rows={2}/>
              </div>

              <div class="nice-form-group">
                <label><h2>State</h2></label>
                <input type="password" placeholder="Enter State" />
              </div>

              <div class="nice-form-group">
                <label><h2>Nationality</h2></label>
                <input type="search" placeholder="Enter Nationality" value="" />
              </div>

              <div class="nice-form-group">
                <label><h2>Enter Your Cause</h2></label>
                <textarea type="text" placeholder="Start typing..." value="" rows={6}/>
              </div>

              <div class="nice-form-group">
                <label><h2>Upload Proof</h2></label>
                <div className="proof">
                  <h3>Medical Certificate</h3>
                  <button>Upload</button>
                </div>
                <div className="proof">
                  <h3>Doctor's Prescription</h3>
                  <button>Upload</button>
                </div>
                <div className="proof">
                  <h3>Others</h3>
                  <button>Upload</button>
                </div>
              </div>

              <div class="nice-form-group">
                <label><h2>Select Option</h2></label>
                <div className="option-select">
                </div>
                <label class="check-container"><p>Get payment via DonateEase platform</p>
                <input type="checkbox" onClick={()=>{
                  setPublic((prevValue)=>{
                    return !prevValue;
                  })
                }}/>
                <span class="checkmark"></span>
                </label>

                <label class="check-container"><p>Get payment privately (Donor contacts via whatsapp)</p>
                  <input type="checkbox" onClick={()=>{
                    setPrivate((prevValue)=>{
                      return !prevValue;
                    })
                  }}/>
                  <span class="checkmark"></span>
                </label>
              </div>

              {isprivate?(
                <div>
                  <div class="nice-form-group mobile-details">
                  <label><h2>Fill in the details</h2></label>
                  <input style={{marginBottom:"10px"}} type="text" placeholder="Enter Whatsapp number" value="" />
                  <label class="check-container"><p>Same as Phone number</p>
                    <input type="checkbox"/>
                    <span class="checkmark"></span>
                  </label>
                  </div>
                </div>
              ):null}

              {ispublic?(
                <div>
                <div class="nice-form-group bank-details">
                  <label><h2>Enter your bank account details </h2></label>
                  <input type="text" placeholder="Name of Account Holder" value="" />
                  <input type="text" placeholder="Account Number" value="" />
                  <input type="text" placeholder="IFSC Code" value="" />
                  <input type="text" placeholder="Branch" value="" />
                  </div>
                </div>
              ):null}

              <div class="nice-form-group">
                <label><h2>Estimated amount</h2></label>
                <input type="text" placeholder="Enter estimated amount in Rs" />
              </div>

              <div class="nice-form-group">
                <label><h2>Supporting Documents</h2></label>
                <div className="proof">
                  <h3>Amount Proof</h3>
                  <button>Upload</button>
                </div>
                <div className="proof">
                  <h3>Pay Slip</h3>
                  <button>Upload</button>
                </div>
              </div>

              <div class="nice-form-group">
                <button className='fundraiser'>Start a fundraiser for FREE</button>
              </div>
          </div>
      </div>
    </div>
  );
};

export default GetFunds;
