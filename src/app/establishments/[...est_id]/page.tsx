"use client";
import { GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

type pageProps = {
  params: {
    est_id: string;
  };
};

const page: React.FC<pageProps> = ({ params }) => {
  return <Text>Establishment ID: {params.est_id}</Text>;
};
export default page;
