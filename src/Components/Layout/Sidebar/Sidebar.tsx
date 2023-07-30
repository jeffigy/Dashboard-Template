"use client";
import { Card, CloseButton, Flex, Text, useColorMode } from "@chakra-ui/react";
import React from "react";
import NavLink from "./NavLink";
import { BellIcon } from "@chakra-ui/icons";

type SidebarProps = {
  onClose: () => void;
  display?: {};
  appName: string;
};

const Sidebar: React.FC<SidebarProps> = ({ appName, onClose, display }) => {
  const { colorMode } = useColorMode();
  return (
    <Card
      borderRadius={{ base: "none", md: "md" }}
      display={display}
      // bg={colorMode === "dark" ? "brand.600" : "brand.300"}
      as={Card}
      w={{ base: "full", md: "56px", lg: "240px" }}
      h={"100%"}
      mr={{ base: "none", md: "20px" }}
    >
      <Flex
        align={"center"}
        px={{ base: "20px", md: "0px", lg: "20px" }}
        direction={"column"}
      >
        <Flex
          h={"80px"}
          mb={"50px"}
          alignItems={"center"}
          justifyContent={{ base: "space-between", md: "center" }}
          // direction={"column"}
        >
          <Text display={{ base: "block", md: "none", lg: "block" }}>
            {appName}
          </Text>

          <CloseButton
            display={{ base: "flex", md: "none" }}
            border={"1px solid"}
            onClick={onClose}
          />
        </Flex>
        <NavLink />
      </Flex>
    </Card>
  );
};
export default Sidebar;
