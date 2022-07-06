import React from 'react'
import './Leaves.css';


export default function Leaves() {
  return (
    <div className="table-container">
      <table className=" ghg flex-containers">
        <thead className="tablehead">
          <tr>
            <th><h1>Leave Status Summary</h1></th>
            <th><h4>February</h4></th>
              
          </tr>
        </thead>

        <tbody>
          
          <tr className='TableRows' > 
            <td>Leaves</td>
            <td>Raised</td>
            <td>Pending</td>
            <td>Approved</td>
            <td>Cancelled</td>
              <td>Requests</td>
          </tr>
          <tr>
            <td>Leave</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td><button>Raised Request</button></td>
          </tr>
          <tr>
          <td>Earned Leaves</td>
            <td></td>
            <td>0</td>
            <td></td>
            <td></td>
            <td><button>Raised Request</button></td>
          </tr>           
          
          
        </tbody>
      </table>
    </div>

  );
}
