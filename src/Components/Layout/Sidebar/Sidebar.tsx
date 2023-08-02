"use client";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CloseButton,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  Layout,
  ShoppingBag,
  Home,
  Users,
  User,
  Trello,
  PieChart,
} from "react-feather";
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
    { name: "Home", icon: Home, to: "/home" },
    { name: "Establishments", icon: Trello, to: "/establishments" },
    { name: "Patients", icon: User, to: "/patients" },
    { name: "Social Workers", icon: Users, to: "/social-workers" },
    { name: "Reports", icon: PieChart, to: "/reports" },
  ];
  return (
    <Flex
      display={display}
      bg="brand.800"
      w={{ base: "full", md: "56px", lg: "240px" }}
      pos="fixed"
      h="full"
      py={"56px"}
      flexDirection={"column"}
      px={{ base: "20px", md: "0px", lg: "20px" }}
      justifyContent={"space-around"}
    >
      <Header appName={appName} onClose={onClose} />
      <Spacer />
      <Box alignSelf={"center"} w={{ base: "full", md: "40px", lg: "full" }}>
        {NavItems.map((item) => (
          <NavLink
            onClose={onClose}
            key={item.name}
            icon={item.icon}
            name={item.name}
            to={item.to}
          />
        ))}
      </Box>
      <Spacer />
      <Box alignSelf={"center"}>
        <DarkMode />
      </Box>
    </Flex>
    // <Card
    //   borderRadius={"none"}
    //   display={display}
    //   zIndex={"1"}
    //   w={{ base: "full", md: "56px", lg: "240px" }}
    //   mr={{ base: "none", md: "20px" }}
    //   h={"calc(100vh - 5px)"}
    //   mt={"56px"}
    // >
    //   <Flex direction={"column"} h={"full"}>
    //     <CardHeader>
    //       <Header appName={appName} onClose={onClose} />
    //     </CardHeader>
    //     <CardBody
    //       p={{ base: "20px", md: "0px", lg: "20px" }}
    //       w={{ base: "full", md: "40px", lg: "full" }}
    //       alignSelf={"center"}
    //      w
    //       overflowY="auto"
    //     >
    //
    //     </CardBody>
    //
    //   </Flex>
  );
};
export default Sidebar;
