import React from "react";

type CustomSectionProps = {
  children: React.ReactNode;
};

const CustomSection: React.FC<CustomSectionProps> = ({ children }) => {
  return (
    <div
      style={{
        height: "100vh",
        // add background color
        backgroundColor: "red",
        // add text color
        color: "white",
        // add text align
        textAlign: "center",
        // add vertical align
        display: "flex",
        alignItems: "center",
        // add horizontal align
        justifyContent: "center",
        // add font size
        fontSize: "2rem",
        // add font weight
        fontWeight: "bold",
        // add font family
        fontFamily: "sans-serif",
      }}
    >
      {children}
    </div>
  );
};
export default CustomSection;
