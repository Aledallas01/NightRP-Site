// src/pages/Forum.jsx

import { Link } from 'react-router-dom';

export default function Forum() {
  return (
<>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>Forum | NightRP Minecraft Server</title>
    {/* Font Awesome (aggiungi QUI) */}
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <link rel="stylesheet" href="../CSS/style.css" />
    {/* HEADER */}
    <div id="header-placeholder" />
    {/* MAIN */}
    <main>
      {/* Hero */}
      <section className="hero" id="hero">
        <h1>
          <i className="fas fa-th-list" /> Coming Soon
        </h1>
        <p>
          Il Forum non è ancora disponibile! <br /> Torna più tardi per scoprire le ultime novità e gli aggiornamenti.
        </p>
      </section>
    </main>
    {/* FOOTER */}
    <div id="footer-placeholder" />
</>

  );
}
