import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
const GetFunds = () => {
    const history = useHistory();
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [aadharNumber, setAadharNumber] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [nationality, setNationality] = useState('');
    const [cause, setCause] = useState('');
    const [isPublic, setIsPublic] = useState('');
    const [isPrivate, setIsPrivate] = useState('');
    const [whatsappNumber, setWhatsappNumber] = useState('');
    const [bankAccountHolder, setBankAccountHolder] = useState('');
    const [bankAccountNumber, setBankAccountNumber] = useState('');
    const [ifscCode, setIfscCode] = useState('');
    const [branch, setBranch] = useState('');
    const [estimatedAmount, setEstimatedAmount] = useState('');


    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            username: username,
            email: email,
            phoneNumber: phoneNumber,
            aadharNumber: aadharNumber,
            address: address,
            state: state,
            nationality: nationality,
            cause: cause,
            isPrivate: isPrivate,
            isPublic: isPublic,
            whatsappNumber: whatsappNumber,
            bankAccountHolder: bankAccountHolder,
            bankAccountNumber: bankAccountNumber,
            ifscCode: ifscCode,
            branch: branch,
            estimatedAmount: estimatedAmount
        };

        const response = await fetch('http://localhost:3001/api/donateEase', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(formData);

    };

    return (
        <div className="getfunds">
            <div>
                <h1 className="main-heading">Why Get Funds?</h1>
            </div>
            <div className="card">
                <div className="align-card">
                    <form onSubmit={handleFormSubmit}>
                        <div className="nice-form-group">
                            <label>
                                <h2>Full Name</h2>
                            </label>
                            <input
                                type="text"
                                placeholder="Your name"
                                value={username}
                                onChange={(e) => setUserName(e.target.value)}
                            />
                        </div>

                        <div className="nice-form-group">
                            <label>
                                <h2>Email</h2>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="nice-form-group">
                            <label>
                                <h2>Phone Number</h2>
                            </label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="Your phone number"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        <div className="nice-form-group">
                            <label>
                                <h2>Aadhar Number</h2>
                            </label>
                            <input
                                type="text"
                                name="aadharNumber"
                                placeholder="Your Aadhar number"
                                value={aadharNumber}
                                onChange={(e) => setAadharNumber(e.target.value)}
                            />
                        </div>
                        <div className="nice-form-group">
                            <label>
                                <h2>Address</h2>
                            </label>
                            <textarea
                                type="text"
                                name="address"
                                placeholder="Your full address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                rows={2}
                            />
                        </div>
                        <div className="nice-form-group">
                            <label>
                                <h2>State</h2>
                            </label>
                            <input
                                type="text"
                                name="state"
                                placeholder="Enter state"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            />
                        </div>
                        <div className="nice-form-group">
                            <label>
                                <h2>Nationality</h2>
                            </label>
                            <input
                                type="text"
                                name="nationality"
                                placeholder="Enter nationality"
                                value={nationality}
                                onChange={(e) => setNationality(e.target.value)}
                            />
                        </div>
                        <div className="nice-form-group">
                            <label>
                                <h2>Enter Your Cause</h2>
                            </label>
                            <textarea
                                type="text"
                                name="cause"
                                placeholder="Start typing..."
                                value={cause}
                                onChange={(e) => setCause(e.target.value)}
                                rows={6}
                            />
                        </div>
                        <div className="nice-form-group">
                            <label>
                                <h2>Upload Proof</h2>
                            </label>
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
                        <div className="nice-form-group">
                            <label>
                                <h2>Select Option</h2>
                            </label>
                            <div className="option-select"></div>
                            <label className="check-container">
                                <p>Get payment via DonateEase platform</p>
                                <input
                                    type="checkbox"
                                    name="isPublic"
                                    checked={isPublic}
                                    onChange={(e) => setIsPublic(e.target.checked)}
                                />
                                <span className="checkmark"></span>
                            </label>
                            <label className="check-container">
                                <p>Get payment privately (Donor contacts via WhatsApp)</p>
                                <input
                                    type="checkbox"
                                    name="isPrivate"
                                    checked={isPrivate}
                                    onChange={(e) => setIsPrivate(e.target.checked)}
                                />
                                <span className="checkmark"></span>
                            </label>
                        </div>

                        {isPrivate && (
                            <div>
                                <div className="nice-form-group mobile-details">
                                    <label>
                                        <h2>Fill in the details</h2>
                                    </label>
                                    <input
                                        type="text"
                                        name="whatsappNumber"
                                        placeholder="Enter WhatsApp number"
                                        value={whatsappNumber}
                                        onChange={(e) => setWhatsappNumber(e.target.value)}
                                        style={{ marginBottom: '10px' }}
                                    />
                                    <label className="check-container">
                                        <p>Same as Phone number</p>
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        )}

                        {isPublic && (
                            <div>
                                <div className="nice-form-group bank-details">
                                    <label>
                                        <h2>Enter your bank account details</h2>
                                    </label>
                                    <input
                                        type="text"
                                        name="bankAccountHolder"
                                        placeholder="Name of Account Holder"
                                        value={bankAccountHolder}
                                        onChange={(e) => setBankAccountHolder(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        name="bankAccountNumber"
                                        placeholder="Account Number"
                                        value={bankAccountNumber}
                                        onChange={(e) => setBankAccountNumber(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        name="ifscCode"
                                        placeholder="IFSC Code"
                                        value={ifscCode}
                                        onChange={(e) => setIfscCode(e.target.value)}
                                    />
                                    <input
                                        type="text"
                                        name="branch"
                                        placeholder="Branch"
                                        value={branch}
                                        onChange={(e) => setBranch(e.target.value)}
                                    />
                                </div>
                            </div>
                        )}

                        <div className="nice-form-group">
                            <label>
                                <h2>Estimated amount</h2>
                            </label>
                            <input
                                type="text"
                                name="estimatedAmount"
                                placeholder="Enter estimated amount in Rs"
                                value={estimatedAmount}
                                onChange={(e) => setEstimatedAmount(e.target.value)}
                            />
                        </div>

                        <div className="nice-form-group">
                            <label>
                                <h2>Supporting Documents</h2>
                            </label>
                            <div className="proof">
                                <h3>Amount Proof</h3>
                                <button>Upload</button>
                            </div>
                            <div className="proof">
                                <h3>Pay Slip</h3>
                                <button>Upload</button>
                            </div>
                        </div>

                        <div className="nice-form-group">
                            <button className="fundraiser">Start a fundraiser for FREE</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GetFunds;
