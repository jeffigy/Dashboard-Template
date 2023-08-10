"use client";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <Flex direction={"column"} align={"center"}>
      <Card w={"container.sm"} zIndex={1} position={"fixed"}>
        <InputGroup size={"lg"}>
          <Input placeholder="Search Establishment" />
          <InputRightElement>
            <Icon as={SearchIcon} color="gray.300" />
          </InputRightElement>
        </InputGroup>
      </Card>
      <Flex mt={"66px"} direction={"column"}>
        <Card
          variant={"unstyled"}
          height={"200px"}
          w={"550px"}
          mb={"10px"}
        ></Card>
        <Card
          variant={"unstyled"}
          height={"200px"}
          w={"550px"}
          mb={"10px"}
        ></Card>
        <Card
          variant={"unstyled"}
          height={"200px"}
          w={"550px"}
          mb={"10px"}
        ></Card>
        <Card
          variant={"unstyled"}
          height={"200px"}
          w={"550px"}
          mb={"10px"}
        ></Card>
        <Card
          variant={"unstyled"}
          height={"200px"}
          w={"550px"}
          mb={"10px"}
        ></Card>
        <Card
          variant={"unstyled"}
          height={"200px"}
          w={"550px"}
          mb={"10px"}
        ></Card>
      </Flex>
    </Flex>
  );
};
export default page;
