import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
const Login = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="login_section">
      <div className="cercle"></div>
      <div className="cercle2"></div>

      <div className="login">
        <div>
          <h3> navbar</h3>
        </div>
        <div className="login_container">
          <div className="login_container_title">
            <p>Login</p>
            <small>Hi, Welcome back 🤗</small>
          </div>

          <div className="login_container_googleBtn">
            <FcGoogle />
            <p>Login with Google</p>
          </div>
          <div className="login_container_or">
            <small> or lgoin with Emails</small>
          </div>
          <form className="login_container_form" autocomplete="off">
            <div className="login_container_form_rap">
              <label>Email</label>
              <input name="email" type="email" placeholder="mack**@gmail.com" />
            </div>
            <div className="login_container_form_rap">
              <label>Password</label>
              <input
                name="password"
                type={showPass ? "text" : "password"}
                placeholder="Entar your password"
                autoComplete="new"
                autocomplete="new-password"
              />
              <div className="i_btn" onClick={() => setShowPass(!showPass)}>
                {/* */}
                {showPass ? <AiFillEye /> : <AiFillEyeInvisible />}
              </div>
            </div>
            <div className="login_container_rmFor">
              <div className="checkbox">
                <input type="checkbox" id="checkbox_id" />
                <label for="checkbox_id">Remember Me</label>
              </div>
              <div className="forget">
                <a href="">
                  <small>Forgot Password?</small>
                </a>
              </div>
            </div>
            <div className="login_container_form_btn">
              <button> Login</button>
            </div>
          </form>
          <div className="login_container_reg">
            <p>
              Not registered yet?{" "}
              <span>
                <a href="">Create an account</a> <BsArrowUpRight />
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
