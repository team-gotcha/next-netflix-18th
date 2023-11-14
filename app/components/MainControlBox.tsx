import React from "react";
import Image from "next/image";

const MainControlBox = () => {
  return (
    <div className="flex flex-col items-center gap-11 pt-2.5 px-11 pb-11 w-full">
      <div className="flex items-center justify-center">
        <Image src={"/images/topten.svg"} width={15} height={15} alt="topten" />
        <div className="text-white text-13px font-bold line-height-2rem text-center ml-5">
          in Nigeria Today
        </div>
      </div>
      <div className="w-full flex flex-row justify-around">
        <div className="flex flex-col items-center justify-center gap-1 text-white cursor-pointer">
          <Image src={"/images/plus.svg"} width={24} height={24} alt="plus" />
          <span>My List</span>
        </div>

        <button className="flex items-center justify-center bg-neutral-300 rounded-md w-28 h-11 gap-2.5 cursor-pointer border-none">
          <Image
            src={"/images/play_icon.svg"}
            width={24}
            height={24}
            alt="play_icon"
          />
          <span className="font-semibold text-xl">Play</span>
        </button>

        <div className="flex flex-col items-center justify-center gap-1 text-white cursor-pointer">
          <Image src={"/images/info.svg"} width={24} height={24} alt="info" />
          <span>Info</span>
        </div>
      </div>
    </div>
  );
};
export default MainControlBox;
