// src/pages/Skyblock.jsx

import React from 'react';

export default function Skyblock() {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Skyblock – NightRP Minecraft Server</title>
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
        <section id="skyblock-page" className="mode-details mode-card">
          <div className="container">
            <h1 className="section-title">
              <i className="fas fa-cloud"></i> Skyblock
            </h1>
            <p className="mode-intro">
            Inizia la tua avventura su un'isola sospesa nel cielo con risorse minime.
            Espandi il tuo regno fluttuante, automatizza la produzione con spawner e generatori di cobblestone, e scala le classifiche economiche.
            Partecipa a missioni giornaliere, sblocca ricompense esclusive e mostra la tua creatività in un mondo dove ogni blocco conta.
            </p>

            <div className="image-gallery">
              <img
                src="../assets/images/SkyBlock/banner1.jpg"
                alt="Skyblock Screenshot 1"
              />
              <img
                src="../assets/images/SkyBlock/banner2.jpg"
                alt="Skyblock Screenshot 2"
              />
              <img
                src="../assets/images/SkyBlock/banner3.jpg"
                alt="Skyblock Screenshot 3"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
  