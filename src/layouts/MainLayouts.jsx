import React from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "../Componants/Navbar";
import { Outlet } from "react-router";
import Footer from "../Componants/Footer";

// Controlling the outlet from here for better and fast 

const MainLayouts = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-[#f9f9f9]">
        <Outlet />
      </main>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MainLayouts;
