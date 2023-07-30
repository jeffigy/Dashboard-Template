import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";
import { Button } from "./Button";
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const colors = {
  brand: {
    50: "#DAF6FF",
    100: "#ADDEFF",
    200: "#7CC7FF",
    300: "#4AB1FF",
    400: "#1A9AFF",
    500: "#0081E6",
    600: "#0064B4",
    700: "#004782",
    800: "#002B51",
    900: "#000F21",
    bg: "#F5F6FA",
  },
};

const theme = extendTheme({
  config,
  colors,
  components: {
    Button: Button,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        // bg: props.colorMode === "dark" ? "brand.900" : "brand.bg",
        // bg: "brand.bg",
      },
    }),
  },
});
export default theme;
