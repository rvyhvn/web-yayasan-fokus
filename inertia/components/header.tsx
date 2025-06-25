import { usePage, Link } from '@inertiajs/react'
import fokusLogo from '../public/images/logo-fokus.png'

const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Program', href: '/programs' },
  { label: 'UMKM', href: '/smes' },
  { label: 'Artikel', href: '/news' },
]

const pathname = window.location.pathname

export default function Header() {
  const { isAuth } = usePage().props

  return (
    <div className="drawer">
      <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <header className="bg-white shadow-md navbar">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="link link-hover flex font-bold items-center">
              <img src={fokusLogo} alt="logo fokus" className="h-20 w-auto" />
            </a>

            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-gray-700 hover:text-primary-500 transition duration-150 ease-in-out ${
                    pathname === item.href ? 'text-red-500 font-bold' : ''
                  }`}
                >
                  {item.label}
                </a>
              ))}

              {isAuth ? (
                <Link
                  href="/auth/logout"
                  method="post"
                  as="button"
                  className="text-red-700 hover:text-red-800 font-semibold"
                >
                  Logout
                </Link>
              ) : (
                <Link href="/auth/login" className="text-red-700 hover:text-black font-semibold">
                  Login
                </Link>
              )}
            </nav>

            <label htmlFor="drawer-toggle" className="btn btn-ghost md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="red"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
        </header>
      </div>

      <div className="drawer-side">
        <label htmlFor="drawer-toggle" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 bg-white text-base-content h-full space-y-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`text-gray-700 hover:text-primary-500 transition duration-150 ease-in-out ${
                  pathname === item.href ? 'text-red-500 font-bold' : ''
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}

          <li>
            {isAuth ? (
              <Link
                href="/auth/logout"
                method="post"
                as="button"
                className="text-red-700 hover:text-red-800 font-semibold"
              >
                Logout
              </Link>
            ) : (
              <Link href="/auth/login" className="text-red-700 hover:text-black font-semibold">
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  )
}
