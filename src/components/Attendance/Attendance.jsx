import React from 'react';
import { Link } from 'react-router-dom';
import './Attendance.css';


export default function Attendance() {
  return (
    <div className="table-container">
      <table className="Container">
        <thead className="table-head">
          <tr>
            <th><h3>Attendance Status</h3></th>
            <th><Link to={"/Leaves"}>Leaves</Link></th>
            
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className='months'><b><input  type="Month" /></b></td>
            
          </tr>
          <tr className='TableRow' > 
            <td>Date</td>
            <td>Check In</td>
            <td>Check Out</td>
            <td>Total Work Hours</td>
            <td>Remarks</td>

          </tr>
          <tr>
            <td><input type="date" /></td>
            <td><input type="time" /></td>
            <td><input type="time" /></td>
            <td>_ Hours</td>
            <td>_</td>
          </tr>
          <tr>
          <td>02-07-2022</td>
            <td>10:00AM</td>
            <td>07:00PM</td>
            <td>9 Hours</td>
            <td>P</td>
            
          </tr>
          <tr>
          <td>02-05-2022</td>
            <td>10:00AM</td>
            <td>07:00PM</td>
            <td>9 Hours</td>
            <td>P</td>

          </tr>
          <tr>
          <td>02-04-2022</td>
            <td>10:00AM</td>
            <td>07:00PM</td>
            <td>9 Hours</td>
            <td>P</td>
          </tr>
          
          <tr>
          <td>02-03-2022</td>
            <td>10:00AM</td>
            <td>07:00PM</td>
            <td>9 Hours</td>
            <td>P</td>
          </tr>
        </tbody>
      </table>
    </div>

  );
}
