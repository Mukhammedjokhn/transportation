import React from "react";
import { PiMagnifyingGlassFill } from "react-icons/pi";
import { BsQuestionCircleFill } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
import "./Navbar.css";
import { FaChevronDown } from "react-icons/fa6";
import profile from "../../assets/profile.avif";

const Navbar = () => {
  return (
    <div className="w-full h-[75px] border-b-2 border-b-gray-100 flex justify-between items-center pr-10 pl-12 bg-white border-l-gray-100 border-l">
      {/* search bar */}
      <div className="w-[350px] rounded-full border flex items-center pl-3 focus-within:border-azure duration-200">
        <PiMagnifyingGlassFill className="text-xl text-[#808080]" />
        <input
          type="text"
          placeholder="Search by tracking number"
          className="w-full h-full rounded-full indent-2 py-2 placeholder:text-sm text-azure text-sm outline-none"
        />
      </div>

      {/* profile */}
      <div className="flex items-center gap-6 text-[#808080]">
        <BsQuestionCircleFill className="text-xl cursor-pointer hover:text-azure duration-150" />
        <IoNotifications className="text-2xl cursor-pointer icon-shake hover:text-azure duration-150" />

        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-[35px] h-[35px] rounded-full">
            <img
              src={profile}
              alt=""
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          <FaChevronDown className="text-xs" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
