import { Text } from "@chakra-ui/react";

type HeaderProps = {
  label: string;
};

const Header: React.FC<HeaderProps> = ({ label }) => {
  return (
    <Text as={"h1"} color={"brand.900"}>
      {label}
    </Text>
  );
};
export default Header;
