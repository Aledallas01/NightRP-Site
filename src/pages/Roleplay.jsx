// src/pages/Skyblock.jsx

import React from "react";
import img1 from "/images/Roleplay/banner1.jpg";
import img2 from "/images/Roleplay/banner2.jpg";
import img3 from "/images/Roleplay/banner3.jpg";

export default function Roleplay() {
  return (
    <>
      <main>
        <section id="roleplay-page" className="mode-details mode-card">
          <div className="container">
            <h1 className="section-title">
              <i className="fas fa-cloud"></i> Roleplay
            </h1>
            <p className="mode-intro">
              Vivi un’esperienza realistica nella capitale americana, dove ogni
              scelta può cambiare il tuo destino. Diventa un poliziotto e
              combatti la criminalità organizzata, oppure unisciti a una delle
              due gang rivali: il Cartello o i Falcone. Ma Washington non è solo
              violenza: trova un lavoro legale, costruisci relazioni, scala la
              società o apri la tua attività. Un mondo vivo, dinamico e
              interattivo, dove il vero protagonista sei tu.
            </p>

            <div className="image-gallery">
              <img src={img1} alt="Roleplay Screenshot 1" />
              <img src={img2} alt="Roleplay Screenshot 2" />
              <img src={img3} alt="Roleplay Screenshot 3" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
