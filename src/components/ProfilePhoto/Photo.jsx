import React from "react";
import User from './User.png'
import "./photo.css";
const Photo = () => {
  return (
    <div className="ProfilePhotoContainer">
      <div class="profile-pic">
        <label class="-label" for="file">
          <span class="glyphicon glyphicon-camera"></span>
          <span>Change Image</span>
        </label>
        <input id="file" type="file" onchange="loadFile(event)" />
        <img src={User} alt="" />
      </div>
    </div>
  );
};
export default Photo;
