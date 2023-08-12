"use client";
import Header from "@/Components/Header";
import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  IconButton,
  Input,
} from "@chakra-ui/react";
import React from "react";
import DataTable from "react-data-table-component";
import { Info } from "react-feather";

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
      <Header label={"Patient"} />
      <Flex direction={"column"} align={"center"}>
        <Box w={"container.sm"} bgColor={"white"} p={"10px"}>
          <Flex justify={"end"}>
            <Input placeholder="Search Patient" w={"base"} mb={"10px"} />
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
