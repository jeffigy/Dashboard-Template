import { Button, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BellIcon } from "@chakra-ui/icons";
type NavLinkProps = {};

const NavLink: React.FC<NavLinkProps> = () => {
  const displayText = useBreakpointValue({ base: true, md: false, lg: true });
  return (
    <Button
      leftIcon={<BellIcon />}
      w={{ base: "full", md: "40px", lg: "full" }}
      as={Link}
      href={"/"}
    >
      {displayText && "hehe"}
    </Button>
  );
};
export default NavLink;
