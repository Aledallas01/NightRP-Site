// src/components/Navbar.jsx

import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#1c1c2e] p-4 flex items-center justify-between md:justify-start md:gap-8">
      {/* Logo */}
      <div className="logo flex items-center gap-2">
        <img src={logo} alt="Logo NightRP" className="w-12" />
        <h2 className="text-[#cbbcff] text-lg">NightRP</h2>
      </div>

      {/* Toggle button – visibile solo su mobile */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Chiudi menu' : 'Apri menu'}
        className="text-[#d1b3ff] text-2xl md:hidden"
      >
        <i className={`fas ${open ? 'fa-times' : 'fa-plus'}`}></i>
      </button>

      {/* Menu links */}
      <nav
        className={`
          ${open ? 'block' : 'hidden'}
          absolute top-full right-4 bg-[#2a2a40] rounded-md shadow-lg p-4
          md:static md:block md:bg-transparent md:shadow-none md:p-0
        `}
      >
        <ul className="flex flex-col gap-3 md:flex-row md:gap-6">
          <li>
            <Link to="/" className="flex items-center gap-1 hover:text-[#a16eff]">
              <i className="fas fa-house"></i> Home
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/games"
              className="flex items-center gap-1 hover:text-[#a16eff]"
            >
              <i className="fas fa-gamepad"></i> Modalità ▾
            </Link>
            {/* dropdown */}
            <ul className="dropdown-content hidden absolute left-0 mt-2 bg-[#2a2a40] border border-[#6a0dad] rounded-md">
              <li>
                <Link to="/games#skyblock" className="block px-4 py-2 hover:bg-[#3a3a55]">
                  Skyblock
                </Link>
              </li>
              <li>
                <Link to="/games#kitpvp" className="block px-4 py-2 hover:bg-[#3a3a55]">
                  KitPvP OP
                </Link>
              </li>
              <li>
                <Link to="/games#prison" className="block px-4 py-2 hover:bg-[#3a3a55]">
                  Prison
                </Link>
              </li>
              <li>
                <Link to="/games#roleplay" className="block px-4 py-2 hover:bg-[#3a3a55]">
                  Roleplay
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/about" className="flex items-center gap-1 hover:text-[#a16eff]">
              <i className="fas fa-users"></i> Chi Siamo
            </Link>
          </li>
          <li>
            <Link to="/forum" className="flex items-center gap-1 hover:text-[#a16eff]">
              <i className="fas fa-envelope"></i> Forum
            </Link>
          </li>
          <li>
            <Link to="/store" className="flex items-center gap-1 hover:text-[#a16eff]">
              <i className="fas fa-shopping-cart"></i> Store
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
