// src/pages/Home.jsx

import React, { useState } from "react";
import skyImg from "../assets/images/SkyBlock/banner1.jpg";
import kitImg from "../assets/images/KitPVP/banner1.jpg";
import prisonImg from "../assets/images/banner.jpg";
import roleImg from "../assets/images/banner.jpg";

export default function Home() {
  const [ipButtonText, setIpButtonText] = useState("Copia IP");

  const copiaIP = () => {
    navigator.clipboard.writeText("play.nightrp.it");
    setIpButtonText("IP copiato!");
    setTimeout(() => setIpButtonText("Copia IP"), 3000);
  };

  return (
    <>
      <main>
        {/* Hero */}
        <section id="home" className="hero">
          <h1>Benvenuto su NightRP!</h1>
          <p>
            Esplora un server Minecraft italiano con modalità uniche, eventi
            settimanali, tornei PvP e una community attiva. Che tu sia un
            costruttore, un guerriero o un attore, qui troverai la tua casa.
          </p>
          <div className="hero-buttons">
            <button onClick={copiaIP} className="btn">
              <i className="fas fa-copy" /> {ipButtonText}
            </button>
            <button
              onClick={() => (window.location.href = "/games")}
              className="btn"
            >
              <i className="fas fa-gamepad" /> Scopri le Modalità
            </button>
            <button
              onClick={() =>
                window.open("https://discord.gg/2xQSRYSRjH", "_blank")
              }
              className="btn"
            >
              <i className="fab fa-discord" /> Entra nel Discord
            </button>
          </div>
        </section>

        {/* Modalità */}
        <section id="modalita">
          <h2 className="section-title">Le Nostre Modalità</h2>

          {/* Skyblock */}
          <div className="mode-section flex flex-col md:flex-row items-center">
            <div className="mode-text md:w-1/2">
              <h2>Skyblock</h2>
              <p>
                Inizia con un solo blocco sospeso nel vuoto e costruisci la tua
                isola da zero. Affronta sfide settimanali, automatizza le
                risorse e scala le classifiche. Con sistemi di upgrade, negozi e
                missioni dedicate, ogni isola racconta una storia diversa.
              </p>
            </div>
            <div className="mode-image md:w-1/2">
              <img
                src={skyImg}
                alt="Skyblock"
                className="w-full rounded-lg mt-4 md:mt-0"
              />
            </div>
          </div>

          {/* KitPvP */}
          <div className="mode-section flex flex-col md:flex-row items-center">
            <div className="mode-text md:w-1/2">
              <h2>KitPvP OP</h2>
              <p>
                Entra nell’arena, scegli il tuo kit e combatti per la gloria. Il
                nostro KitPvP offre un PvP fluido, arene uniche, classifiche
                giornaliere e ricompense leggendarie. Allenati, partecipa ai
                tornei e dimostra chi è il più forte.
              </p>
            </div>
            <div className="mode-image md:w-1/2">
              <img
                src={kitImg}
                alt="KitPvP"
                className="w-full rounded-lg mt-4 md:mt-0"
              />
            </div>
          </div>

          {/* Prison */}
          <div className="mode-section flex flex-col md:flex-row items-center">
            <div className="mode-text md:w-1/2">
              <h2>Prison</h2>
              <p>
                Da prigioniero a magnate: scava, commercia, investi. Prison è la
                modalità perfetta per chi ama la progressione continua. Ranka,
                sblocca nuove aree, costruisci il tuo impero e domina l’economia
                della prigione.
              </p>
            </div>
            <div className="mode-image md:w-1/2">
              <img
                src={prisonImg}
                alt="Prison"
                className="w-full rounded-lg mt-4 md:mt-0"
              />
            </div>
          </div>

          {/* Roleplay */}
          <div className="mode-section flex flex-col md:flex-row items-center">
            <div className="mode-text md:w-1/2">
              <h2>Roleplay</h2>
              <p>
                Vivi una vita alternativa in città realistiche, con leggi, ruoli
                e interazioni reali. Interpreta un personaggio unico, entra in
                una fazione o crea la tua. Ogni giorno è una nuova storia da
                scrivere insieme agli altri giocatori.
              </p>
            </div>
            <div className="mode-image md:w-1/2">
              <img
                src={roleImg}
                alt="Roleplay"
                className="w-full rounded-lg mt-4 md:mt-0"
              />
            </div>
          </div>
        </section>

        {/* Community & Supporto */}
        <section id="community" className="extra-section">
          <h2 className="section-title">Community &amp; Supporto</h2>
          <div className="container">
            <div className="text">
              <p>
                Abbiamo un server Discord attivo, dove potrai ricevere
                assistenza, proporre idee, trovare compagni di gioco o
                semplicemente chiacchierare.
              </p>
              <p>
                Il nostro staff è disponibile ogni giorno per risolvere problemi
                tecnici, moderare l'ambiente di gioco e assicurarsi che tutti si
                divertano nel rispetto delle regole.
              </p>
              <p>
                Entrare in NightRP significa diventare parte di qualcosa di più
                grande: una community unita dalla passione per Minecraft e dalla
                voglia di innovare.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
