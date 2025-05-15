import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 p-4 text-center text-gray-400 text-sm">
      <ul>
        <li>
          <a href="/">
            <i className="fas fa-house" /> Home
          </a>
        </li>
        <li>
          <a href="/games">
            <i className="fas fa-gamepad" /> Modalità
          </a>
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
      </ul>
      © 2025 NightRP Minecraft Server. Tutti i diritti riservati.
    </footer>
  );
}
