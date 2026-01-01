import "./globals.css";
import Providers from "@/components/providers";

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard application",
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
