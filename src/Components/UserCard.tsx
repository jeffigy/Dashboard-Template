import { Avatar, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

type UserCardProps = {};

const UserCard: React.FC<UserCardProps> = () => {
  return (
    <Flex align={"center"} p={"5px"} gap={"5px"}>
      <Avatar size={"sm"} /> <Text flexGrow={1}>John Doe</Text>
    </Flex>
  );
};
export default UserCard;
