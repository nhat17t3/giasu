import React from "react";

const Sidebar = (props) => {
  return (
    <>
      <div className="col-md-3 ">
        <div>
          <ul id="accordion" className="accordion">
            <li>
              <div className="link">
                <i className="fa fa-graduation-cap" aria-hidden="true" />
                Quản lý yêu cầu
              </div>
            </li>
            <li>
              <div className="link">
                <i className="fa fa-comments" />
                <a href="/hoang-long-nhat/messages">Hội thoại và tin nhắn</a>
              </div>
            </li>
            <li>
              <div className="link">
                <i className="fa fa-bell" aria-hidden="true" />
                Thông báo
              </div>
            </li>
            <li>
              <div className="link">
                <i className="fa fa-pencil-square" aria-hidden="true" />
                Bài viết
              </div>
            </li>
            <li>
              <div className="link">
                <i className="fa fa-heart-saved" />
                Đã lưu
              </div>
            </li>
            <li>
              <div className="link">
                <i className="fa fa-btc" />
                <a href="/hoang-long-nhat/bpoint">Quản lý BPoint</a>
              </div>
            </li>
            <li>
              <div className="link">
                <i className="fa fa-flag" aria-hidden="true" />
                Thông tin cá nhân
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
