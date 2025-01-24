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
        <header className="flex justify-between items-center px-5 py-4 bg-blue-800 text-white shadow-lg">
          <Link href={"/admin/admin_controller"} className="text-lg font-bold hover:text-blue-400 transition">ke admin(sementara)</Link>
          <nav className="flex justify-end">
            <Link href={"/"} className="hover:text-blue-400 transition">Home</Link>
            <Link href={"/about"} className="hover:text-blue-400 transition">About</Link>
            <Link href={"/product"} className="hover:text-blue-400 transition">Products</Link>
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
