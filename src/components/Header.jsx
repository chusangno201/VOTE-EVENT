import React from "react";
import "../App.css";

export default function Header() {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">CATIENNA</div>

        <nav className="nav">
          <a href="#">Giới thiệu</a>
          <a href="#">Tất cả sự kiện</a>
          <a href="#">Vote</a>
          <a href="#">Sticket</a>
           <a href="#">Sản phẩm</a>

        </nav>
      </header>

      <div className="tabs">
        <a href="#" className="active">Trang bình chọn</a>
        <span>•</span>
        <a href="#">Bảng xếp hạng</a>
      </div>

      <main className="page">
        <section className="hero">
          <div className="overlay"></div>

          <div className="heroContent">
            <h4>CATIENNA</h4>
            <h1>TP. HỒ CHÍ MINH 2026</h1>
            <div className="star">✦</div>
            <p>CỔNG BÌNH CHỌN CHÍNH THỨC</p>
            <h2>CATIENNA</h2>
          </div>
        </section>
      </main>
    </div>
  );
}