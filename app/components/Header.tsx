import React, { useState, useEffect } from "react";
import Image from "next/image";

const Header = () => {
  const MENU_LIST = ["TV Shows", "Movies", "My List"];
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 flex justify-between items-center w-full max-w-[375px] h-[57px] px-4 md:px-5 lg:px-6 py-8 z-50 transition-all ${
        scrollPosition > 100
          ? "bg-black"
          : "bg-gradient-to-b from-[rgba(18, 18, 18, 0.9)] to-[rgba(18, 18, 18, 0)]"
      }`}
    >
      <div>
        <Image
          src={"/images/netflix-logo.svg"}
          width={57}
          height={57}
          alt="logo"
        />
      </div>
      {MENU_LIST.map((menu) => {
        return (
          <span key={menu} className="text-white text-17.2 cursor-pointer">
            {menu}
          </span>
        );
      })}
    </div>
  );
};
export default Header;
