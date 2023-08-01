import { Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
type NavLinkProps = {
  name: string;
  icon: any;
  to: string;
  onClose: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({ name, icon, to, onClose }) => {
  const pathname = usePathname();
  const isActive = pathname === to;
  const color = useColorModeValue("gray.500", "gray.200");
  const bgColor = useColorModeValue("brand.50", "brand.100");
  return (
    <Flex
      as={Link}
      href={to}
      justifyContent={{ base: "center", lg: "left" }}
      color={isActive ? "brand.500" : color}
      my={"5px"}
      onClick={onClose}
      borderRadius={"md"}
      borderLeft={{
        base: "none",
        lg: isActive ? "4px solid" : "4px solid transparent",
      }}
      borderColor={isActive ? "brand.500" : "transparent"}
      pl={{ base: "10px", md: "0px", lg: "10px" }}
      py={"10px"}
      bg={isActive ? bgColor : "transparent"}
    >
      {icon && (
        <Icon
          boxSize={"20px"}
          as={icon}
          mr={{ base: "20px", md: "0px", lg: "20px" }}
        />
      )}
      <Text
        display={{ base: "block", md: "none", lg: "block" }}
        fontSize={"15px"}
      >
        {name}
      </Text>
    </Flex>
  );
};
export default NavLink;
