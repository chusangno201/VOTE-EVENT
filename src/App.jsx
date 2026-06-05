import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CartIteam from "./components/CartIteam";
import Footer from "./components/Footer";
import PaymentPage from "./components/PaymentPage";
import ContestantDetail from "./components/ContestantDetail";

function Home() {
  return (
    <>
      <Header />
      <ContestantDetail />
      <CartIteam />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes> 
      <Route path="/thi-sinh/:sbd" element={<ContestantDetail />} />
      <Route path="/" element={<Home />} />
      <Route path="/thanh-toan" element={<PaymentPage />} />
    </Routes>
  );
}
