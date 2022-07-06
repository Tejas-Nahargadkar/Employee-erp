import React from 'react';
import "./officeprofile.css"
function Officeprofile() {
  return (
    <div className="OfficeProfileContainer">
      <div className="WorkProfile">
          <h2>Office Profile</h2>

          <div className="jobTitle">
            <h3>JOB TITLE </h3>
            <p>Software Engineer Intern (Web Development)</p>
          </div>
          <div className="DateOfJoining">
            <h3>DATE OF JOINING </h3>
            <p>27/01/2022</p>
          </div>
          <div className="probation">
            <h3>PROBATION PERIOD </h3>
            <p>90 Days</p>
          </div>
          <div className="EarnedLeaves">
            <h3>EARNED LEAVES </h3>
            <p>3</p>
          </div>
          <div className="Salary">
            <h3>SALARY </h3>
            <p>Rs 50,000.00/-</p>
          </div>
        </div>
        <div className="table-container">
        <table className="Container">
          <thead>
            <tr>
              <th>SalarySlip</th>
              <th>Date</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SalarySLip.pdf</td>
              <td>07/02/2022</td>
              <td className="B1">
                <button class="button button2">View/Save</button>
              </td>
            </tr>
            <tr>
              <td>SalarySlip.pdf</td>
              <td>27/01/2022</td>
              <td className="B2">
                <button class="button button2">Save</button>
              </td>
            </tr>
            <tr>
              <td>SalarySlip.pdf</td>
              <td>27/12/2021</td>
              <td className="B3">
                <button class="button button2">Save</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Officeprofile;