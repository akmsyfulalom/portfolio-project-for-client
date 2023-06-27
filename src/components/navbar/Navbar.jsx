import DarkModeToggle from '@/utils/Buttons/DarkModeToggle';
import Link from 'next/link';

function Navbar({ dark = false }) {
  const menuItems = [
    {
      id: 1,
      name: "Home",
      url: "/"
    },
    {
      id: 3,
      name: "Gallery",
      url: "/gallery"
    },
    {
      id: 4,
      name: "Blog",
      url: "/blog"
    },
    {
      id: 5,
      name: "About",
      url: "/about"
    },
    {
      id: 6,
      name: "Contact",
      url: "/contact"
    }
  ];

  return (
    <nav className={`navbar z-100  ${dark ? 'bg-base-900' : 'bg-base-100'}`} tabIndex={100}  >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-50">
            {menuItems?.map(menuItem => (
              <li key={menuItem?.id}>
                <Link href={menuItem?.url} className="py-2">{menuItem?.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">Azo4Life</Link>
      </div>
      <div className="navbar-center hidden  lg:flex"  style={{ zIndex: 100 }}>
        <ul className="menu menu-horizontal px-1">
          {menuItems?.map(menuItem => (
            <li key={menuItem?.id}>
              <Link href={menuItem?.url}className={`px-5 ${dark ? 'text-black' : 'text-white'}`}>{menuItem?.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <Link href="/" className={dark ? 'Road Map (Dark)' : 'Road Map'}>
         <DarkModeToggle/>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
