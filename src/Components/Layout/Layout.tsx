"use client";
import {
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

type LayoutProps = {
  children: React.ReactNode;
  appName: string;
};

const Layout: React.FC<LayoutProps> = ({ children, appName }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Get the current breakpoint value
  const isMobile = useBreakpointValue({ base: true, md: false });

  // Close the Drawer if the screen size is above md
  useEffect(() => {
    if (!isMobile && isOpen) {
      onClose();
    }
  }, [isMobile, isOpen, onClose]);

  return (
    <Flex padding={"20px"} h={"100vh"}>
      {/* Sidebar when on desktop size*/}
      <Sidebar
        display={{ base: "none", md: "block" }}
        onClose={onClose}
        appName={appName}
      />
      {/* Sidebar when on mobile size*/}
      <Drawer size={"full"} isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <Sidebar appName={appName} onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Flex direction={"column"} flexGrow={1}>
        <Navbar onOpen={onOpen} />
        {children}
      </Flex>
    </Flex>
  );
};
export default Layout;
