// import file "globals.css"
import Link from "next/link"
import "./globals.css"

export const metadata = {
  title: 'katalog electronic',
  description: 'katalog alat electronic',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="lemonade">
      <body> 
        {/* Area Header */}
        <header className="flex justify-between items-center px-5 py-3">
          <Link href={"/"}>Ecommerce</Link>
          <nav className="flex justify-end">
            <Link href={"/"} className="mr-2.5">Home</Link>
            <Link href={"/about"} className="mx-2.5">About</Link>
            <Link href={"/"} className="mx-2.5">Products</Link>
            <Link href={"/contact"} className="ml-2.5">Contact</Link>
          </nav>
        </header>

        {/* Area Conten */}
        <section>
        {children}
        </section>

        {/* Area Footer */}
        <footer className="flex justify-center bg-blue-700 text-white py-2.5">
        Copyright &copy; 2025 - Manusia Biasa Team
        </footer>
      </body>
    </html>
  )
}
