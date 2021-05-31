import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../components/auth/authenticationSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const role = localStorage.getItem("role");
  const link_img = "/assets/img/avatar.jpg";

  return (
    <>
      <header className="header">
        <div className="grid">
          <nav className="header__navbar">
            <ul className="header__navbar-list">
              <li className="header__navbar-item header__navbar-item--separate">
                Ứng dụng kết nối gia sư Hoàng Long Nhật
              </li>
              <li className="header__navbar-item">
                <span className="header__navbar-item-title">Kết nối</span>
                <a href="#" className="header__navbar-icon-link">
                  <i className="header__navbar-icon fab fa-facebook" />
                </a>
                <a href="#" className="header__navbar-icon-link">
                  <i className="header__navbar-icon fab fa-instagram" />
                </a>
              </li>
            </ul>
            <ul className="header__navbar-list">
              <li className="header__navbar-item display-notify">
                <a href="#" className="header__navbar-item-link">
                  <i className="header__navbar-icon fas fa-bell" />
                  Thông báo
                </a>
                {/* <div className="header__notify">
                  <header className="header__notify-header">
                    <h3>Thông báo mới nhận</h3>
                  </header>
                  <ul className="header__notify-list">
                    <li className="header__notify-item header__notify-item--viewed">
                      <a href className="header__notify-link">
                        <img
                          src="https://cf.shopee.vn/file/91b9efe11c0aa54b4880328d4413a939_tn"
                          alt=""
                          className="header__notify-img"
                        />
                        <div className="header__notify-info">
                          <span className="header__notify-name">
                            Mỹ phẩm chính hãng
                          </span>
                          <span className="header__notify-description">
                            Mô tả sản phầm chính hãng
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="header__notify-item">
                      <a href className="header__notify-link">
                        <img
                          src="https://cf.shopee.vn/file/91b9efe11c0aa54b4880328d4413a939_tn"
                          alt=""
                          className="header__notify-img"
                        />
                        <div className="header__notify-info">
                          <span className="header__notify-name">
                            Mỹ phẩm chính hãng
                          </span>
                          <span className="header__notify-description">
                            Mô tả sản phầm chính hãng
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="header__notify-item">
                      <a href className="header__notify-link">
                        <img
                          src="https://cf.shopee.vn/file/91b9efe11c0aa54b4880328d4413a939_tn"
                          alt=""
                          className="header__notify-img"
                        />
                        <div className="header__notify-info">
                          <span className="header__notify-name">
                            Mỹ phẩm chính hãng
                          </span>
                          <span className="header__notify-description">
                            Mô tả sản phầm chính hãng
                          </span>
                        </div>
                      </a>
                    </li>
                    <li className="header__notify-item">
                      <a href className="header__notify-link">
                        <img
                          src="https://cf.shopee.vn/file/91b9efe11c0aa54b4880328d4413a939_tn"
                          alt=""
                          className="header__notify-img"
                        />
                        <div className="header__notify-info">
                          <span className="header__notify-name">
                            Mỹ phẩm chính hãng
                          </span>
                          <span className="header__notify-description">
                            Mô tả sản phầm chính hãng
                          </span>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <footer className="header__notify-footer">
                    <a href className="header__notify-footer-btn">
                      Xem tất cả
                    </a>
                  </footer>
                </div> */}
              </li>
              <li className="header__navbar-item">
                <a href="#" className="header__navbar-item-link">
                  <i className="header__navbar-icon far fa-question-circle" />
                  Trợ giúp
                </a>
              </li>
              {!isLoggedIn ? (
                <>
                  <li class="header__navbar-item  header__navbar-item--separate">
                    <Link
                      to="/register"
                      className="header__navbar-item-link header__navbar-item--strong"
                    >
                      Đăng kí
                    </Link>
                  </li>
                  <li class="header__navbar-item header__navbar-item--strong">
                    <Link
                      to="/login"
                      className="header__navbar-item-link header__navbar-item--strong"
                    >
                      Đăng nhập
                    </Link>
                  </li>
                </>
              ) : (
                <li className="header__navbar-item header__navbar-user">
                  {role === "ROLE_STUDENT" ? (
                    <img
                      src={link_img}
                      alt="vv"
                      className="header__navbar-user-img"
                    />
                  ) : (
                    <img
                      src={user.avatar ? user.avatar : link_img}
                      alt=""
                      className="header__navbar-user-img"
                    />
                  )}

                  <span className="header__navbar-user-name">{user.name}</span>
                  <ul className="header__navbar-user-menu">
                    {role === "ROLE_TUTOR" ? (
                      <li className="header__navbar-user-menu-item">
                        <Link to="/updatetutor">Tài khoản</Link>
                      </li>
                    ) : (
                      <li className="header__navbar-user-menu-item">
                        <Link to="/updatestudent">Tài khoản</Link>
                      </li>
                    )}
                    <li className="header__navbar-user-menu-item">
                      <Link to="/updatepass">Đổi mật khẩu</Link>
                    </li>
                    {/* <li className="header__navbar-user-menu-item">
                      <a href="#">Địa chỉ của tôi</a>
                    </li>
                    <li className="header__navbar-user-menu-item">
                      <a href="#">Đơn mua</a>
                    </li> */}
                    <li className="header__navbar-user-menu-item">
                      <a href="/home" onClick={() => dispatch(logout())}>
                        Đăng xuất
                      </a>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </nav>
          <div className="header-with-search">
            <div className="header__logo">
              <img
                src="./assets/img/logo4.PNG"
                alt=""
                className="header__logo-img"
              />
            </div>
            {role === "ROLE_STUDENT" ? (
              <div className="header__search">
                <ul className="header__search-list">
                  <li className="header__search-item">
                    <Link to="/listpostshare" className="header__search-link">
                      Lớp mới
                    </Link>
                  </li>
                  <li className="header__search-item">
                    <Link to="/listtutor" href className="header__search-link">
                      Tìm gia sư
                    </Link>
                  </li>

                  <li className="header__search-item header__search-drop">
                    <a href className="header__search-link">
                      Dành cho học sinh
                      <i className="fas fa-chevron-down" />
                    </a>
                    <ul className="header__search-menu">
                      <li className="header__search-menu-item">
                        <Link to="/updatestudent">
                          Cập nhật thông tin học sinh
                        </Link>
                      </li>
                      <li className="header__search-menu-item">
                        <Link to="/addpost">Đăng bài</Link>
                      </li>
                      <li className="header__search-menu-item">
                        <Link to="/listpost">Quản lí bài đăng</Link>
                      </li>
                      <li className="header__search-menu-item">
                        <Link to="/managesuggestion">
                          Danh sách đề nghị dạy
                        </Link>
                      </li>
                      <li className="header__search-menu-item">
                        <Link to="#">more</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="header__search-item">
                    <Link
                      to="/notifycation"
                      href
                      className="header__search-link"
                    >
                      Thông báo
                    </Link>
                  </li>
                </ul>
              </div>
            ) : role === "ROLE_TUTOR" ? (
              <div className="header__search">
                <ul className="header__search-list">
                  <li className="header__search-item">
                    <Link to="/listpostshare" className="header__search-link">
                      Lớp mới
                    </Link>
                  </li>
                  <li className="header__search-item">
                    <Link to="/listtutor" href className="header__search-link">
                      Tìm gia sư
                    </Link>
                  </li>

                  <li className="header__search-item header__search-drop">
                    <a href className="header__search-link">
                      Dành cho gia sư
                      <i className="fas fa-chevron-down" />
                    </a>
                    <ul className="header__search-menu">
                      <li className="header__search-menu-item">
                        <Link to="/updatetutor">Cập nhật thông tin gia sư</Link>
                      </li>
                      <li className="header__search-menu-item">
                        <Link to="/manageinvitation">Danh sách mời dạy</Link>
                      </li>
                      <li className="header__search-menu-item">
                        <Link to="#">more</Link>
                      </li>
                    </ul>
                  </li>

                  <li className="header__search-item">
                    <Link
                      to="/notifycation"
                      href
                      className="header__search-link"
                    >
                      Thông báo
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="header__search">
                <ul className="header__search-list">
                  <li className="header__search-item">
                    <Link to="/listpostshare" className="header__search-link">
                      Lớp mới
                    </Link>
                  </li>
                  <li className="header__search-item">
                    <Link to="/listtutor" href className="header__search-link">
                      Tìm gia sư
                    </Link>
                  </li>

                  <li className="header__search-item header__search-drop">
                    <a href className="header__search-link">
                      Dành cho gia sư
                      <i className="fas fa-chevron-down" />
                    </a>
                    <ul className="header__search-menu">
                      <li className="header__search-menu-item">
                        <Link>Cập nhật thông tin gia sư</Link>
                      </li>
                      <li className="header__search-menu-item">
                        <Link>Danh sách mời dạy</Link>
                      </li>
                      <li className="header__search-menu-item">
                        <Link to="#">more</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="header__search-item header__search-drop">
                    <a href className="header__search-link">
                      Dành cho học sinh
                      <i className="fas fa-chevron-down" />
                    </a>
                    <ul className="header__search-menu">
                      <li className="header__search-menu-item">
                        <Link>Cập nhật thông tin học sinh</Link>
                      </li>
                      <li className="header__search-menu-item">
                        <Link>Đăng bài</Link>
                      </li>
                      <li className="header__search-menu-item">
                        <Link>Quản lí bài đăng</Link>
                      </li>
                      <li className="header__search-menu-item">
                        <Link>Danh sách đề nghị dạy</Link>
                      </li>
                      <li className="header__search-menu-item">
                        <Link to="#">more</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="header__search-item">
                    <Link href className="header__search-link">
                      Thông báo
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            <div className="header__cart">
              {/* <i className="header__cart-icon fas fa-cart-plus" /> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
