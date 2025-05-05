const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Program', href: '/programs' },
  { label: 'UMKM', href: '/smes' },
  { label: 'Artikel', href: '/news' },
]

const pathname = window.location.pathname

export default function Header() {
  return (
    <div className="drawer">
      <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <header className="bg-white shadow-md navbar">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="link link-hover flex font-bold items-center">
              <span className="ml-2 text-red-700 font-bold text-xl">FOKUS</span>
            </a>

            <nav className="hidden md:flex space-x-6">
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
        <ul className="menu p-4 w-64 bg-white text-base-content h-full">
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
        </ul>
      </div>
    </div>
  )
}
