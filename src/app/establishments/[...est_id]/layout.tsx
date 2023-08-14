"use client";
import Header from "@/Components/Header";
import {
  SimpleGrid,
  GridItem,
  Box,
  Text,
  Flex,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { Search } from "react-feather";

type EstablishmentsLayoutProps = {
  children: React.ReactNode;
};

const EstablishmentsLayout: React.FC<EstablishmentsLayoutProps> = ({
  children,
}) => {
  return (
    <>
      <Header label="Establishment Details" />
      {children}
      <SimpleGrid columns={4} gap={"10px"}>
        <GridItem colSpan={3}>asdf</GridItem>
        <GridItem>
          {" "}
          <Box
            mb={"10px"}
            w={"full"}
            p={"10px"}
            border={"5px solid"}
            borderColor={"brand.900"}
            bgColor={"brand.100"}
          >
            <Text
              overflow={"hidden"}
              lineHeight={0.9}
              fontSize={"24px"}
              fontWeight={"bold"}
            >
              Establishment Name
            </Text>
            <Text>Address</Text>
            <Text lineHeight={0.9}>Owner</Text>
          </Box>
          <Flex direction={"column"}>
            <Flex align={"center"} justify={"space-between"}>
              {" "}
              <Text fontWeight={"semibold"}>Patients</Text>
              <InputGroup w={"200px"} bgColor={"white"} size="sm">
                <Input
                  // border={"none"}
                  pr="4.5rem"
                  type="text"
                  placeholder="Search"
                  _placeholder={{ color: "gray.400" }}
                />
                <InputRightElement width="4.5rem">
                  <Icon as={Search} color={"gray.400"} />
                </InputRightElement>
              </InputGroup>
            </Flex>
          </Flex>
        </GridItem>
      </SimpleGrid>
    </>
  );
};
export default EstablishmentsLayout;
