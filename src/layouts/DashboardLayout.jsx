import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import ScrollToTop from "../common/ScrollToTop";

import SidebarWrapper from "../components/Animation/SidebarWrapper";
import Navbar from "../components/Sections/layout/Navbar";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen bg-white">
      <SidebarWrapper>
        <DashSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </SidebarWrapper>
      <div className="flex-1 flex flex-col">
        <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />

        <ScrollToTop />
        <main className="max-md:pt-12 md:ml-72.5">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
