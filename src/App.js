import React from 'react';
import Navbar from './components/navbar/Navbar.jsx'
import Login from './components/login/Login'
import Profile from './components/profile/Profile'
import Officeprofile from './components/officeProfile/Officeprofile'
import Salaryslip from './components/salaryslip/Salaryslip'
import Attendance from './components/Attendance/Attendance'
import Leaves from './components/Leaves/Leaves'
import WorkLogPage from './components/WorkLog/WorkLogPage'
import { RegistrationForm } from './components/addemployeeform/RegistrationForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
<Routes>
      <Route path='' element={<Login/>} />
      <Route path='/Attendance' element={<Attendance/>} />
      <Route path='/Leaves' element={<Leaves/>} />
      <Route path='/Profile' element={<Profile/>} />
      <Route path='/Officeprofile'element={<Officeprofile/>} />
      <Route path='/Salaryslip' element={<Salaryslip/>} />
      <Route path='/WorkLogPage' element={<WorkLogPage/>} />
      <Route path='/RegistrationForm' element={<RegistrationForm/>} />
  </Routes>
      </Router>
    </div>
  );
}

export default App;
