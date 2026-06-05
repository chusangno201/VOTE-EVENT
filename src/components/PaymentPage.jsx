import React from "react";
import { useLocation } from "react-router-dom";

export default function PaymentPage() {
  const { state: item } = useLocation();

  return (
    <div>
      <h1>Thanh toán</h1>
      <h2>{item?.name}</h2>
      <p>SBD: {item?.sbd}</p>
    </div>
  );
}