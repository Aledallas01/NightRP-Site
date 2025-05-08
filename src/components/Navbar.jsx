// src/components/Navbar.jsx

import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef();

  // Chiude il menu se si clicca fuori (mobile)
  useEffect(() => {
    function handleClickOutside(e) {
      if (open && navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  return (
    <header className="relative bg-[#1c1c2e] px-4 py-3 flex items-center justify-between md:justify-start md:gap-8">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo NightRP" className="w-12 h-auto" />
        <h2 className="text-[#cbbcff] text-lg font-semibold">NightRP</h2>
      </div>

      {/* Toggle button – SOLO su mobile */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Chiudi menu' : 'Apri menu'}
        className="md:hidden text-[#d1b3ff] text-2xl focus:outline-none absolute right-4 top-4"
      >
        <i className={`fas ${open ? 'fa-times' : 'fa-plus'}`}></i>
      </button>

      {/* Nav links */}
      <nav
        ref={navRef}
        className={`
          ${open ? 'block' : 'hidden'}
          absolute top-full right-0 mt-2 w-56 bg-[#2a2a40] rounded-md shadow-lg p-4
          md:static md:block md:bg-transparent md:shadow-none md:p-0 md:w-auto
        `}
      >
        <ul className="flex flex-col gap-3 md:flex-row md:gap-6">
          <li>
            <Link to="/" className="flex items-center gap-2 text-[#d1b3ff] hover:text-[#a16eff]">
              <i className="fas fa-house"></i> Home
            </Link>
          </li>
          <li className="relative group">
            <Link
              to="/games"
              className="flex items-center gap-2 text-[#d1b3ff] hover:text-[#a16eff]"
            >
              <i className="fas fa-gamepad"></i> Modalità ▾
            </Link>
            <ul className="dropdown-content hidden group-hover:block absolute left-0 mt-2 bg-[#2a2a40] border border-[#6a0dad] rounded-md">
              {['skyblock', 'kitpvp', 'prison', 'roleplay'].map(mode => (
                <li key={mode}>
                  <Link
                    to={`/games#${mode}`}
                    className="block px-4 py-2 text-[#cbbcff] hover:bg-[#3a3a55]"
                  >
                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="/about" className="flex items-center gap-2 text-[#d1b3ff] hover:text-[#a16eff]">
              <i className="fas fa-users"></i> Chi Siamo
            </Link>
          </li>
          <li>
            <Link to="/forum" className="flex items-center gap-2 text-[#d1b3ff] hover:text-[#a16eff]">
              <i className="fas fa-envelope"></i> Forum
            </Link>
          </li>
          <li>
            <Link to="/store" className="flex items-center gap-2 text-[#d1b3ff] hover:text-[#a16eff]">
              <i className="fas fa-shopping-cart"></i> Store
            </Link>
          </li>
        </ul>
      </nav>
    </header>
);
}
