"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CloseButton,
  Flex,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { Archive, Layout, ShoppingBag, Map, LogIn } from "react-feather";
import DarkMode from "./DarkMode";
import Header from "./Header";
import NavLink from "./NavLink";

type SidebarProps = {
  onClose: () => void;
  display?: {};
  appName: string;
};

const Sidebar: React.FC<SidebarProps> = ({ appName, onClose, display }) => {
  const NavItems = [
    { name: "Landing Page", icon: Layout, to: "/" },
    { name: "Dashboard", icon: ShoppingBag, to: "/dashboard" },
    { name: "Explore", icon: Map, to: "/explore" },
    { name: "Featured Products", icon: Archive, to: "/products" },
    { name: "Register", icon: LogIn, to: "/register" },
  ];
  return (
    <Card
      borderRadius={{ base: "none", md: "md" }}
      display={display}
      zIndex={"1"}
      w={{ base: "full", md: "56px", lg: "240px" }}
      mr={{ base: "none", md: "20px" }}
      h={"full"}
    >
      <Flex direction={"column"} h={"full"}>
        <CardHeader>
          <Header appName={appName} onClose={onClose} />
        </CardHeader>
        <CardBody
          p={{ base: "20px", md: "0px", lg: "20px" }}
          w={{ base: "full", md: "40px", lg: "full" }}
          alignSelf={"center"}
          flexGrow={1}
          overflowY="auto"
        >
          {NavItems.map((item) => (
            <NavLink
              onClose={onClose}
              key={item.name}
              icon={item.icon}
              name={item.name}
              to={item.to}
            />
          ))}
        </CardBody>
        <CardFooter>
          <DarkMode />
        </CardFooter>
      </Flex>
    </Card>
  );
};
export default Sidebar;
