"use client";
import StatCard from "@/Components/StatCard";
import UserCard from "@/Components/UserCard";
import {
  Box,
  Text,
  Card,
  GridItem,
  SimpleGrid,
  VStack,
  Flex,
  Icon,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { User, Users, AlertTriangle, Calendar } from "react-feather";
type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} gap={"10px"}>
        <StatCard
          label={"Patients"}
          value={10}
          icon={User}
          colorScheme={"green"}
        />
        <StatCard
          label={"Patients"}
          value={10}
          icon={User}
          colorScheme={"green"}
        />
        <StatCard
          label={"Social Workers"}
          value={10}
          icon={Users}
          colorScheme={"teal"}
        />
        <StatCard
          label={"High Risk Patients"}
          value={5}
          icon={AlertTriangle}
          colorScheme={"red"}
        />
      </SimpleGrid>
      <SimpleGrid
        h={"calc(100vh - 216px)"}
        flexGrow={1}
        columns={{ base: 1, sm: 2, md: 3, xl: 4 }}
        gap={"10px"}
      >
        <GridItem
          //calculate the remain vertical height
          h={"inherit"}
          css={{
            "&::-webkit-scrollbar": {
              width: "10px",
            },
            "&::-webkit-scrollbar-track": {
              width: "10px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "grey",
              borderRadius: "24px",
            },
          }}
          overflowY={"auto"}
          display={{ base: "none", xl: "block" }}
        >
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </GridItem>
        <GridItem
          overflowY={"auto"}
          h={"inherit"}
          colSpan={{ base: 1, sm: 2, xl: 2 }}
          css={{
            "-ms-overflow-style": "none" /* IE and Edge */,
            "scrollbar-width": "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Card
            mb={"5px"}
            h={"300px"}
            borderRadius={"0"}
            padding={"5px"}
            variant={"unstyled"}
          ></Card>
          <Card
            mb={"5px"}
            h={"300px"}
            borderRadius={"0"}
            padding={"5px"}
            variant={"unstyled"}
          ></Card>
          <Card
            mb={"5px"}
            h={"300px"}
            borderRadius={"0"}
            padding={"5px"}
            variant={"unstyled"}
          ></Card>
        </GridItem>
        <GridItem
          h={"inherit"}
          // colSpan={{ base: 1, lg: 2, xl: 1 }}
          display={{ base: "none", md: "block" }}
        >
          <Box
            bgColor={"white"}
            mb={"10px"}
            style={{
              height: "0",
              width: "100%",
              paddingBottom: "100%",
              // border: "1px solid red",
            }}
          >
            {" "}
            react-big-calendar here
          </Box>
          <Text color={"brand.900"} fontWeight={"semibold"}>
            Appointments
          </Text>
          <Flex
            cursor={"pointer"}
            bgColor={"white"}
            padding={"5px"}
            align={"center"}
          >
            <Flex p={"5px"} bgColor={"brand.600"} mr={"5px"}>
              <Icon color={"white"} as={Calendar} boxSize={"30px"} />
            </Flex>
            <Flex direction={"column"}>
              <Text lineHeight={"120%"} fontSize={"14px"}>
                August 30,2023{" "}
              </Text>
              <Text lineHeight={"120%"} fontSize={"14px"}>
                10:00 am
              </Text>
              <Text lineHeight={"120%"} color={"gray.500"} fontSize={"12px"}>
                Building Name
              </Text>
            </Flex>
          </Flex>
        </GridItem>
      </SimpleGrid>
    </>
  );
};
export default page;
