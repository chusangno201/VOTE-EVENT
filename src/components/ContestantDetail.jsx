import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";
import "./ContestantDetail.css";

export default function ContestantDetail() {
  const { state } = useLocation();
  const { sbd } = useParams();
  const navigate = useNavigate();

  const savedData = JSON.parse(localStorage.getItem("rankingData")) || [];
  const contestant = state || savedData.find((item) => item.sbd === sbd);

  if (!contestant) return <div className="detail-page"></div>;

  return (
    <>
      <section className="detail-page">
        <div className="detail-top">
          <div className="detail-image">
            <img src={contestant.image} alt={contestant.name} />
          </div>

          <div className="detail-content">
            <div className="detail-rank">
              <img
                src="https://misscosmotphcm.1vote.vn/_next/static/media/laurel-dark-small.ca8798b3.svg"
                alt=""
              />
              <span>{contestant.rank}</span>
            </div>

            <p className="sub-title">Thí sinh Miss Cosmo TP.HCM</p>
            <h1>{contestant.name}</h1>

            <p className="score-label">Tổng điểm</p>
            <h2>{contestant.votes.toLocaleString("en-US")}</h2>

            <div className="info-share">
              <div className="info-detail">
                <h3>Thông tin</h3>
                <p>
                  <span>SBD</span>
                  <b>:</b>
                  <span>{contestant.sbd}</span>
                </p>
              </div>

              <div className="share-box">
                <p>Chia sẻ đường dẫn bình chọn tới người hâm mộ!</p>
                <div>
                  <span>https://misscosmotphcm...</span>
                  <i className="ri-file-copy-line"></i>
                </div>
              </div>
            </div>

            <p className="event-name">Miss Cosmo TP.HCM</p>
          </div>
        </div>

        <div className="intro-text">
          <p>Hello Cosmo Thành phố Hồ Chí Minh,</p>
          <p>
            Tôi là {contestant.name} - một cô gái tự tin và đầy năng lượng.
          </p>
          <p>
            Từng có cơ hội đứng trên các sàn diễn quốc tế, với tôi, Miss Cosmo
            Thành phố Hồ Chí Minh là một cuộc thi nhan sắc ý nghĩa đánh dấu bước
            khởi đầu của hành trình tôn vinh nhan sắc Việt với cách thức hiện
            đại, chuyên nghiệp và thống nhất.
          </p>
          <p>
            Đến với cuộc thi, tôi muốn lan toả vẻ đẹp và tinh thần chiến binh.
            Lòng can đảm đã giúp tôi trưởng thành và thành công trên mọi sân
            khấu.
          </p>
          <p>
            Hãy theo dõi và ủng hộ cho tôi - {contestant.name} tại Miss Cosmo
            Thành phố Hồ Chí Minh.
          </p>

          <h3>{contestant.name}</h3>
          <h4>Thí sinh Miss Cosmo TP.HCM</h4>
        </div>

        <div className="history">
          <h2>Lịch sử bình chọn</h2>
          <h3>{contestant.name}</h3>
          <p>Miss Cosmo TP.HCM</p>

          <div className="history-content">
            <div className="history-table">
              <div className="history-head">
                <span>Chi tiết giao dịch</span>
                <input placeholder="Tìm theo Email/OrderID/RefID" />
              </div>

              {[1, 2, 3, 4, 5].map((item) => (
                <div className="history-row" key={item}>
                  <div>
                    <p>Mã giao dịch</p>
                    <span>Thời gian</span>
                  </div>
                  <div>
                    <p>fp***Fz</p>
                    <span>04/06/2026 14:59</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="history-banner">
              <h4>CATIENNA</h4>
              <h3>CỔNG BÌNH CHỌN ĐỘC QUYỀN</h3>
              <p>HOTLINE: +84 7777-651-28</p>
            </div>
          </div>

          <button className="more-btn">XEM THÊM</button>
        </div>

        <div className="vote-fixed">
          <div>
            <p>Tổng điểm</p>
            <h3>{contestant.votes.toLocaleString("en-US")}</h3>
          </div>
          <button onClick={() => navigate("/")}>Bình chọn →</button>
        </div>
      </section>

      <Footer />
    </>
  );
}