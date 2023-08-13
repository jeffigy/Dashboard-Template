"use client";
import Header from "@/Components/Header";
import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import DataTable from "react-data-table-component";
import { Info, Search } from "react-feather";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
    },
    {
      id: 2,
      name: "Jane Doe",
    },
  ];
  const columns = [
    {
      name: "Name",
      selector: (row: any) => row.name,
    },
    {
      name: "Actions",
      selector: (row: any) => (
        <IconButton
          colorScheme="teal"
          icon={<Info />}
          aria-label="action"
          size={"sm"}
        />
      ),
    },
  ];

  return (
    <>
      <Header label={"Patients"} />
      <Flex direction={"column"} align={"center"}>
        <Box
          w={{ base: "300px", sm: "450px", md: "container.sm" }}
          bgColor={"white"}
          p={"10px"}
        >
          <Flex justify={"end"}>
            <InputGroup w="base">
              <Input placeholder="Search Patient" mb={"10px"} />
              <InputRightElement>
                <Search />
              </InputRightElement>
            </InputGroup>
          </Flex>

          <Box border={"1px solid"} borderColor={"gray.100"}>
            {" "}
            <DataTable columns={columns} data={data} />
          </Box>
        </Box>
      </Flex>
    </>
  );
};
export default page;
