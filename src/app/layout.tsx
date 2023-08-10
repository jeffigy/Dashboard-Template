import { Providers } from "./provider";
import Layout from "@/Components/Layout/Layout";
import { appName } from "../../config";
import { Inter } from "next/font/google";
export const metadata = {
  title: appName,
};
const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0 }}>
        <Providers>
          <Layout appName={appName}>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
