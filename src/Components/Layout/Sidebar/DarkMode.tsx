import {
  Flex,
  FormControl,
  FormLabel,
  Spacer,
  Switch,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

type DarkModeProps = {};

const DarkMode: React.FC<DarkModeProps> = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <FormControl display="flex" alignItems="center" justifyContent={"center"}>
      <FormLabel
        htmlFor="dark-mode"
        mb="0"
        display={{ base: "block", md: "none", lg: "block" }}
      >
        Dark Mode
      </FormLabel>
      <Spacer />
      <Switch
        // colorScheme="brand"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
    </FormControl>
  );
};
export default DarkMode;
