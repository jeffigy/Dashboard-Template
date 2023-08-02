"use client";
import { Center, Flex, useBreakpointValue } from "@chakra-ui/react";

export default function Home() {
  const screenWidth = useBreakpointValue({
    base: "base screen width",
    sm: "sm screen width",
    md: "md screen width",
    lg: "lg screen width",
    xl: "xl screen width",
  });
  return <Flex>hehe</Flex>;
}
