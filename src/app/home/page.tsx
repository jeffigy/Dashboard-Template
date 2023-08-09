"use client";
import StatCard from "@/Components/StatCard";
import UserCard from "@/Components/UserCard";

import {
  Box,
  Text,
  Card,
  GridItem,
  SimpleGrid,
  Flex,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import {
  User,
  Users,
  AlertTriangle,
  Calendar as CalendarIcon,
} from "react-feather";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, momentLocalizer } from "react-big-calendar";
const localizer = momentLocalizer(moment);
import moment from "moment";
import events from "../event";

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
      <SimpleGrid h={"calc(100vh - 216px)"} columns={4} gap={"10px"}>
        <GridItem
          colSpan={{ base: 4, xl: 3 }}
          bgColor={"white"}
          padding={"5px"}
        >
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            defaultDate={new Date(2015, 3, 1)}
            views={{
              month: true,
            }}
          />
        </GridItem>
        <GridItem
          bgColor={"white"}
          padding={"5px"}
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
        </GridItem>
      </SimpleGrid>
    </>
  );
};
export default page;
