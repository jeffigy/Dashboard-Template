import Navbar from "@/Components/Layout/Navbar/Navbar";
import React from "react";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return <div>dashboard layout{children}</div>;
};
export default DashboardLayout;
