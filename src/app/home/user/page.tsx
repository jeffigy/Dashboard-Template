import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Website - User page",
};

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return <div>user page</div>;
};
export default page;
