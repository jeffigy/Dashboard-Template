"use client";
import StatCard from "@/Components/StatCard";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { User, Users, AlertTriangle } from "react-feather";
type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <Flex gap={"20px"} direction={"column"}>
      <Text as={"h1"} color={"brand.900"}>
        Home
      </Text>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={"10px"}>
        <StatCard
          label={"Patients"}
          value={100}
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
    </Flex>
  );
};
export default page;
