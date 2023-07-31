"use client";
import { CloseButton, Flex, Spacer, Text } from "@chakra-ui/react";
import React from "react";

type HeaderProps = { onClose: () => void; appName: string };

const Header: React.FC<HeaderProps> = ({ onClose, appName }) => {
  return (
    <Flex
      display={{ base: "flex", md: "none", lg: "flex" }}
      justify={{ base: "space-between", md: "center" }}
      align={"center"}
    >
      <Text color={"brand.200"} fontWeight={"bold"} fontSize={"30px"}>
        {appName}
      </Text>
      <CloseButton
        display={{ base: "flex", md: "none" }}
        border={"1px solid"}
        onClick={onClose}
      />
    </Flex>
  );
};
export default Header;
