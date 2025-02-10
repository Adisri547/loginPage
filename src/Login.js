import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; 
import img1 from './images/dark.jpg'

const Login = () => {
  const navigate = useNavigate(); // Hook to navigate

  const handleSignIn = (e) => {
    e.preventDefault(); // Prevent form submission reload
    navigate("/dashboard"); // Redirect to Dashboard
  };

  return (
    <div className="overlay">
      <div className="container">
        <div className="login-box">
          <h2>Welcome back</h2>
          <p>Welcome back! Please enter your details.</p>

          <form onSubmit={handleSignIn}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />

            <label>Password</label>
            <input type="password" placeholder="********" required />

            <div className="options">
              <div>
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember for 30 days</label>
              </div>
              <a href="#">Forgot password?</a>
            </div>

            <button type="submit" className="sign-in">Sign in</button>
            <button className="google-sign-in">
              <img src="https://www.svgrepo.com/show/303108/google-icon-logo.svg" alt="Google" />
              Sign in with Google
            </button>
          </form>

          <p className="signup">
            Don't have an account? <a href="#">Sign up for free</a>
          </p>
        </div>
        <div className="image-box">
          <img src={img1} alt="Library" />
          <div className="testimonial">
            <p>
              “We've been using Untitled to kick start every new project and can’t imagine working without it.”
            </p>
            <h3>Andi Lane</h3>
            <span>Founder, Catalog - Web Design Agency</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
