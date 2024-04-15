/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { DatePicker } from "antd";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaTruckMoving, FaListAlt } from "react-icons/fa";
import CountUp from "react-countup";
import { Circle } from "rc-progress";
import {
  dashboardCardData,
  dashboardDeliverData,
  dashboardRecentData,
} from "../../server/data";

// dashboard ni card lari
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

// dashboard ni deliver qismi
const DashboardDelivers = ({
  deliverId,
  from,
  to,
  distance,
  timeLeft,
  statusColor,
  statusLabel,
  percent,
}) => {
  return (
    <div className="w-full border-t flex justify-between pt-4 mt-6">
      <div>
        <p className="font-medium">{deliverId}</p>
        <div className="mt-2 min-w-36">
          <div className="flex items-center gap-3 h-3">
            <div className="w-[8px] h-[8px] rounded-full bg-capri relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[4px] h-[4px] bg-white rounded-full"></div>
            </div>
            <p className="text-sm font-medium">{from}</p>
          </div>
          <div className="w-[2px] h-[26px] rounded-full bg-gradient-to-b from-capri to-gray-100 relative mx-[3px]"></div>
          <div className="flex items-center gap-3 h-3">
            <div className="w-[8px] h-[8px] rounded-full bg-gray-300 relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[5px] h-[5px] bg-white rounded-full"></div>
            </div>
            <p className="text-sm font-medium">{to}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start min-w-20">
        <h2 className="font-medium">{distance}m</h2>
        <p className="text-gray-400 text-xs">Distance</p>
      </div>
      <div className="flex flex-col justify-center items-start min-w-24">
        <h2 className="font-medium">{timeLeft} hours</h2>
        <p className="text-gray-400 text-xs">Time left</p>
      </div>
      <div className="flex items-center gap-2 min-w-32 justify-start">
        <div
          className={`w-[8px] h-[8px] rounded-full`}
          style={{ backgroundColor: statusColor }}
        ></div>
        <h1 className="text-sm font-medium">{statusLabel}</h1>
      </div>
      <div className="flex items-center justify-center w-16 relative">
        <Circle
          percent={percent}
          strokeWidth={9}
          strokeColor={statusColor}
          className="-rotate-90"
        />
        <div className="absolute text-xs font-medium left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {percent}%
        </div>
      </div>
    </div>
  );
};

// asosiy dashboard komponent
const Dashboard = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div>
      {/* dashboard title */}
      <div className="w-full flex justify-between">
        <h1 className="text-3xl font-semibold">Dashboard</h1>

        <DatePicker onChange={onChange} />
      </div>

      {/* dashboard cards */}
      <div className="grid grid-cols-4 gap-10 mt-8">
        {dashboardCardData?.map((item, index) => (
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
        <div className="w-full h-[520px] overflow-y-auto bg-white border-2 rounded-xl px-8 py-8">
          <div className="flex justify-between">
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
          {dashboardDeliverData?.map((item, index) => (
            <DashboardDelivers
              key={index}
              deliverId={item.deliverId}
              from={item.from}
              to={item.to}
              distance={item.distance}
              timeLeft={item.timeLeft}
              statusLabel={item.statusLabel}
              statusColor={item.statusColor}
              percent={item.percent}
            />
          ))}
        </div>
        <div className="w-[60%] h-[520px] overflow-y-auto bg-white border-2 rounded-xl px-8 py-8">
          <div className="flex justify-between">
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
          {dashboardRecentData.map((item, index) => (
            <div key={index} className="flex justify-between items-center mt-8">
              <div className="flex items-center gap-4">
                <div
                  className={`w-[42px] h-[42px] rounded-full flex items-center justify-center ${
                    item.IconBg ? "bg-blue-100" : "bg-transparent"
                  }`}
                >
                  <item.Icon className="font-thin" />
                </div>
                <div>
                  <h1 className="font-medium">{item.from}</h1>
                  <p className="text-xs text-gray-400">{item.to}</p>
                </div>
              </div>
              <p className="text-xs text-gray-400">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
