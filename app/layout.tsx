import './globals.css'
import NavBar from './NavBar'
import Footer from './Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="flex flex-col min-h-screen">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
