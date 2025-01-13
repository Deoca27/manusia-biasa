import Link from "next/link"
//import globals.css
import "../globals.css"
//import font awesome
import "@fortawesome/fontawesome-svg-core/styles.css"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="layout-admin min-h-screen flex">

      {/* Sidebar */}
      <aside className="w-60 bg-base-100 p-4 shadow-md flex flex-col justify-between">
        <ul className="menu">
          <li>
            <Link href="/admin" className="btn btn-ghost">Admin Controller</Link>
          </li>
          <li>
            <Link href="/admin/barang" className="btn btn-ghost">Item Controller</Link>
          </li>
        </ul>
        <div className="mt-auto mb-8">
          <Link href="/" className="btn btn-outline btn-error w-full">
            Log Out
          </Link>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 mx-8 my-4">
        {children}
      </main>

    </div>
  )
}
