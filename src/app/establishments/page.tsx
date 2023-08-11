"use client";
import EstablishmentCard from "@/Components/Establishment/EstablishmentCard";
import Header from "@/Components/Header";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  Flex,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MoreVertical } from "react-feather";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <>
      <Header label="Establishments" />
      <Flex direction={"column"} align={"center"}>
        <Flex justify={"center"} py={"20px"} w={"full"} bgColor={"brand.bg"}>
          <InputGroup w={"container.md"} size={"lg"} bgColor={"white"}>
            <Input placeholder="Search Establishment" />
            <InputRightElement>
              <Icon as={SearchIcon} color="gray.300" />
            </InputRightElement>
          </InputGroup>
        </Flex>

        <Flex direction={"column"}>
          <EstablishmentCard
            address="Address here"
            name="Establishment Name"
            onClick={() => {}}
          />
          <EstablishmentCard
            address="Address here"
            name="Establishment Name"
            onClick={() => {}}
          />
          <EstablishmentCard
            address="Address here"
            name="Establishment Name"
            onClick={() => {}}
          />
        </Flex>
      </Flex>
    </>
  );
};
export default page;
