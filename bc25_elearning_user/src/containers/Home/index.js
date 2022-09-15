import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "templates/HomeTemplate/Footer";
import Navbar from "templates/HomeTemplate/Navbar";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
