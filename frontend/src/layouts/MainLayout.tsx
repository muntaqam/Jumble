// src/layouts/MainLayout.tsx

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout: React.FC = () => {
  return (
    <main className="flex justify-center bg-[#1b1b1e]">
      <div className="w-[1200px]">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;
