// src/pages/KitPVP.jsx
import React from 'react';

export default function KitPVP() {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>KitPvP – NightRP Minecraft Server</title>
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
        <section id="kitpvp-page" className="mode-details mode-card alt">
          <div className="container">
            <h1 className="section-title">
              <i className="fas fa-crosshairs"></i> KitPvP OP
            </h1>
            <p className="mode-intro">
              Entra nell’arena, scegli il tuo kit e combatti per la gloria. KitPvP
              offre combattimenti rapidi, respawn istantaneo e mappe dinamiche:
              dimostra chi è il più forte!
            </p>

            <div className="image-gallery">
              <img
                src="/images/KitPVP/kitpvp1.jpg"
                alt="KitPvP Screenshot 1"
              />
              <img
                src="/images/KitPVP/kitpvp2.jpg"
                alt="KitPvP Screenshot 2"
              />
              <img
                src="/images/KitPVP/kitpvp3.jpg"
                alt="KitPvP Screenshot 3"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}