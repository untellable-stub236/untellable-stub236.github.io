import "./globals.css";
import { Metadata } from "next";
import { Layout } from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "CeloHT — Web3 Education, Agents & Reforestation",
  description: "Official CeloHT website providing blockchain education, agent network resources, and environmental reforestation initiatives.",
  icons: {
    icon: "/favicon.ico"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
