"use client";
import { Box, Card, Button, Flex, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex px={"20px"} justify={"center"} as={Card} height={"56px"}>
      <Flex>
        <Button as={Link} href={"/dashboard"}>
          Dashboard page
        </Button>
        <Button as={Link} href={"/home/user"}>
          user page
        </Button>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </Flex>
    </Flex>
  );
};
export default Navbar;
