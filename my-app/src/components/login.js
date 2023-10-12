import React from "react";
import { BsGithub, BsDiscord } from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin,AiFillApple } from 'react-icons/ai';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleLoginSuccess = () => {
        navigate('/dashboard');
    };

    return(
        <div className="Login-signUp" style={{backgroundColor:'#F8FAFF'}}>
            <div className="container-fluid">
                <div className="row" style={{height:'707px'}}>
                    <div className="col-md-5 login-left" style={{color:'white',fontSize:'24px'}}>
                        <div className="logo" style={{padding:'30px'}}>
                            <b>LOGO</b>
                        </div>

                        <div className="Title-name" style={{display:"grid",placeItems:'center',fontSize:'62px',fontWeight:'bold',paddingTop:'90px',paddingBottom:'90px'}}>
                            Board.
                        </div>

                        <div className="contact-profiles" style={{paddingTop:'90px'}}>
                            <div className="icons">
                                <BsGithub />
                            </div>
                            <div className="icons">
                                <AiFillTwitterCircle />
                            </div>
                            <div className="icons">
                                <AiFillLinkedin />
                            </div>
                            <div className="icons">
                                <BsDiscord />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-7" style={{display:'grid',placeItems:'center'}}>
                        <div className="login-form">
                            <div className="form-title" style={{fontWeight:'bold',fontSize:'36px'}}>
                                Sign In
                            </div>
                            <div className="form-sub-title" style={{fontWeight:'400'}}>
                                Sign in to your account
                            </div>
                            <div className="login-options" style={{paddingBottom: '20px',paddingTop:'10px'}}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <GoogleLogin
                                            onSuccess={handleLoginSuccess}
                                            onError={() => {
                                            console.log('Login Failed');
                                            }}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="apple-login" style={{color:'grey',backgroundColor:'white', borderRadius:'20px',padding:'5px'}}>
                                            <AiFillApple style={{fontSize:'25px'}}/> Signin with Apple
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-page" style={{padding:'30px',backgroundColor:'white',borderRadius:'20px'}}>
                                <form>
                                    <label className="form-label" style={{fontWeight:'400'}}>Email address</label>
                                    <input type="email" placeholder="Enter mail" className="form-control" style={{backgroundColor:'#EAEAEA'}}/>
                                    <br></br>
                                    <label className="form-label" style={{fontWeight:'400'}}>Password</label>
                                    <input type="password" placeholder="Enter Password" className="form-control" style={{backgroundColor:'#EAEAEA'}}/>
                                    <div className="forgot-password" style={{color:'#346BD4'}}>
                                        Forgot Password?
                                    </div>
                                    <div className="login-button" style={{paddingTop:'20px'}}>
                                        <button className="btn btn-primary" style={{width:'100%',backgroundColor:'#2F80ED'}}>Sign In</button>
                                    </div>
                                </form>
                            </div>

                            <div className="account-register" style={{fontSize:'15px',color:'grey',textAlign:'center'}}>
                                Don't have an account? <a href="#" style={{color:'blue',textDecoration:'none'}}>Register here</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;