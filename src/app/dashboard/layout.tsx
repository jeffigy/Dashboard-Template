import Navbar from "@/Components/Navbar/Navbar";
import React from "react";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return <div>dashboard layout{children}</div>;
};
export default DashboardLayout;
