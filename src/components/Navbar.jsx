// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="logo">
        <Link to="/" className="logo__link">
          <img src={logo} alt="Logo NightRP" className="logo__img" />
          <h2 className="logo__title">NightRP</h2>
        </Link>
      </div>
      <nav className="site-nav">
        <ul className="site-nav__list">
          <li className="site-nav__item">
            <Link to="/" className="site-nav__link">
              <i className="fas fa-house" /> Home
            </Link>
          </li>
          <li className="site-nav__item dropdown">
            <Link to="/games" className="site-nav__link dropbtn">
              <i className="fas fa-gamepad" /> Modalità ▾
            </Link>
            <ul className="dropdown-content">
              <li>
                <Link to="/games#skyblock" className="dropdown-content__link">
                  Skyblock
                </Link>
              </li>
              <li>
                <Link to="/games#kitpvp" className="dropdown-content__link">
                  KitPvP OP
                </Link>
              </li>
              <li>
                <Link to="/games#prison" className="dropdown-content__link">
                  Prison
                </Link>
              </li>
              <li>
                <Link to="/games#roleplay" className="dropdown-content__link">
                  Roleplay
                </Link>
              </li>
            </ul>
          </li>
          <li className="site-nav__item">
            <Link to="/about" className="site-nav__link">
              <i className="fas fa-users" /> Chi Siamo
            </Link>
          </li>
          <li className="site-nav__item">
            <Link to="/forum" className="site-nav__link">
              <i className="fas fa-envelope" /> Forum
            </Link>
          </li>
          <li className="site-nav__item">
            <Link to="/store" className="site-nav__link">
              <i className="fas fa-shopping-cart" /> Store
            </Link>
          </li>
          <li className="site-nav__item">
            <Link to="/cart" className="site-nav__link">
              <i className="fas fa-shopping-cart" /> Carrello
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
