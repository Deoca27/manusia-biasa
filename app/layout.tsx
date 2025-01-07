// import file "globals.css"
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
        <header></header>

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
