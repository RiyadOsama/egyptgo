import "./globals.css";
import Providers from "@/components/providers";

export const metadata = {
  title: "EgyptGo",
  icons:{
    icon: "/favicon.svg"
  },
  description: "Egypt travel and tourism platform",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
