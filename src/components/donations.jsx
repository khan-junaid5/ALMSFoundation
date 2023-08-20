import { useState } from "react";
import details from "../data2";
import { FaChevronDown,FaChevronUp } from "react-icons/fa";

const Donations = () => {
    const [info, setInfo] = useState(0);
    const [accountDetails, setAccountDetails] = useState(false);
    const [upiDetails, setUpiDetails] = useState(false);
    const { name, bankName, account, ifsc, gPay, gPayName, aboutDonation } = details[info]

    return (<section>
        <div className="donations">
            <h3>Donate.</h3>

            <div className="section-donation">
                <div>
                    <p>{aboutDonation}</p>
                </div>
                <div className="donation-table">
                    <h5>Bank Details for Donations</h5>
                    <div className="account-table">
                        <div className="account-togglebtn">
                            <h6>Account details</h6>
                            <button type="button" onClick={() => setAccountDetails(!accountDetails)}>{accountDetails? <FaChevronUp/> : <FaChevronDown />} </button>
                        </div>
                        {accountDetails && <table>
                            <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>{name}</td>
                                </tr>
                                <tr>
                                    <td>Bank Name</td>
                                    <td>{bankName}</td>
                                </tr>
                                <tr>
                                    <td>Account Number</td>
                                    <td>{account}</td>
                                </tr>
                                <tr>
                                    <td>IFSC Code</td>
                                    <td>{ifsc}</td>
                                </tr>
                            </tbody>
                        </table>}
                    </div>
                    <div>
                        <div className="account-togglebtn">
                            <h6>UPI Payment</h6>
                            <button type="button" onClick={() => setUpiDetails(!upiDetails)}>{upiDetails? <FaChevronUp /> : <FaChevronDown />} </button>
                        </div>
                        {upiDetails && <div className="upi-table">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>UPI Number:</td>
                                        <td>{gPay}</td>
                                    </tr>
                                    <tr>
                                        <td>UPI id:</td>
                                        <td>{gPayName}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <img src="https://github.com/khan-junaid5/Images/blob/main/Qr%20code.jpg?raw=true"></img>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    </section>)
}

export default Donations;