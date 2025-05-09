import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.jpg';

export default function Navbar() {
  return (
<header>
  <div className="logo">
    <img src={logo} alt="Logo NightRP" />
    <h2>NightRP</h2>
  </div>
  <nav>
    <ul>
      <li>
        <a href="/">
          <i className="fas fa-house" /> Home
        </a>
      </li>
      <li className="dropdown">
        <a href="/games" className="dropbtn">
          <i className="fas fa-gamepad" /> Modalità ▾
        </a>
        <ul className="dropdown-content">
          <li>
            <a href="games#skyblock">Skyblock</a>
          </li>
          <li>
            <a href="games#kitpvp">KitPvP OP</a>
          </li>
          <li>
            <a href="games#prison">Prison</a>
          </li>
          <li>
            <a href="games#roleplay">Roleplay</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="/about">
          <i className="fas fa-users" /> Chi Siamo
        </a>
      </li>
      <li>
        <a href="/forum">
          <i className="fas fa-envelope" /> Forum
        </a>
      </li>
      <li>
        <a href="/store">
          <i className="fas fa-shopping-cart" /> Store
        </a>
      </li>
      <li>
        <a href="/cart">
          <i className="fas" /> Carrello
          <span className="cart-badge">{cart.length}</span>
        </a>
      </li>
    </ul>
  </nav>
</header>

  );
}
