import { LuPackagePlus, LuPackageCheck, LuPackageX } from "react-icons/lu";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa";
import { BsTruckFlatbed, BsTruck, BsBox2 } from "react-icons/bs";
import { TbPackageImport } from "react-icons/tb";

export const dashboardCardData = [
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

export const dashboardDeliverData = [
  {
    deliverId: "RS922894",
    from: "Atlanta",
    to: "Indianapolis",
    distance: 534,
    timeLeft: 3,
    statusLabel: "In Transit",
    statusColor: "#ff4500",
    percent: 72,
  },
  {
    deliverId: "RS922894",
    from: "Columbus",
    to: "Fort Wayne",
    distance: 166,
    timeLeft: 5,
    statusLabel: "Completed",
    statusColor: "#00b100",
    percent: 100,
  },
  {
    deliverId: "RS922894",
    from: "Atlanta",
    to: "Sioux Falls",
    distance: 1163,
    timeLeft: 4,
    statusLabel: "Completed",
    statusColor: "#00b100",
    percent: 100,
  },
  {
    deliverId: "RS922894",
    from: "New York",
    to: "Boston",
    distance: 216,
    timeLeft: 14,
    statusLabel: "Checking",
    statusColor: "#daa520",
    percent: 72,
  },
];

export const dashboardRecentData = [
  {
    Icon: LuPackageCheck,
    IconBg: true,
    from: "Package Arrived",
    to: "Indianapolis",
    date: "Sep 12, 2023",
  },
  {
    Icon: TbPackageImport,
    IconBg: false,
    from: "Return request",
    to: "Columbus",
    date: "Sep 18, 2023",
  },
  {
    Icon: LuPackageX,
    IconBg: true,
    from: "Order canceled",
    to: "Ohio",
    date: "Oct 13, 2023",
  },
  {
    Icon: LuPackageCheck,
    IconBg: false,
    from: "Package Arrived",
    to: "Wichita",
    date: "Oct 13, 2023",
  },
  {
    Icon: BsBox2,
    IconBg: true,
    from: "Parcel request",
    to: "Lincoln",
    date: "Oct 15, 2023",
  },
  {
    Icon: BsTruck,
    IconBg: false,
    from: "Package in transit",
    to: "St Louis",
    date: "Oct 15, 2023",
  },
];
