"use client";
import {
  Card,
  Flex,
  IconButton,
  Image as ChakraImage,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";
type NavbarProps = {
  onOpen: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ onOpen }) => {
  return (
    <Flex px={"10px"} justify={"center"} as={Card} height={"56px"}>
      <Flex align={"center"}>
        {/* Hamburger Icon */}
        <IconButton
          aria-label="color mode"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          variant={"outline"}
          display={{ base: "block", md: "none" }}
        />{" "}
        <Spacer display={{ base: "block", md: "none" }} />
        <ChakraImage as={Image} boxSize={"30px"} alt="logo" src={Logo} />
        <Spacer />
      </Flex>
    </Flex>
  );
};
export default Navbar;
