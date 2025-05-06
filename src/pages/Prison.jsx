// src/pages/Prison.jsx

import React from 'react';

export default function Prison() {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Prison – NightRP Minecraft Server</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link rel="stylesheet" href="/CSS/style.css" />
      </head>

      {/* HEADER */}
      <div id="header-placeholder" />

      {/* MAIN */}
      <main>
        <section id="prison-page" className="mode-details mode-card alt">
          <div className="container">
            <h1 className="section-title">
              <i className="fas fa-crosshairs"></i> Prison
            </h1>
            <p className="mode-intro">
            Inizia come prigioniero e lavora per guadagnare la tua libertà.
            Scava nelle miniere, commercia con altri giocatori e migliora il tuo equipaggiamento con incantesimi personalizzati.
            Unisciti a gang, partecipa a eventi PvP e scala le gerarchie carcerarie in un'esperienza di gioco coinvolgente e competitiva.
            </p>

            <div className="image-gallery">
              <img
                src="../assets/images/Prison/banner1.jpg"
                alt="Prison Screenshot 1"
              />
              <img
                src="../assets/images/Prison/banner2.jpg"
                alt="Prison Screenshot 2"
              />
              <img
                src="../assets/images/Prison/banner3.jpg"
                alt="Prison Screenshot 3"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}