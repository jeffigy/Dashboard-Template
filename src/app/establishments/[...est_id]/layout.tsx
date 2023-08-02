"use client";
import { SimpleGrid, GridItem } from "@chakra-ui/react";
import React from "react";

type EstablishmentsLayoutProps = {
  children: React.ReactNode;
  feeds: React.ReactNode;
  patients: React.ReactNode;
  schedules: React.ReactNode;
};

const EstablishmentsLayout: React.FC<EstablishmentsLayoutProps> = ({
  children,
  feeds,
  patients,
  schedules,
}) => {
  return (
    <>
      {children}
      <SimpleGrid columns={4} gap={"10px"}>
        <GridItem>{patients}</GridItem>
        <GridItem colSpan={2}>{feeds}</GridItem>
        <GridItem>{schedules}</GridItem>
      </SimpleGrid>
    </>
  );
};
export default EstablishmentsLayout;
