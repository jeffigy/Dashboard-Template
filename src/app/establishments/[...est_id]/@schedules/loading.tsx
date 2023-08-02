"use client";
import {
  Box,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Text,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const loading = () => {
  return (
    <Stack>
      <Skeleton height={"350px"} />
      <Text>Appointments</Text>
      <Skeleton height={"50px"} />
      <Skeleton height={"50px"} />
      <Skeleton height={"50px"} />
      <Skeleton height={"50px"} />
    </Stack>
  );
};
export default loading;
