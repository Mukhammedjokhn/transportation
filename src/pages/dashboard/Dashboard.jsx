import React from "react";
import { DatePicker } from "antd";
import { LuPackagePlus, LuPackageCheck } from "react-icons/lu";
import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaArrowRightLong,
} from "react-icons/fa6";
import { FaBusinessTime, FaTruckMoving, FaListAlt } from "react-icons/fa";
import { BsTruckFlatbed } from "react-icons/bs";
import CountUp from "react-countup";

const DashboardCards = ({
  count,
  Icon,
  title,
  percent,
  TrendIcon,
  desc,
  income,
}) => {
  return (
    <div className="w-full h-[180px] bg-white border-2 rounded-2xl p-9 cursor-pointer">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold">
          <CountUp end={count} />
        </h1>

        <div className="w-[40px] h-[40px] rounded-full bg-capri bg-opacity-10 flex items-center justify-center text-capri">
          <Icon className="text-xl" />
        </div>
      </div>
      <p className="font-medium mt-4 mb-3">{title}</p>
      <div className="flex">
        <div
          className={`rounded-full flex items-center gap-1 px-1.5 mr-2 ${
            income ? "text-green-600 bg-green-100" : "text-red-600 bg-red-100"
          }`}
        >
          <TrendIcon />
          <p className="text-xs">{percent}%</p>
        </div>
        <p className="text-sm text-gray-400 font-medium">{desc}</p>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const data = [
    {
      count: 854,
      Icon: LuPackagePlus,
      title: "New packages",
      percent: 7.85,
      TrendIcon: FaArrowTrendUp,
      desc: "from last week",
      income: true,
    },
    {
      count: 648,
      Icon: FaBusinessTime,
      title: "Ready to ship",
      percent: 2.27,
      TrendIcon: FaArrowTrendDown,
      desc: "from last week",
      income: false,
    },
    {
      count: 165,
      Icon: BsTruckFlatbed,
      title: "In Transit",
      percent: 7.42,
      TrendIcon: FaArrowTrendUp,
      desc: "from last week",
      income: true,
    },
    {
      count: 38,
      Icon: LuPackageCheck,
      title: "Delivered",
      percent: 5.68,
      TrendIcon: FaArrowTrendUp,
      desc: "from last week",
      income: true,
    },
  ];
  return (
    <div>
      {/* dashboard title */}
      <div className="w-full flex justify-between">
        <h1 className="text-3xl font-semibold">Dashboard</h1>

        <DatePicker onChange={onChange} />
      </div>

      {/* dashboard cards */}
      <div className="grid grid-cols-4 gap-10 mt-8">
        {data?.map((item, index) => (
          <DashboardCards
            key={index}
            Icon={item.Icon}
            TrendIcon={item.TrendIcon}
            count={item.count}
            desc={item.desc}
            percent={item.percent}
            title={item.title}
            income={item.income}
          />
        ))}
      </div>
      {/* dashboard analytics */}
      <div className="flex justify-between gap-6 mt-6">
        <div className="w-full h-[520px] bg-white border-2 rounded-xl px-8 py-8">
          <div className="flex justify-between pb-6">
            <div className="flex items-center gap-2">
              <div className="w-[40px] h-[40px] rounded-full bg-capri bg-opacity-10 flex items-center justify-center text-capri">
                <FaTruckMoving className="text-xl" />
              </div>
              <h2 className="text-xl font-semibold">Recent deliveries</h2>
            </div>
            <button className="flex items-center bg-[#dfe5ff] rounded-full px-6 h-7 text-azure">
              <p className="text-sm">See all</p>
              <FaArrowRightLong className="text-xs" />
            </button>
          </div>
          <div className="w-full border-t flex justify-between">
            <div>
              <p>RS922894</p>
            </div>
          </div>
        </div>
        <div className="w-[60%] h-[520px] bg-white border-2 rounded-xl px-8 py-8">
          <div className="flex justify-between pb-6">
            <div className="flex items-center gap-2">
              <div className="w-[40px] h-[40px] rounded-full bg-capri bg-opacity-10 flex items-center justify-center text-capri">
                <FaListAlt className="text-xl" />
              </div>
              <h2 className="text-xl font-semibold">Recent request</h2>
            </div>
            <button className="flex items-center bg-[#dfe5ff] rounded-full px-6 h-7 text-azure">
              <p className="text-sm">See all</p>
              <FaArrowRightLong className="text-xs" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
