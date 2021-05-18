import React from "react";
import "../Styles/Login.css";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";

const Login = () => {
  const responseFacebook = (response) => {
    console.log("login", response);
  };
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <div className="social-links">
        <div className=" socials">
          <div className="socials-btn">
            <FacebookLogin
              appId="" //removed for privacy policy
              fields="name,email,picture"
              callback={responseFacebook}
              className="btn-social facebook"
            />
          </div>
          <h5>or</h5>
          <div className="socials-btn">
            <GoogleLogin
              clientId="705848085662-ellccrfh2al70hjnapj4av7fq7831cpe.apps.googleusercontent.com"
              buttonText="LOGIN WITH GOOGLE"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              className="btn-social"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
