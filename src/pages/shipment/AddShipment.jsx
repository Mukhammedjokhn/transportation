/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FaAddressCard } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { TbMailFilled } from "react-icons/tb";
import { HiLocationMarker } from "react-icons/hi";
import { FaShapes } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { FaWeightHanging } from "react-icons/fa6";
import { IoCashOutline } from "react-icons/io5";

const AddShipment = () => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <div className="w-[300px] h-[65px] relative border-2 border-azure rounded-2xl flex flex-col justify-center pl-8 cursor-pointer hover:border-azure duration-200">
          <h1 className="font-semibold">Add details</h1>
          <p className="text-xs font-medium text-gray-500">Contact,shipment</p>
        </div>
        <div className="w-[300px] h-[65px] relative border-2 border-gray-400 rounded-2xl flex flex-col justify-center pl-8 cursor-pointer hover:border-azure duration-200">
          <h1 className="font-semibold">Optimise Route</h1>
          <p className="text-xs font-medium text-gray-500">
            Select optimal route
          </p>
        </div>
        <div className="w-[300px] h-[65px] relative border-2 border-gray-400 rounded-2xl flex flex-col justify-center pl-8 cursor-pointer hover:border-azure duration-200">
          <h1 className="font-semibold">Choose Carrier</h1>
          <p className="text-xs font-medium text-gray-500">
            Choose best carrier
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddShipment;
