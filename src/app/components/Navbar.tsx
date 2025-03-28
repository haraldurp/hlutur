import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="p-4 shadow">
      <ul className="flex gap-6">
        <li><Link href="/">Heim</Link></li>
        <li><Link href="/companies">Fyrirtæki til sölu</Link></li>
        <li><Link href="/valuation">Verðmat</Link></li>
        <li><Link href="/register">Skrá fyrirtæki</Link></li>
      </ul>
    </nav>
  )
}