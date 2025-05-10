// src/pages/KitPVP.jsx

import React from "react";
import img1 from "../assets/images/KitPVP/banner1.jpg";
import img2 from "../assets/images/KitPVP/banner2.jpg";
import img3 from "../assets/images/KitPVP/banner3.jpg";

export default function KitPVP() {
  return (
    <>
      <main>
        <section id="kitpvp-page" className="mode-details mode-card alt">
          <div className="container">
            <h1 className="section-title">
              <i className="fas fa-crosshairs"></i> KitPvP OP
            </h1>
            <p className="mode-intro">
              Entra nell'arena e affronta altri giocatori con equipaggiamenti
              potenziati. Scegli tra una varietà di kit personalizzati, guadagna
              ricompense attraverso killstreaks e scala le classifiche PvP. Con
              arene dinamiche e un sistema di progressione unico, ogni battaglia
              è una nuova sfida.
            </p>

            <div className="image-gallery">
              <img src={img1} alt="KitPvP Screenshot 1" />
              <img src={img2} alt="KitPvP Screenshot 2" />
              <img src={img3} alt="KitPvP Screenshot 3" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
