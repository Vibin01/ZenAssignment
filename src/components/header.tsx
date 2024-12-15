"use client";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
  return (
    <header className="p-2 flex justify-between content-between  bg-gray-100">
      <div className="text-[#000000c1]">
        <img src="#" alt="Logo" />
      </div>
      <button>
        <MenuIcon style={{ fontSize: 30, color: "black" }} />
      </button>
    </header>
  );
};

export default Header;
