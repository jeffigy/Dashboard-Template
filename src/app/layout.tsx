import { Providers } from "./provider";
import Layout from "@/Components/Layout/Layout";
import { appName } from "../../config";
export const metadata = {
  title: appName,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <Providers>
          <Layout appName={appName}>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
