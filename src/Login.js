import React from 'react'
import { Button } from '@material-ui/core'
import "./Login.css"
import {auth, provider } from "./firebase"
function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).then(result =>
            console.log(result)).catch((error) =>
            alert(error.message)
            );
    };
    return (
        <div className="login">
            <div className="login_container">
                <img src="https://www.hr180.co.uk/wp-content/uploads/2017/07/WhatsApp-Logo-1.png"
                alt=""
                />
            <div className="login_text">
            <h1>Sign in to WhatsApp</h1>
                
            </div>
            <Button onClick={signIn}>
                Sign In with Google
            </Button>
            </div>
        </div>
    )
}

export default Login
