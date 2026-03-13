import React from "react";
import Logo from "../../common/ui/Logo";

import LogoutBtn from "../../common/ui/LogoutBtn";
import SidebarMenu from "../../common/ui/SidebarMenu";
import { X } from "lucide-react";

const DashSidebar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity md:hidden
        ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-72.5 bg-white border-r border-border-color
          transform transition-transform duration-300 ease-in-out
          md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="px-6 py-3 border-b border-border-color relative">
          <Logo />
          {isOpen ? (
            <div
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="absolute right-4 top-1/2 -translate-y-[50%] cursor-pointer hover:text-primary hover:scale-120 transition-transform duration-200"
            >
              <X />
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="mt-6">
          <SidebarMenu />
          <LogoutBtn />
        </div>
      </aside>
    </>
  );
};

export default DashSidebar;
