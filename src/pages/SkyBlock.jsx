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
              Parti da un piccolo blocco nel vuoto e costruisci la tua isola
              fluttuante. Gestisci risorse, automatizza le produzioni e partecipa
              alle sfide settimanali per salire in classifica!
            </p>

            <div className="image-gallery">
              <img
                src="../assets/images/banner1.jpg"
                alt="Skyblock Screenshot 1"
              />
              <img
                src="../assets/images/banner2.jpg"
                alt="Skyblock Screenshot 2"
              />
              <img
                src="../assets/images/banner3.jpg"
                alt="Skyblock Screenshot 3"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
  