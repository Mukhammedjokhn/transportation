import { useState } from "react";
import { PiPackageDuotone } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import "./Sidebar.css";
import { TbPackages } from "react-icons/tb";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { LuPackageCheck, LuPackagePlus } from "react-icons/lu";
import { FaTruckFast } from "react-icons/fa6";
import { GrAnalytics } from "react-icons/gr";
import { IoMdAddCircle, IoMdSettings } from "react-icons/io";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

const SidebarMenu = ({ to, Icon, label, menuData }) => {
  return menuData ? (
    menuData?.map((item, index) => (
      <div key={index} className="min-h-13 w-full sidebar-links cursor-pointer">
        <div
          onClick={item.setActivePackage}
          className="flex items-center gap-3"
        >
          <item.Icon className="text-xl" />
          <p className="flex-1 font-medium select-none">{item.label}</p>
          {item.activePackage ? (
            <FaChevronUp className="text-xs" />
          ) : (
            <FaChevronDown className="text-xs" />
          )}
        </div>
        {item.activePackage && (
          <div className="w-full mt-6">
            {item.menu?.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                className={"w-full flex items-center gap-3 sidebar-links"}
              >
                <item.Icon className="text-xl" />
                <p className="font-medium">{item.label}</p>
              </NavLink>
            ))}
          </div>
        )}
      </div>
    ))
  ) : (
    <NavLink to={to} className={"w-full flex items-center gap-3 sidebar-links"}>
      <Icon className="text-xl" />
      <p className="font-medium">{label}</p>
    </NavLink>
  );
};

const Sidebar = () => {
  const [activePackage, setActivePackage] = useState(false);
  const items = [
    {
      id: 0,
      label: "Dashboard",
      Icon: MdDashboard,
      to: "/",
    },
    {
      id: 1,
      menuData: [
        {
          label: "All packages",
          Icon: TbPackages,
          activePackage,
          setActivePackage: () => setActivePackage(!activePackage),
          menu: [
            {
              label: "In Transit",
              Icon: FaTruckFast,
              to: "/in-transit",
            },
            {
              label: "Delivered",
              Icon: LuPackageCheck,
              to: "/delivered",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      label: "Add Shipment",
      Icon: LuPackagePlus,
      to: "/add-shipment",
    },
    {
      id: 3,
      label: "Analytics",
      Icon: GrAnalytics,
      to: "/analytics",
    },
  ];

  return (
    <div className="w-[300px] bg-white h-full px-8 pt-8 pb-10 flex flex-col justify-between">
      <div>
        {/* logo */}
        <div className="flex items-center pl-4 gap-2 mb-12">
          <PiPackageDuotone className="text-capri text-2xl" />
          <h1 className="font-bold text-xl select-none">SpeedHaul</h1>
        </div>

        {/* sidebar links */}
        {items?.map((item, index) => (
          <SidebarMenu
            key={index}
            Icon={item.Icon}
            label={item.label}
            menuData={item.menuData}
            to={item.to}
          />
        ))}
      </div>

      {/* sidebar setting */}
      <div className="flex flex-col gap-2">
        <button className="flex items-center gap-2 bg-azure py-3 pl-4 w-full text-white shadow-md rounded-lg">
          <IoMdAddCircle />
          <p>Create new delivery</p>
        </button>

        <button className="flex items-center gap-2 py-3 pl-4 w-full text-[#808080] rounded-lg hover:text-azure duration-200">
          <HiChatBubbleLeftRight className="text-xl" />
          <p>Need help?</p>
        </button>

        <button className="flex items-center gap-2 py-3 pl-4 w-full text-[#808080] rounded-lg hover:text-azure duration-200">
          <IoMdSettings className="text-xl" />
          <p>Settings</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
