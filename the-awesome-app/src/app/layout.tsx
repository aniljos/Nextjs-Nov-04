import type { Metadata } from "next";
import "./globals.css";

import ReduxProvider from "@/state/redux/ReduxProvider";
import { AppThemeContextProvider } from "@/state/context/AppThemeContext";
import AppBar from "@/components/AppBar";




export const metadata: Metadata = {
  title: "Next React",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <AppThemeContextProvider>
      <ReduxProvider>
        <html lang="en">
          <body>
            <div className="container">
              <AppBar/>
              <main>
                {children}
              </main>

            </div>
          </body>
        </html>
      </ReduxProvider>
    </AppThemeContextProvider>

  );
}
