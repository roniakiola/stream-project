import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-slategray'>
        <div className='container mx-auto flex flex-wrap items-center justify-center'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start lg:pr-40'>
            <Link
              className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-gray-200'
              to='/'
            >
              Mahdollisuuksien Maisemia
            </Link>
            <button
              className='space-y-2 text-gray-200 cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <span className='block h-1 w-8 bg-gray-200 rounded scale-90'></span>
              <span className='block h-1 w-8 bg-gray-200 rounded scale-90'></span>
              <span className='block h-1 w-8 bg-gray-200 rounded scale-90'></span>
            </button>
          </div>
          <div
            className={`${
              navbarOpen ? 'h-44' : 'h-0'
            } transition-all delay-150 duration-200 overflow-hidden lg:h-auto`}
          >
            <ul className='flex flex-col items-center lg:flex-row list-none lg:ml-auto'>
              <li className='nav-item mt-1 lg:mt-0'>
                <Link
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-200 text-lg hover:opacity-75'
                  to='/'
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  Etusivu
                </Link>
              </li>
              <li className='nav-item mt-1 lg:mt-0'>
                <Link
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-200 text-lg hover:opacity-75'
                  to='/striimi'
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  Striimi
                </Link>
              </li>
              <li className='nav-item mt-1 lg:mt-0'>
                <Link
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-200 text-lg hover:opacity-75'
                  to='/ohjelma'
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  Ohjelma
                </Link>
              </li>
              <li className='nav-item mt-1 lg:mt-0'>
                <Link
                  className='px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-gray-200 text-lg hover:opacity-75'
                  to='/yhteystiedot'
                  onClick={() => setNavbarOpen(!navbarOpen)}
                >
                  Yhteystiedot
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
