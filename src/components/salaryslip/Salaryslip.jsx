import React from "react";
import "./salartslip.css";
export default function Salaryslip() {
  return (
    <div className="BankContainer">
    <div className="BankDetails">
      <h2>BANK DETAILS</h2>

          <div className="BName">
            <h3>Name </h3>
            <p><input type="text" name="Name" id="id-1" placeholder="enter your name....." /></p>
          </div>
          <div className="BKName">
            <h3>Bank Name</h3>
            <p><input type="text" name="BankName" id="id-1" placeholder="enter your bank name....."/></p>
          </div>
          <div className="AccountNumber">
            <h3>Account Number</h3>
            <p><input type="text" name="Account Number" id="id-1" placeholder="Acc No....." /></p>
          </div>
          <div className="IFSC">
            <h3>IFSC Code </h3>
            <p><input type="text" name="IFSC" id="id-1" placeholder="IFSC CODE.."/></p>
          </div>
          <div className="BankAddress">
            <h3>Bank Address</h3>
            <p><textarea rows="8" cols="50" name="comment" form="Add">
                    address</textarea></p>
          </div>
          <div className="btn">
            <button className="button button2">Save</button>
          </div>
        </div>
        </div>
  );
}
