import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { SignIn } from "../../../api/authenticationAPI";
import Main from "../../Main";

Login.propTypes = {};
function Login(props) {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    const send = {
      username,
      password,
    };

    // alert(JSON.stringify(send));
    SignIn(dispatch, send);
  };
  return (
    <>
    <ToastContainer />
      <Main />
      <div className="modal">
        <div className="modal__overlay"></div>
        <div className="modal__body">
          {/* Login Form */}
          <form className="auth-form" onSubmit={login}>
            <div className="auth-form__container">
              <div className="auth-form__header">
                <h3 className="auth-form__heading">ĐĂNG NHẬP</h3>
                <Link to="/register" className="auth-form__switch-btn">
                  ĐĂNG KÍ
                </Link>
              </div>
              <div className="auth-form__form">
                <div className="auth-form__group">
                  <input
                    type="text"
                    placeholder="Tên đăng nhập"
                    className="auth-form__input"
                    name="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
                <div className="auth-form__group">
                  <input
                    type="password"
                    placeholder="Mật khẩu"
                    className="auth-form__input"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="auth-form__aside">
                <div className="auth-form__help">
                  <a
                    href="#"
                    className="auth-form__help-link auth-form__help-link-primary "
                  >
                    Quên mật khẩu
                  </a>
                  <span className="auth-form__help-link-seperate" />
                  <a href="#" className="auth-form__help-link">
                    Cần trợ giúp ?{" "}
                  </a>
                </div>
              </div>
              <div className="auth-form__controls">
                <Link
                  to="/home"
                  className="btn btn--normal auth-form__controls-back  "
                >
                  TRỞ LẠI
                </Link>
                <button className="btn btn--primary" type="submit">
                  ĐĂNG NHẬP
                </button>
              </div>
            </div>
            <div className="auth-form__socials">
              <a
                href="#"
                className="btn auth-form__socials--facebook  btn--size-s btn--with-icon"
              >
                <i className="auth-form__socials-icon fab fa-facebook-square" />
                <span className="auth-form__socials-label">
                  Kết nối với Facebook
                </span>
              </a>
              <a
                href="#"
                className="btn auth-form__socials--google btn--size-s btn--with-icon"
              >
                <i className="auth-form__socials-icon fab fa-google" />
                <span className="auth-form__socials-label">
                  Kết nối với Google
                </span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Login;
