// src/layouts/MainLayout.tsx

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout: React.FC = () => {
  return (
    <main className="bg-[#0da49d]">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
