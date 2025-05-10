// src/pages/Prison.jsx

import React from "react";
import img1 from "../assets/images/Prison/banner1.jpg";
import img2 from "../assets/images/Prison/banner2.jpg";
import img3 from "../assets/images/Prison/banner3.jpg";

export default function Prison() {
  return (
    <>
      <main>
        <section id="prison-page" className="mode-details mode-card alt">
          <div className="container">
            <h1 className="section-title">
              <i className="fas fa-crosshairs"></i> Prison
            </h1>
            <p className="mode-intro">
              Inizia come prigioniero e lavora per guadagnare la tua libertà.
              Scava nelle miniere, commercia con altri giocatori e migliora il
              tuo equipaggiamento con incantesimi personalizzati. Unisciti a
              gang, partecipa a eventi PvP e scala le gerarchie carcerarie in
              un'esperienza di gioco coinvolgente e competitiva.
            </p>

            <div className="image-gallery">
              <img src={img1} alt="Prison Screenshot 1" />
              <img src={img2} alt="Prison Screenshot 2" />
              <img src={img3} alt="Prison Screenshot 3" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
