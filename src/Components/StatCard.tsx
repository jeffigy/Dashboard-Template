import { Card, Text, Flex, Icon } from "@chakra-ui/react";
import React from "react";

type StatCardProps = {
  label: string;
  value: number;
  icon: any;
  colorScheme: string;
};

const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  icon,
  colorScheme,
}) => {
  return (
    <Card justify={"center"} p={"10px"} variant={"unstyled"} borderRadius={0}>
      <Flex justify={"space-between"} align={"center"}>
        <Icon
          opacity={"50%"}
          as={icon}
          boxSize={"40px"}
          color={`${colorScheme}.600`}
        />
        <Flex align={"end"} direction={"column"}>
          <Text
            lineHeight={"1"}
            color={`${colorScheme}.700`}
            fontWeight={"medium"}
            fontSize={"36px"}
          >
            {value}
          </Text>
          <Text color={`${colorScheme}.700`}>{label}</Text>
        </Flex>
      </Flex>
    </Card>
  );
};
export default StatCard;
