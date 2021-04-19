import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../components/auth/authenticationSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.user);
  return (
    <>
      <header style={{ background: "rgb(255, 255, 255)" }}>
        <nav className="navbar navbar-default">
          <div
            className="container flex-row-nowrap"
            style={{ justifyContent: "space-between" }}
          >
            
            <div
              className="flex-row-nowrap"
              style={{ justifyContent: "flex-start", flex: "1 0 31px" }}
            >
              <div id="main-header-logo"></div>
              <div
                action="/"
                method=""
                id="blacasa-search-object-form"
                acceptCharset="UTF-8"
              >
                <div>
                  <div className="navbar-left hidden-xs">
                    <div className="navbar-form">
                      <div className="search-header">
                        <div className="form-item form-type-textfield form-item-key">
                          <input
                            placeholder="Tìm gia sư theo môn học và địa điểm"
                            className="form-control form-text"
                            type="text"
                            id="edit-key"
                            name="key"
                            size={60}
                            maxLength={128}
                            defaultValue=""
                          />
                        </div>
                        <button title="Tìm gia sư">
                          <i className="fa fa-search" />
                        </button>
                        <input
                          type="hidden"
                          name="form_build_id"
                          defaultValue="form-16YwIICXQMVYnPKYqBKYF9I0k1WSfVb9iay1NRsFebI"
                        />
                        <input
                          type="hidden"
                          name="form_id"
                          defaultValue="blacasa_search_object_form"
                        />
                        <div
                          className="form-actions form-wrapper"
                          id="edit-actions--3"
                        >
                          <input
                            className="button form-submit"
                            type="submit"
                            id="edit-submit--3"
                            name="op"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            
            <div
              className="flex-row-nowrap"
              id="bs-example-navbar-collapse-1"
              style={{ justifyContent: "flex-end", padding: "0px" }}
            >
              {!isLoggedIn ? (
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link
                      to="/login"
                      className="popup-modal link-login "
                      title="Đăng nhập"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                      style={{ border: "none" }}
                    >
                      Đăng nhập
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="popup-modal header-main-register link-register"
                      title="Đăng ký"
                    >
                      Đăng ký
                    </Link>
                  </li>
                </ul>
              ) : (
                // {/* <div className="call-now-header hidden-xs">
                //   <div className="call-number">
                //     <div className="call-number-icon">
                //       <i
                //         className="fa fa-phone"
                //         style={{ color: "rgb(255, 255, 255)", fontSize: "36px" }}
                //       />
                //     </div>
                //     <div className="call-info">
                //       <p style={{ fontSize: "18px" }}>
                //         <a href="tel:1900636342">1900 63 63 42</a>
                //       </p>
                //       <p style={{ fontSize: "10px", textTransform: "uppercase" }}>
                //         Tư vấn miễn phí
                //       </p>
                //     </div>
                //   </div>
                // </div> */}

                <ul className="nav navbar-nav navbar-right">
                  {/*Case 1: Đã đăng nhập*/}
                  {/*user's info; avatar+name*/}
                  <li className="avatar hidden-xs flex-row-nowrap common-tooltip">
                    <a>{user.name}</a>
                  </li>
                  {/*end avatar and name*/}
                  {/*user's info; message &  notification*/}
                  <li className="dropdown notification message-info common-tooltip">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-type="view_message"
                    >
                      <i
                        className="fa fa-comments header-main-icon"
                        aria-hidden="true"
                      />
                      <div className="count" />
                    </a>
                  </li>
                  {/*Notifications*/}
                  <li className="dropdown notification notification-info common-tooltip">
                    {" "}
                    {/* has-number*/}
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-type="view_notification"
                    >
                      <i
                        className="fa fa-bell header-main-icon"
                        aria-hidden="true"
                      />
                      <div className="count" />
                    </a>
                  </li>
                  {/*end: đã đăng nhập*/}
                  {/*Case 2: not login, register*/}
                  {/*Menu on header*/}

                  <li>
                    <a
                      href="/home"
                      onClick={() => dispatch(logout())}
                      className="popup-modal header-main-register link-register"
                    >
                      Đăng xuất
                    </a>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>

        <nav id="navbar-scroll">
          <div className="container" style={{ height: "100%" }}>
            <div className="row">
              <ul>
                <li>
                  <Link to="/addpost">
                    <i className="fa fa-plus-circle" aria-hidden="true" />
                    <span>Đăng yêu cầu</span>
                  </Link>
                </li>
                <li>
                  <Link to="/listtutor">
                    <i className="fa fa-search" aria-hidden="true" />
                    <span>Tìm gia sư</span>
                  </Link>
                </li>
                <li>
                  <Link to="/listpost">
                    <i className="fa fa-book" aria-hidden="true" />
                    <span>Lớp mới</span>
                  </Link>
                </li>
                <li>
                  <Link to="/updatetutor">
                    <i className="fa fa-book" aria-hidden="true" />
                    <span>Profile</span>
                  </Link>
                </li>
                {/* <li>
                  <a href="">
                    <i className="fa fa-graduation-cap" aria-hidden="true" />
                    <span>Trở thành gia sư</span>
                  </a>
                </li>
                <li className="hidden-max413">
                  <a href="/invite-friend">
                    <i className="fa fa-money" aria-hidden="true" />
                    <span>Kiếm tiền cùng Blacasa</span>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
