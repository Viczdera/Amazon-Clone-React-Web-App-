import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo_r from '../assets/logo_r.png'
import { auth } from '../firebase';
import './Login.css'

function Login() {
    //state
    const [e_mail, setEmail]= useState('');
    const [password, setPassword]= useState('');
    

    const signin=e=>{
        //to avoid refreshing
        e.preventDefault()
        //then firebaseeeeeee
        auth.signInWithEmailAndPassword(e_mail,password)
        .then((auth)=>{
            history.push('/')
        })
        .catch(error=>alert(error.message)) 
        
    }
    const signup=e=>{
        //to avoid refreshing
        e.preventDefault()
        auth.createUserWithEmailAndPassword(e_mail,password)
        .then((auth) =>{
            //sucessful?
            history.push('/')
            console.log(auth)
            alert("Account Created");

        })
        .catch(error =>alert(error.message))
    }
    const history= useHistory()

    return (
        <div className="login">
            <Link to="/">
                <img className="headerLogo" src={logo_r} />
            </Link>

            <div className="loginContainer">
            <h1>Sign In</h1>
            <form>
                <h5>E-Mail</h5>
                <input type="text" value={e_mail}
                onChange={e=>setEmail(e.target.value)} />
                  
                <h5>Password</h5>
                <input type="password" value={password} 
                onChange={e=>setPassword(e.target.value)} />

                <button className="loginSignInBtn"
                onClick={signin}>Sign In</button>
            </form>

            <p>By signing-in, you agree to DerAmazon's conditions of Use & Sale.
                Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>

            <p>Don't have an account?</p>
            <button className="loginSignUpBtn" 
            onClick={signup}>Sign Up</button>
            </div>
            
        </div>
       
    );
}

export default Login;