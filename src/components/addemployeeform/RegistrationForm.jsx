import React from 'react'
import calendar from './calendar.svg';
import coffe from './coffee.svg';
import dollarsign from './dollarsign.svg';
import key from './key.svg'
import user from './user.svg'
import mail from './mail.svg'
import usertwo from './usertwo.svg'
import hash from './hash.svg'
import './registrationform.css'
export const RegistrationForm = () => {
  return (
    <div className='RegistrationForm'>
    <form>
  <h2>Add Employee</h2>
  <div class="input-container">
    <img className='icon' src={user} alt="" />
    <input class="input-field" type="text" placeholder="Employee Number....." name="usrnm"/>
  </div>

  <div class="input-container">
    <img className='icon' src={ mail } alt="" />
    <input class="input-field" type="text" placeholder="Email" name="email"/>
  </div>
  <div class="input-container">
    <img className='icon' src={ usertwo } alt="" />
    <input class="input-field" type="text" placeholder="Employee Post" name="employee post"/>
  </div>
  <div class="input-container">
    <img className='icon' src={calendar} alt="" />
    <input class="input-field" type="date" placeholder="Date of Joining" name="DOJ" />
  </div>
  <div class="input-container">
  <img className='icon' src={hash} alt="" />
    <input class="input-field" type="number" placeholder="Probation Period" name="PP" />
  </div>
  <div class="input-container">
   <img className='icon' src={coffe} alt="" />
    <input class="input-field" type="number" placeholder="Earned Leaves" name="EL" />
  </div>
  <div class="input-container">
    <img className='icon' src={dollarsign} alt="" />
    <input class="input-field" type="text" placeholder="Salary" name="Salary" />
  </div>
  <div class="input-container">
    <img className='icon' src={key} alt="" />
    <input class="input-field" type="password" placeholder="Create Password" name="psw" />
  </div>
  <button type="submit" className="button button2">ADD</button>
</form>

    </div>
  )
}
