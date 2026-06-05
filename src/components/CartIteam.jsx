import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CartIteam.css";

export default function CartIteam() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("bank");

  const votePackages = [
    { point: 1, label: "1 điểm", price: "Miễn phí" },
    { point: 20, label: "20 điểm", price: "10,000đ" },
    { point: 50, label: "50 điểm", price: "20,000đ" },
    { point: 150, label: "150 điểm", price: "50,000đ" },
    { point: 300, label: "300 điểm", price: "100,000đ" },
    { point: 600, label: "600 điểm", price: "200,000đ" },
    { point: 1550, label: "1,550 điểm", price: "500,000đ" },
    { point: 3500, label: "3,500 điểm", price: "1,000,000đ" },
    { point: 11000, label: "11,000 điểm", price: "3,000,000đ" },
  ];

const contestants = [
  { name: "ÁNH DƯƠNG HẢI LÂM", image: "/img/Anh duong hai lam quiine 1.JPG" },
  { name: "BẢN GIAO HƯỞNG ĐẠI DƯƠNG", image: "/img/Ban giao huong dai duong - taip huynh 2.JPG" },
  { name: "BẢN GIAO HƯỞNG ĐẤT NƯỚC", image: "/img/Ban giao huong dat nuoc - nguyen van khang 3.JPG" },
  { name: "BẢN HÒA HƯỞNG ĐẠI DƯƠNG X", image: "/img/Ban hiao huong dai duong x doan the thuan 4.JPG" },
  { name: "DI SẢN ĐẠI DƯƠNG", image: "/img/Di san dau duong - nguyen huu tinh 5.JPG" },
  { name: "DI SẢN LƯU SẮC", image: "/img/Di san luu sac - nguyen thanh hao, cao nhu quynh 6.JPG" },
  { name: "ĐÔI CÁNH CỦA BIỂN ĐÔNG", image: "/img/Doi canh cua bien dong - nick music 7.JPG" },
  { name: "HẢI KHÚC DƯƠNG TRIỀU", image: "/img/Hai khuc duong trieu - momo 8.JPG" },
  { name: "HẢI NGỌC MINH CHÂU", image: "/img/Hai ngoc minh chau 9.JPG" },
  { name: "HẢI TRIỀU THANH LAM", image: "/img/Hai trieu thanh lam - tran bao ohuong 10.JPG" },
  { name: "HẢI TRIỀU THANH LAM", image: "/img/Hai trieu thanh lam - tran bao phuong 11.JPG" },
  { name: "HẢI TRÌNH THỊNH VƯỢNG", image: "/img/Hai trinh thịnh vuong - nguyen duc vuong 12.JPG" },
  { name: "HẢI VÂN HOÀNG QUANG", image: "/img/Hai van hoang quang - truong pham hoang khanh 13.JPG" },
  { name: "HERITAGE FLOW", image: "/img/HERITAGE FLOW DONG CHAY DI SAN - NGO NHAT HAN 14.JPG" },
  { name: "HOA THUỶ BÍCH LỆ", image: "/img/Hoa thuy bich le - jade phạm 15.JPG" },
  { name: "HOÀNG TRIỀU LAM TINH", image: "/img/Hoang trieu lam tinh - tran bao phuong 16.JPG" },
  { name: "HOÀNG TRIỀU THUỶ LIÊN HOA", image: "/img/Hoang trieu thuy lien hoa ngo bao vy 17.JPG" },
  { name: "HỒN VIỆT HẢI ĐÔNG", image: "/img/Hon viet hai dong - tran bao phuong 18.JPG" },
  { name: "HUYỀN LAM TỊNH HẢI", image: "/img/Huyen lam tinh hai - dam nguyen minh tri 19.JPG" },
  { name: "KHÁT VỌNG BIỂN CẢ", image: "/img/Khat vong bien ca - tien nguyen 20.JPG" },
  { name: "KHÚC CA BÌNH MINH", image: "/img/Khuc ca binh minh - dam nguyen minh tri 21.JPG" },
  { name: "KHÚC HÁT ĐẠI DƯƠNG", image: "/img/Khuc hat dai duong - bui minh vuong 22.JPG" },
  { name: "KỲ LƯU HẢI VÂN", image: "/img/Ky luu hai van - tran bao phuong.JPG" },
  { name: "LAM HẢI NHẬT TOẢ", image: "/img/Lam hai nhat toa - kim nguyen.JPG" },
  { name: "LAM HOÀNG TRIỀU", image: "/img/Lam hoang trieu - ngo bao vy.JPG" },
  { name: "LAM NGỌC HOÀNG QUYÊN", image: "/img/Lam ngoc hoang quyen - lam thuc vy.JPG" },
  { name: "LAM NGỌC THIÊN VŨ", image: "/img/Lam ngoc thien vu - quach dang khoi.JPG" },
  { name: "LAM TỊNH HẢI QUAN", image: "/img/Lam tinh hai quan - dam nguyen minh tri.JPG" },
  { name: "LOTUS WAVE", image: "/img/Lutus wave - diep van duy.JPG" },
  { name: "NGỌC BIỂN ĐÔNG", image: "/img/NGỌC BIỂN ĐÔNG - TRƯƠNG VỶ.JPG" },
  { name: "NGỌC HẢI LƯU QUANG", image: "/img/Ngoc hai luu quang - dam nguyen minh tri.JPG" },
  { name: "NGỌC THIÊN VƯƠNG", image: "/img/Ngoc thien vuong - vo ngoc nam.JPG" },
  { name: "NGỌC TRIỀU LAM", image: "/img/Ngoc trieu lam - henry nguyen.JPG" },
  { name: "NGỌC TRIỀU LAM VÂN", image: "/img/Ngoc trieu lam van - dam nguyen minh tri.JPG" },
  { name: "NIGHT LOTUS", image: "/img/Night Lotus - Vo ngoc nam.JPG" },
  { name: "NỐT NHẠC CỦA ĐẠI DƯƠNG", image: "/img/Not nhac cua dai duong - ngo kien huy.JPG" },
  { name: "SAPPHIRE MARINUS", image: "/img/Sapphire marinus - ngo nhat han.JPG" },
  { name: "SAPPHIRA OCEANA", image: "/img/Shapphira oceana - ngo nhat han.JPG" },
  { name: "SÓNG SẮN", image: "/img/Song San - Hua an.JPG" },
  { name: "SÓNG XANH TINH KHÔI", image: "/img/Song xanh tinh khoi - quach tam phuc.JPG" },
  { name: "THIÊN ĐĂNG TRIỀU HẢI", image: "/img/Thien dang trieu hai - vulary bui nhat thien.JPG" },
  { name: "THIÊN ĐĂNG TRIỀU HẢI XP", image: "/img/Thien dang trieu hai xp- vulary , bui nhat thien.JPG" },
  { name: "THIÊN HẢI PHỤNG VŨ", image: "/img/Thien hai phung vu - jade pham.JPG" },
  { name: "THIÊN LAM HẢI NGỌC", image: "/img/Thien lam hai ngoc - quach dang khoi.JPG" },
  { name: "THIÊN LAM HẢI NGỌC", image: "/img/Thien lam hai ngoc - quách đăng khôi.JPG" },
  { name: "THIÊN TRIỀU SẮC VIỆT", image: "/img/Thiên triều sắc việt - ngo bao vy.JPG" },
  { name: "THUỶ THANH LƯU QUANG", image: "/img/Thuy thanh luu quang - le thinh.JPG" },
  { name: "TINH HOA THUỶ CUNG", image: "/img/Tinh hoa thuy cung - quach tam ohuc.JPG" },
  { name: "TÌNH TỰ ĐẠI DƯƠNG", image: "/img/Tinh tu dai duong - nguyen phuong thao.JPG" },
  { name: "TRÁI TIM ĐẠI DƯƠNG", image: "/img/Trai tim dai duong - le hoang loc.JPG" },
  { name: "TRIỀU DƯƠNG THANH TÚ", image: "/img/Trieu duong thanh tu - jane nguyen.JPG" },
  { name: "TUYỆT TÁC ĐẠI DƯƠNG", image: "/img/Tuyet tac dai duong - nick music.JPG" },
  { name: "VŨ ĐIỆU ĐẠI DƯƠNG", image: "/img/Vu dieu dai duong - jade pham.JPG" },
  { name: "VŨ ĐIỆU SAN HÔ", image: "/img/Vu dieu san ho - quach tam phuc.JPG" },
  { name: "VŨ KHÚC HUYỀN LAM", image: "/img/Vu khuc huyen lam - chi thuc.JPG" },
  { name: "WAVE", image: "/img/Wave - diep van duy.JPG" },
];

const [data, setData] = useState(() => {
  const savedData = localStorage.getItem("rankingData");

  if (savedData) {
    const parsed = JSON.parse(savedData);

    if (parsed.length === contestants.length) {
      return parsed;
    }
  }

  return contestants.map((item, index) => ({
    rank: index + 1,
    sbd: String(101 + index).padStart(3, "0"),
    name: item.name,
    votes: Math.floor(Math.random() * 50000) + 5000,
    image: encodeURI(item.image),
  }));
});

useEffect(() => {
  localStorage.setItem("rankingData", JSON.stringify(data));
}, [data]);

const top3 = [data[1], data[0], data[2]].filter(Boolean);
const others = data.slice(3);

// * THANH TOAN PAY
  const openPayment = (item) => {
    setSelectedItem(item);
    setSelectedPackage(votePackages[1]);
    setPaymentMethod("bank");
  };

  const closePayment = () => {
    setSelectedItem(null);
    setSelectedPackage(null);
  };

  const handlePayment = () => {
    const methodName =
      paymentMethod === "bank"
        ? "Chuyển khoản Ngân Hàng"
        : paymentMethod === "zalopay"
        ? "Ví điện tử ZaloPay"
        : "Thẻ tín dụng";

    setData((prevData) =>
      prevData.map((item) =>
        item.sbd === selectedItem.sbd
          ? {
              ...item,
              votes: Number(item.votes) + Number(selectedPackage.point),
            }
          : item
      )
    );

    alert(
      `Thanh toán thành công!

Thí sinh: ${selectedItem.name}
SBD: ${selectedItem.sbd}
Điểm cộng: ${selectedPackage.point}
Số tiền: ${selectedPackage.price}
Phương thức: ${methodName}`
    );

    closePayment();
  };

  const filterData = (list) =>
    list.filter(
      (item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.sbd.includes(search)
    );

  const renderCard = (item, extraClass = "") => (
    <div className={`card ${extraClass}`} key={item.rank}>
     <div
  className="image-box"
  onClick={() =>
    navigate(`/thi-sinh/${item.sbd}`, {
      state: item,
    })
  }
>
  <img src={item.image} alt={item.name} />
</div>

      <div className="info">
        <span>SBD: {item.sbd}</span>
        <div></div>
        <strong>{item.votes.toLocaleString("en-US")}</strong>
      </div>

      <h3>{item.name}</h3>

      <div className="bottom">
        <button onClick={() => openPayment(item)}>Bình chọn</button>

        <div className="rank-box">
          <img
            src="https://misscosmotphcm.1vote.vn/_next/static/media/laurel-dark-small.ca8798b3.svg"
            alt=""
          />
          <span>{item.rank}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="ranking">
      <div className="ranking-title">
        <h1>BẢNG XẾP HẠNG</h1>
        <h2>MISS COSMO TP.HCM</h2>
      </div>

      <div className="search-box">
        <i className="ri-search-line search-icon"></i>
        <input
          type="text"
          placeholder="Tìm kiếm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="top-three">
        {filterData(top3).map((item, index) =>
          renderCard(
            item,
            `top-card ${index === 1 ? "top-center" : "top-side"}`
          )
        )}
      </div>

      <div className="ranking-list">
        {filterData(others).map((item) => renderCard(item))}
      </div>

      {selectedItem && selectedPackage && (
        <div className="payment-overlay">
          <div className="payment-modal">
            <button className="close-btn" onClick={closePayment}>
              ×
            </button>

            <div className="payment-left">
              <h2>Bình chọn</h2>

              <div className="contestant-info">
                <img src={selectedItem.image} alt={selectedItem.name} />
                <div>
                  <h3>{selectedItem.name}</h3>
                  <p>Số báo danh: {selectedItem.sbd}</p>
                  <p>Sự kiện Best Profile Picture</p>
                </div>
              </div>

              <div className="vote-grid">
                {votePackages.map((pack) => (
                  <div
                    className={`vote-card ${
                      selectedPackage.point === pack.point ? "active" : ""
                    }`}
                    key={pack.point}
                    onClick={() => setSelectedPackage(pack)}
                  >
                    <h4>{pack.label}</h4>
                    <p>{pack.price}</p>
                  </div>
                ))}
              </div>

              <div className="total">
                <span>Thành tiền (Đã bao gồm VAT 10%)</span>
                <b>{selectedPackage.price}</b>
              </div>
            </div>

            <div className="payment-right">
              <h3>Hướng dẫn ❔</h3>

              <div className="method-box">
                <h2>Phương thức thanh toán</h2>

                <div
                  className={`method ${
                    paymentMethod === "bank" ? "active" : ""
                  }`}
                  onClick={() => setPaymentMethod("bank")}
                >
                  <span>
                    <i className="ri-bank-card-line"></i>
                  </span>
                  <p>Chuyển khoản Ngân Hàng</p>
                  {paymentMethod === "bank" && <b>✓</b>}
                </div>

                <div
                  className={`method ${
                    paymentMethod === "zalopay" ? "active" : ""
                  }`}
                  onClick={() => setPaymentMethod("zalopay")}
                >
                  <img
                    src="https://simg.zalopay.com.vn/zlp-website/assets/new_logo_6c5db2d21b.svg"
                    alt="ZaloPay"
                  />
                  <p>Ví điện tử ZaloPay</p>
                  {paymentMethod === "zalopay" && <b>✓</b>}
                </div>

                <div
                  className={`method ${
                    paymentMethod === "card" ? "active" : ""
                  }`}
                  onClick={() => setPaymentMethod("card")}
                >
                  <span>
                    <i className="ri-visa-line"></i>
                  </span>
                  <p>Thẻ tín dụng</p>
                  {paymentMethod === "card" && <b>✓</b>}
                </div>
              </div>

              <p className="agree">
                ☑ Bằng việc thanh toán, tôi đồng ý với các nội dung trong
                <b>
                  {" "}
                  Điều khoản sử dụng, Chính sách đổi trả và hoàn tiền, Chính
                  sách quyền riêng tư.
                </b>
              </p>

              <button className="pay-btn" onClick={handlePayment}>
                Thanh toán →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}