"use client";
import {
  Box,
  Text,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const loading = () => {
  return (
    <Stack>
      <Skeleton height={"149px"} borderRadius={"5px"} />
      <Skeleton height={"73px"} borderRadius={"5px"} />
      <Skeleton height={"270px"} borderRadius={"5px"} />
      <Skeleton height={"73px"} borderRadius={"5px"} />
    </Stack>
  );
};
export default loading;
