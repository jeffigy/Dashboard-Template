"use client";
import StatCard from "@/Components/StatCard";
import UserCard from "@/Components/UserCard";
import { Box, Card, GridItem, SimpleGrid, VStack } from "@chakra-ui/react";
import React from "react";
import { User, Users, AlertTriangle } from "react-feather";
type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={"10px"}>
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
          <Card borderRadius={"0"} padding={"5px"} variant={"unstyled"}>
            <Box
              style={{
                height: "0",
                width: "100%",
                paddingBottom: "100%",
                border: "1px solid red",
              }}
            ></Box>
          </Card>
        </GridItem>
      </SimpleGrid>
    </>
  );
};
export default page;
