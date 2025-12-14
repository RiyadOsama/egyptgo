import "./globals.css"

export const metadata = {
  title: "Admin Dashboard",
  description: "Admin dashboard application",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        {children}
      </body>
    </html>
  )
}
