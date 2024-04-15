import { Route, Routes } from "react-router";
import Layout from "../layout/Layout";
import Dashboard from "../pages/dashboard/Dashboard";
import InTransit from "../pages/packages/InTransit";
import Delivered from "../pages/packages/Delivered";
import AddShipment from "../pages/shipment/AddShipment";
import Analytics from "../pages/analytics/Analytics";

export default function Routers() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />

        <Route path="/in-transit" element={<InTransit />} />
        <Route path="/delivered" element={<Delivered />} />
        <Route path="/add-shipment" element={<AddShipment />} />
        <Route path="/analytics" element={<Analytics />} />
      </Route>
    </Routes>
  );
}
