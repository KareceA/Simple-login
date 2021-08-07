import React from "react";
import "../css/Profile.css"
import profile from "../img/korbalogo.jpeg";

function Profile(params) {
    return(
        <div className= "profile">
            <img src= {profile} alt= "user" className= "image"/>
            <h1 id="name">LOGIN</h1>
        </div>
    )
    
}

export default Profile;