import React from "react";
import { Link, NavLink } from "react-router-dom";
import Layout from "../Layout";

const Main = (props) => {
  return (
    <>
      <Layout>
        <section className="home-banner banner-home">
          <div
            className="item home-banner-call-action"
            style={{
              background:
                'url("https://static.tapchitaichinh.vn/images/upload/vuminh/01092019/education1.jpg") 0% 0% / cover',
              height: "450px",
            }}
          >
            <div className="banner-caption">
              <h1 style={{ fontWeight: "bold", color: "rgb(0, 0, 0)" }}>
                Tìm gia sư phù hợp
              </h1>
              <p
                className="text-slogan"
                style={{
                  fontSize: "30px",
                  color: "rgb(6, 157, 134)",
                  margin: "20px 0px",
                  fontWeight: "bold",
                }}
              >
                Nhanh - Chủ động - Miễn phí
              </p>
              <p style={{ color: "rgb(0, 0, 0)", fontSize: "18px" }}>
                Hãy để chúng tôi giúp bạn tiến bộ mỗi ngày <br /> với nền tảng
                gia sư theo công nghệ 4.0
              </p>
              <p>
                <Link
                  to="/addpost"
                  className="btn-bla-big p-home-feature-btn-action"
                >
                  ĐĂNG YÊU CẦU TÌM GIA SƯ
                </Link>
              </p>
            </div>
          </div>
        </section>

        {/* <section className="p-home-section-feature">
          <div className="container">
            <div className="home-banner-statistic">
              <div
                className="container"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <a className="home-statistic-item col-md-4" href="/teacher">
                  <i className="fa fa-graduation-cap home-statistic-icon" />
                  <span className="home-statistic-text">
                    <strong>15,000+ Gia sư</strong>Khắp cả nước
                  </span>
                </a>
                <a
                  className="home-statistic-item home-statistic-item-student col-md-4"
                  href="#"
                >
                  <i className="fa fa-user-circle-o home-statistic-icon" />
                  <span className="home-statistic-text">
                    <strong>100,000+ Lượt truy cập</strong>Hàng quý
                  </span>
                </a>
                <a className="home-statistic-item col-md-4" href="class">
                  <i className="fa fa-handshake home-statistic-icon" />
                  <span className="home-statistic-text">
                    <strong>9500+ Yêu cầu tìm gia sư</strong>Tỷ lệ hài lòng 97%{" "}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section> */}
        <section className="p-home-section-call-action">
          <div className="container home-action-container">
            <div
              className="home-action-left"
              style={{ borderRight: "1px solid rgb(204, 204, 204)" }}
            >
              <h2>Tìm gia sư, tìm giáo viên</h2>
              <p>
                Thật đơn giản, bạn chỉ cần gửi yêu cầu học, các giáo viên sẽ gửi
                đề nghị dạy tới bạn cùng với mức học phí mong muốn. Bạn sẽ chủ
                động chọn lựa giáo viên phù hợp với bạn nhất.
              </p>
              <div>
                <a
                  className="btn-bla-big btn-yellowblacasa"
                  href="/tao-lop-hoc"
                  style={{ fontWeight: "bold" }}
                >
                  {" "}
                  Yêu cầu tìm gia sư
                </a>
              </div>
            </div>
            <div className="home-action-right">
              <h2>Trở thành gia sư</h2>
              <p>
                Nếu bạn có một khả năng nào đó, hãy đăng ký trở thành gia sư
                trên hệ thống , bạn sẽ được tiếp cận với hàng ngàn học viên và
                có cơ hội được truyền đạt kiến thức của mình.
              </p>
              <div>
                <a
                  className="btn-bla-big btn-yellowblacasa"
                  href="/dang-ky-gia-su"
                  style={{ fontWeight: "bold" }}
                >
                  {" "}
                  Trở thành gia sư
                </a>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Main;
