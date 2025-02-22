import { useState } from "react";
import "../styles/login.scss";
import image from "../assets/pablo-sign-in 1.png";
import { Logo } from "../assets/svg";
import { useNavigate } from "react-router-dom";


function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/users"); // Redirect to dashboard
  };

  return (
    <main className="login-page">


      {/* Lendsqr's Logo  */}
      <div className="login-logo">
        <Logo />
      </div>

      
      {/* Left Side - Image */}
      <div className="login-image-side">
        <img src={image} alt="illustration" className="login-image" />
      </div>

      {/* Right Side - Form */}
      <div className="login-form-side">
        <div className="login-form-container">
          <h2>Welcome!</h2>
          <p>Enter details to login.</p>

          <form action="#" onSubmit={handleLogin} className="login-form">
            <input type="email" placeholder="Email" />

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <span
                className="show-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "HIDE" : "SHOW"}
              </span>
            </div>

            <a href="#" className="forgot-password">
              FORGOT PASSWORD?
            </a>

            <button type="submit" className="login-btn">
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;
