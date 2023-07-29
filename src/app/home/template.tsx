import React from "react";

type HomeTemplateProps = {
  children: React.ReactNode;
};

const HomeTemplate: React.FC<HomeTemplateProps> = ({ children }) => {
  return <div>home template {children}</div>;
};
export default HomeTemplate;
