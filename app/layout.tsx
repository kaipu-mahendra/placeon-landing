import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "PlaceOn | From Learning to Landing Offers",
  description:
    "PlaceOn is an AI-powered placement coach helping students analyze resumes, identify skill gaps, generate career roadmaps, and become placement-ready.",
  metadataBase: new URL("https://placeon.vercel.app"),
  openGraph: {
    title: "PlaceOn",
    description:
      "Your AI-powered placement coach helping students prepare smarter and land better opportunities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
