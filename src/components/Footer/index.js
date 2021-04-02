import React from "react";

const Footer = (props) => {
  return (
    <>
      <div className="footer-blog">
        
  
        <div className="footer-blog-copyright">
          <div className="container">
            <div
              className="row"
              style={{ paddingTop: "20px" }}
            >
              <div className="col-md-7 col-sm-6 col-xs-12">
                <div className="copy-text">
                  <p>©  2021 Tổ chức giáo dục  Việt Nam</p>
                  <p>
                    Trụ sở: Kiệt 82/8 Nguyễn Lương Bằng-Liên Chiểu-Đà nẵng
                    <br />
                    {/* Giấy phép ĐKKD số 0107721396 do Sở kế hoạch và đầu tư thành
                    phố Hà Nội cấp ngày 09/02/2017
                    <br /> */}
                  </p>
                </div>
              </div>
              <div className="col-md-3 col-sm-3 col-xs-6">
                <ul>
                  <li>
                    <p>
                      <b>Copyright By Hoàng Long Nhật</b>
                    </p>
                  </li>
                  
                  <li>
                    <a
                      href="http://online.gov.vn/HomePage/WebsiteDisplay.aspx?DocId=41413"
                      rel="nofollow"
                      target="_blank"
                    >
                      SGD 2018-0040/ĐK/TMĐT
                    </a>
                  </li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      
      </div>
    </>
  );
};

export default Footer;
