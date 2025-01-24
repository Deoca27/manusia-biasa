// import file "globals.css"
import Link from "next/link"
import "./globals.css"
import { Home, Info, ShoppingCart, Mail, User } from 'lucide-react'

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
        <header className="flex justify-between items-center px-5 py-4 text-gray-900 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href={"/admin/admin_controller"} className="text-lg font-bold hover:text-blue-400 transition">ke admin(sementara)</Link>
            <nav className="flex justify-end">
              <Link href={"/"} className="group flex items-center hover:text-blue-300 transition ml-2.5">
                <Home className="mr-2 group-hover:scale-110 transition" size={20} />
                <span>Home</span>
              </Link>
              <Link href={"/about"} className="group flex items-center hover:text-blue-300 transition ml-2.5">
              <Info className="mr-2 group-hover:scale-110 transition" size={20} />
              About
              </Link>
              <Link href={"/product"} className="group flex items-center hover:text-blue-300 transition ml-2.5">
              <ShoppingCart className="mr-2 group-hover:scale-110 transition" size={20} />
              Products
              </Link>
              <Link href={"/contact"} className="hover:text-blue-400 transition ml-2.5">Contact</Link>
            </nav>
          </div>
        </header>

        {/* Area Conten */}
        <section className="min-h-[calc(100vh-128px)] bg-gray-100 py-10">
          {children}
        </section>

        {/* Area Footer */}
        <footer className="flex justify-center bg-gray-900 text-white py-2.5">
          Copyright &copy; 2025 - Manusia Biasa Team
        </footer>
      </body>
    </html>
  )
}
