"use client";
import Heading from "@/Components/Header";
import { Flex } from "@chakra-ui/react";
import React from "react";

type layoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <Flex h={"calc(100vh - 96px)"} gap={"20px"} direction={"column"}>
      <Heading label="Home" />
      {children}{" "}
    </Flex>
  );
};
export default layout;
