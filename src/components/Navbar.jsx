import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

 const navLinks = [
  { path: '/', label: 'Home' },
  ...(user ? [
    { path: '/chat', label: 'Chat' },
    { path: '/notes', label: 'Notes' },
    { path: '/quiz', label: 'Quiz' },
    { path: '/image-generator', label: 'Image Generator' }, // ✅ New Link
  ] : []),
  ...(user ? [] : [{ path: '/login', label: 'Login' }]),
];


  return (
    <nav className={`sticky top-0 z-50 transition duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-md px-6 py-4`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600 dark:text-white">Mentora</div>

        {/* Dark Mode Toggle */}
        <div className="md:hidden mr-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-indigo-100 dark:bg-gray-800 p-2 rounded-full shadow-md hover:scale-105 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-700 font-semibold dark:text-indigo-300'
                  : 'text-gray-600 hover:text-blue-500 dark:text-gray-300'
              }
            >
              {link.label}
            </NavLink>
          ))}

          {user && (
            <>
              <span className="text-gray-600 dark:text-gray-300 ml-4">👋 {user.name}</span>
              <button
                onClick={() => {
                  logout();
                  navigate('/login');
                }}
                className="ml-2 text-red-600 hover:underline text-sm"
              >
                Logout
              </button>
            </>
          )}

          {/* Dark mode toggle for desktop */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 bg-indigo-100 dark:bg-gray-800 p-2 rounded-full shadow-md hover:scale-105 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className={`md:hidden mt-3 bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 space-y-3`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-700 font-semibold dark:text-indigo-300'
                  : 'text-gray-600 hover:text-blue-500 dark:text-gray-300'
              }
            >
              {link.label}
            </NavLink>
          ))}

          {user && (
            <>
              <span className="text-gray-600 dark:text-gray-300">👋 {user.name}</span>
              <button
                onClick={() => {
                  logout();
                  navigate('/login');
                }}
                className="text-red-600 hover:underline text-sm"
              >
                Logout
              </button>
            </>
          )}
          

          {/* Dark mode toggle for mobile dropdown */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-2 bg-indigo-100 dark:bg-gray-700 p-2 rounded-full shadow-md hover:scale-105 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
