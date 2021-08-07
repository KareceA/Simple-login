import React from "react";
import "../css/Login.css"

function Login(params) {
    return(
        <form action="Login.jsx" method = "post">
            <div className="username">
                <i id="user-icon" class="fas fa-user"></i>   
                <input type="text" placeholder="Enter Username" className="uname" required />
            </div>
            <div className="password">
                <i id="psw-icon" class="fas fa-lock"></i>
                <input type="password" placeholder="Enter Password" className="psw" required></input>
            </div>
            <button type="button" className="btn btn-danger" id="login-button" > Login
            </button>
        </form>
    )
}

export default Login;