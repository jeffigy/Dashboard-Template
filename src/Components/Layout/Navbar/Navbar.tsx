"use client";
import {
  Box,
  Card,
  Button,
  Flex,
  useColorMode,
  IconButton,
  Image as ChakraImage,
  Spacer,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { SunIcon, MoonIcon, HamburgerIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Logo from "@/assets/Logo.svg";
type NavbarProps = {
  onOpen: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ onOpen }) => {
  return (
    <Flex px={"10px"} justify={"center"} as={Card} height={"56px"}>
      <Flex align={"center"}>
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
