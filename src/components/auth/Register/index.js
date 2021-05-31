import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { SignUp } from "../../../api/authenticationAPI";
import Main from "../../Main";

Register.propTypes = {};

function Register(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const register = async (e) => {
    e.preventDefault();
    const send = {
      username,
      phonenumber,
      email,
      password,
      role: [role],
    };
    // alert(JSON.stringify(send));
    await SignUp(dispatch, send);
    setUsername("");
    setPhonenumber("");
    setEmail("");
    setPassword("");
    setRole("");
  };
  return (
    <>
      <ToastContainer />
      <Main />
      <div className="modal">
        <div className="modal__overlay"></div>
        <div className="modal__body">
          {/* Register form */}
          <form className="auth-form" onSubmit={register}>
            <div className="auth-form__container">
              <div className="auth-form__header">
                <h3 className="auth-form__heading">ĐĂNG KÍ</h3>
                <Link to="/login" className="auth-form__switch-btn">
                  ĐĂNG NHẬP
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
                    type="email"
                    placeholder="Email"
                    className="auth-form__input"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="auth-form__group">
                  <input
                    type="number"
                    placeholder="Số điện thoại"
                    className="auth-form__input"
                    name="phonenumber"
                    value={phonenumber}
                    onChange={(e) => setPhonenumber(e.target.value)}
                    required
                  />
                </div>
                <div className="auth-form__group">
                  <input
                    type="password"
                    placeholder="Mật khẩu của bạn"
                    className="auth-form__input"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {/* <div class="auth-form__group">
            <input type="password" placeholder="Nhập lại mật khẩu" class="auth-form__input">
          </div> */}
                <select
                  name="role"
                  id="role"
                  className="auth-form__input"
                  onChange={(e) => setRole(e.target.value)}
                  required
                >
                  <option value="" hidden>
                    Bạn là Gia sư hay học sinh
                  </option>
                  <option value="tutor">Gia sư</option>
                  <option value="student">Học sinh</option>
                </select>
              </div>
              <div className="auth-form__aside">
                <p className="auth-form__policy-text">
                  Bằng việc đăng kí, bạn đã đồng ý với chúng tôi về
                  <a href="#" className="auth-form__policy-link">
                    Điều khoản dịch vụ
                  </a>
                  và
                  <a href="#" className="auth-form__policy-link">
                    Chính sách bảo mật
                  </a>
                </p>
              </div>
              <div className="auth-form__controls">
                <Link
                  to="/home"
                  className="btn btn--normal auth-form__controls-back  "
                >
                  TRỞ LẠI
                </Link>
                <button className="btn btn--primary" type="submit">
                  ĐĂNG KÍ
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

export default Register;
