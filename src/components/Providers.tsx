"use client";

import MUIProvider from "./Providers/MUIProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <MUIProvider options={{ key: "mui" }}>{children}</MUIProvider>;
}
