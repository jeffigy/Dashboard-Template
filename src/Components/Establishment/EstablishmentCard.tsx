import { Card, Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import { MoreVertical } from "react-feather";

type EstablishmentCardProps = {
  name: string;
  address: string;
  onClick: () => void;
};

const EstablishmentCard: React.FC<EstablishmentCardProps> = ({
  onClick,
  name,
  address,
}) => {
  return (
    <Card
      variant={"unstyled"}
      p={"10px"}
      w={{ base: "300px", sm: "400px", md: "550px", lg: "800px" }}
      mb={"10px"}
    >
      <Flex align={"center"} justify={"space-between"} cursor={"pointer"}>
        <Flex direction={"column"}>
          <Text fontSize={"18px"} color={"brand.900"} fontWeight={"bold"}>
            {name}
          </Text>
          <Text fontSize={"14px"} color={"brand.900"}>
            {address}
          </Text>
        </Flex>
        <IconButton
          variant={"ghost"}
          aria-label="action"
          as={MoreVertical}
          color={"brand.600"}
          size={"xs"}
          onClick={onClick}
        />
      </Flex>
    </Card>
  );
};
export default EstablishmentCard;
