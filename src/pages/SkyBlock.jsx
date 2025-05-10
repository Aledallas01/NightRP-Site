// src/pages/Skyblock.jsx

import React from "react";
import img1 from "../assets/images/SkyBlock/banner1.jpg";
import img2 from "../assets/images/SkyBlock/banner2.jpg";
import img3 from "../assets/images/SkyBlock/banner3.jpg";

export default function Skyblock() {
  return (
    <>
      <main>
        <section id="skyblock-page" className="mode-details mode-card">
          <div className="container">
            <h1 className="section-title">
              <i className="fas fa-cloud"></i> Skyblock
            </h1>
            <p className="mode-intro">
              Inizia la tua avventura su un'isola sospesa nel cielo con risorse
              minime. Espandi il tuo regno fluttuante, automatizza la produzione
              con spawner e generatori di cobblestone, e scala le classifiche
              economiche. Partecipa a missioni giornaliere, sblocca ricompense
              esclusive e mostra la tua creatività in un mondo dove ogni blocco
              conta.
            </p>

            <div className="image-gallery">
              <img src={img1} alt="Skyblock Screenshot 1" />
              <img src={img2} alt="Skyblock Screenshot 2" />
              <img src={img3} alt="Skyblock Screenshot 3" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
