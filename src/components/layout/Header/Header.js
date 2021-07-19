import { useState } from 'react';
import NavLink from '../NavLink/NavLink';
import Container from '../Container/Container';

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="relative">
      <Container>
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1 md:text-2xl">
            <h1>MusicApp</h1>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/songs">Songs</NavLink>
            <NavLink to="/artists">Artists</NavLink>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <button className="focus:outline-none whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">Sign in</button>
            <button className="focus:outline-none ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
              Sign up
            </button>
          </div>
        </div>
        <div className={'absolute top-14 inset-x-0 p-2 transition transform origin-top-right md:hidden' + (navbarOpen ? '' : ' hidden')}>
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 flex flex-col">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/songs">Songs</NavLink>
              <NavLink to="/artists">Artists</NavLink>
              <NavLink to="#">Sign in</NavLink>
              <NavLink to="#">Sign up</NavLink>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
