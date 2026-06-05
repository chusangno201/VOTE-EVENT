import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <div className="logo-zone">CATIENNA</div>
          <span>Powered by <b>CATIENNA</b></span>
        </div>

        <p className="footer-desc">
          IZONE là nền tảng phân phối vé sự kiện, vật phẩm & quà lưu niệm được
          phát triển và vận hành bởi EVENTISTA, nhằm mang đến những trải nghiệm
          toàn diện cho người hâm mộ trong việc kết nối và tương tác với các
          nghệ sĩ giải trí.
        </p>

        <div className="footer-links">
          <a>Hướng dẫn thanh toán</a>
          <a>Chính sách quyền riêng tư</a>
          <a>Điều khoản sử dụng</a>
          <a>Điều kiện vận chuyển và giao nhận</a>
          <a>Chính sách đổi trả và hoàn tiền</a>
          <a>Câu hỏi thường gặp</a>
        </div>

        <div className="footer-info">
          <div>
            <h3>Liên hệ/Hỗ trợ</h3>
            <p><b>Email:</b> catiennacrown@gmail.com</p>
            <p><b>Hotline:</b> +84 7777-651-28</p>
            <p><b>Social</b></p>
            <div className="icons">
              <span>f</span><span>m</span><span>◎</span>
            </div>
          </div>

          <div>
            <h3>Chứng nhận bởi</h3>
            <img className="cert" src="/src/assets/cert.png" alt="" />
          </div>

          <div>
            <h3>Kết nối với chúng tôi</h3>
            <p>https://eventistax.com</p>
            <div className="icons">
              <span>f</span><span>♪</span><span>in</span>
            </div>
          </div>

          <div>
            <h3>Phương thức thanh toán</h3>
            <div className="payment">
              <span>Pay</span>
              <span>KHQR</span>
              <span>QRIS</span>
              <span>VNPAY</span>
              <span>Zalo</span>
              <span>VISA</span>
              <span>MC</span>
            </div>
          </div>
        </div>

        <h2 className="eventista">CATIENNA</h2>

        <div className="footer-address">
          <div>
            <h3>Việt Nam</h3>
            <ul>
              <li>151 LUỸ BÁN BÍCH, TÂN PHÚ, TPHCM </li>
              <li>CÔNG TY TNHH MTV CATIENNA. GPDKKD số 070203004943.</li>
            </ul>
          </div>

        </div>

        <p className="copyright">©2025 Bản quyền thuộc về CATIENNA</p>
      </div>
    </footer>
  );
}