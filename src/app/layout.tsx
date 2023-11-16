import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container } from "@mui/material";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import "@/styles/global.css";

const inter = Inter({
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Natural Cat Food",
  description: "Natural Cat Food App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ua">
      <body className={inter.className}>
        <Providers>
          <Container
            sx={{
              position: "relative",
              height: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              pt: 3,
            }}
            maxWidth="xs"
          >
            <Header />
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  );
}
