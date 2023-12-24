import type { Metadata } from "next";
import { FC } from "react";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Base Code NextJS",
};

type RootLayout = {
  children: React.ReactNode;
};

const RootLayout: FC<RootLayout> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
