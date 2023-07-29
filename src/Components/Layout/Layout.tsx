"use client";
import React from "react";
import Navbar from "../Navbar/Navbar";
import { Card, Flex } from "@chakra-ui/react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex padding={"20px"} h={"100vh"}>
      <Flex as={Card} w={"240px"} h={"100%"} mr={"20px"}>
        sidebar
      </Flex>
      <Flex direction={"column"} flexGrow={1}>
        <Navbar />
        {children}
      </Flex>
    </Flex>
  );
};
export default Layout;
