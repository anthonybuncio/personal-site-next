import type { Metadata } from "next";

import Navigation from "@/components/Template/Navigation";
import SideBar from "@/components/Template/SideBar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Anthony Buncio",
    default: "Anthony Buncio | Software Engineer",
  },
  description: "Anthony Buncio's personal website.",
  icons: {
    icon: "/images/favicon/favicon-32x32.png",
    apple: "/images/favicon/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="//fonts.googleapis.com/css?family=Source+Sans+Pro:400,700|Raleway:400,800,900"
          rel="stylesheet"
        />
      </head>
      <body>
        <div id="wrapper">
          <Navigation />
          <div id="main">{children}</div>
          <SideBar />
        </div>
        {/* {process.env.NEXT_PUBLIC_GA_TRACKING_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_TRACKING_ID} />
        )} */}
      </body>
    </html>
  );
}
