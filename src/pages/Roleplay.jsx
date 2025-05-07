// src/pages/Skyblock.jsx

import React from 'react';
import img1 from '../assets/images/Roleplay/banner1.jpg';
import img2 from '../assets/images/Roleplay/banner2.jpg';
import img3 from '../assets/images/Roleplay/banner3.jpg';

export default function Roleplay() {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Roleplay – NightRP Minecraft Server</title>
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
        <section id="roleplay-page" className="mode-details mode-card">
          <div className="container">
            <h1 className="section-title">
              <i className="fas fa-cloud"></i> Skyblock
            </h1>
            <p className="mode-intro">
            Vivi un’esperienza realistica nella capitale americana, dove ogni scelta può cambiare il tuo destino.
            Diventa un poliziotto e combatti la criminalità organizzata, oppure unisciti a una delle due gang rivali: il Cartello o i Falcone.
            Ma Washington non è solo violenza: trova un lavoro legale, costruisci relazioni, scala la società o apri la tua attività.
            Un mondo vivo, dinamico e interattivo, dove il vero protagonista sei tu.
            </p>

            <div className="image-gallery">
              <img
                src={img1}
                alt="Roleplay Screenshot 1"
              />
              <img
                src={img2}
                alt="Roleplay Screenshot 2"
              />
              <img
                src={img3}
                alt="Roleplay Screenshot 3"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
  