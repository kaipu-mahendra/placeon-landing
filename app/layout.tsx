import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

import { GoogleAnalytics } from "@/components/google-analytics";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "PlaceOn - AI-Powered Placement Coach for Students",
  description:
    "AI-powered placement coach helping students analyze resumes, identify skill gaps, prepare for interviews, and land their dream offers.",
  keywords: [
    "placement preparation",
    "resume analyzer",
    "AI placement coach",
    "campus placements",
    "career roadmap",
    "interview preparation",
    "student placements",
    "job readiness",
  ],
  metadataBase: new URL("https://placeon.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PlaceOn",
    description: "From Learning to Landing Offers",
    url: "https://placeon.in",
    siteName: "PlaceOn",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PlaceOn - AI-Powered Placement Coach",
    description:
      "AI-powered placement coach helping students analyze resumes, identify skill gaps, prepare for interviews, and land their dream offers.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
        <ClerkProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
