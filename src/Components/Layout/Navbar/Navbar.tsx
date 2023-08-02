"use client";
import {
  Card,
  Flex,
  IconButton,
  Image as ChakraImage,
  Spacer,
  Avatar,
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
    <Flex
      ml={{ base: 0, md: "56px", lg: "240px" }}
      px="10px"
      position="sticky"
      top="0"
      height="56px"
      zIndex="1"
      alignItems="center"
      bg="white"
      borderBottomWidth="1px"
      borderBottomColor="gray.200"
      // ml={{ base: 0, md: "56px", lg: "240px" }}
      // w={"full"}

      justify={"center"}
    >
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
      <Avatar boxSize={"30px"} />
    </Flex>
  );
};
export default Navbar;
