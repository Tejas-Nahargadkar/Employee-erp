import React from "react";
import "./profile.css";
function Profile() {
    return (
        <div className="pageContainer">
            <div className="profileContainer">
                <div className="PersonalProfile">
                    <h2>PersonalProfile</h2>

                    <div className="PersonalDetails">
                        <h3>PERSONAL DETAILS</h3>

                        <div className="row">
                            <label for="id1">First Name : </label>{" "}
                            <input id="id1" type="text" placeholder="Enter your First Name" />
                            <label for="id1">Last Name : </label>{" "}
                            <input id="id1" type="text" placeholder="Enter Last your Name" />
                        </div>
                        <div className="row">
                            <label for="id1">DOB : </label> <input id="id1" type="Date" />
                        </div>
                        <div className="row">
                            <div>
                            <label for="male">Male</label>
                            <input
                                type="radio"
                                name="gender"
                                id="male"
                                value="male"
                                checked
                            />

                            </div>
                            <div><label for="female">Female</label>
                            <input type="radio" name="gender" id="female" value="female" /></div>
                            
                        </div>
                        <div className="row">
                            <label for="id1">Mobile Number : </label>{" "}
                            <input
                                id="id1"
                                type="text"
                                placeholder="enter your number....."
                            />
                        </div>
                        <div className="row">
                            <label for="id1">Email : </label>{" "}
                            <input id="id1" type="text" placeholder="enter your email....." />
                        </div>
                    </div>
                    <div className="EducationalQualification">
                        <h3>EDUCATIONAL QUALIFICATION</h3>
                        <h4>HighSchool: </h4>
                        <div className="EduTable">
                            <table>
                                <tr>
                                    <th>Institution</th>
                                    <th>10th/12th</th>
                                    <th>Percentage</th>
                                </tr>
                                <tr>
                                    <td><input type='text' name=""></input></td>
                                    <td><input type='' name=""></input></td>
                                    <td><input type='' name=""></input></td>
                                </tr>
                                <tr>
                                    <td><input type='text' name=""></input></td>
                                    <td><input type='' name=""></input></td>
                                    <td><input type='' name=""></input></td>
                                </tr>
                            </table>
                        </div>

                        <h4>Degree Education:</h4>
                        <div className="HighSchoolTable">
                            <table>
                                <tr>
                                    <th>College/University</th>
                                    <th>UG / PG</th>
                                    <th>CGPA</th>
                                </tr>
                                <tr>
                                    <td><input type='text' name=""></input></td>
                                    <td><input type='' name=""></input></td>
                                    <td><input type='' name=""></input></td>
                                </tr>
                                <tr>
                                    <td><input type='' name=""></input></td>
                                    <td><input type='' name=""></input></td>
                                    <td><input type='' name=""></input></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="Address">
                        <h3>ADDRESS</h3>
                        <textarea id="id1" name="card" rows="4" cols="100">
                            enter your Permanent Residential Address.......
                        </textarea>
                    </div>
                    <div className="Identification">
                        <h3>IDENTIFICATION</h3>
                        <label htmlFor="id1">
                            {" "}
                            AdharCard:
                            <input
                                type="text"
                                name="Card"
                                id="id1"
                                placeholder="enter Adhar Number"
                            />
                        </label>
                        <label htmlFor="id1">
                            {" "}
                            PAN Card :
                            <input
                                type="text"
                                name="Card"
                                id="id1"
                                placeholder="enter PAN Number"
                            />
                        </label>
                    </div>
                    <div className="btn">
                        <button class="button button2">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
