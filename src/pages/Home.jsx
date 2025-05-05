import React, { useState } from 'react';
import Banner1 from "/images/banner"

export default function Home() {
  const [ipButtonText, setIpButtonText] = useState('Copia IP');
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    '../images/team/Aledallas.png',
    '../images/banner2.jpg',
    '../images/banner3.jpg',
  ];
  

  const copiaIP = () => {
    navigator.clipboard.writeText('play.nightrp.it'); // Sostituisci con l'IP effettivo
    setIpButtonText('IP copiato!');
    setTimeout(() => {
      setIpButtonText('Copia IP'); // Torna al testo originale dopo 3 secondi
    }, 3000);
  };

  const nextImage = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Ciclo tra le immagini
  };

  const prevImage = () => {
    setImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length); // Ciclo tra le immagini
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Home - NightRP Minecraft Server</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <link rel="stylesheet" href="../CSS/style.css" />
      <div id="header-placeholder" />
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
            <button
              type="button"
              onClick={copiaIP}
              className="btn"
              id="copy-ip-btn"
            >
              <i className="fas fa-copy" /> {ipButtonText}
            </button>
            <button
              type="button"
              onClick={() => window.location.href = 'games.html'}
              className="btn"
            >
              <i className="fas fa-gamepad" /> Scopri le Modalità
            </button>
            <button
              type="button"
              onClick={() => window.open('https://discord.gg/2xQSRYSRjH','_blank')}
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
          <div className="mode-section" id="skyblock">
            <div className="carousel">
              <button className="prev" onClick={prevImage}>◀</button>
              <img src={images[imageIndex]} alt="Skyblock" />
              <button className="next" onClick={nextImage}>▶</button>
            </div>
            <div className="mode-text">
              <h2>Skyblock</h2>
              <p>
                Inizia con un solo blocco sospeso nel vuoto e costruisci la tua
                isola da zero. Affronta sfide settimanali, automatizza le risorse e
                scala le classifiche. Con sistemi di upgrade, negozi e missioni
                dedicate, ogni isola racconta una storia diversa.
              </p>
            </div>
          </div>
          {/* KitPvP */}
          <div className="mode-section" id="kitpvp">
            <div className="carousel">
              <button className="prev" onClick={prevImage}>◀</button>
              <img src={images[imageIndex]} alt="KitPvP" />
              <button className="next" onClick={nextImage}>▶</button>
            </div>
            <div className="mode-text">
              <h2>KitPvP OP</h2>
              <p>
                Entra nell’arena, scegli il tuo kit e combatti per la gloria. Il
                nostro KitPvP offre un PvP fluido, arene uniche, classifiche
                giornaliere e ricompense leggendarie. Allenati, partecipa ai tornei
                e dimostra chi è il più forte.
              </p>
            </div>
          </div>
          {/* Prison */}
          <div className="mode-section" id="prison">
            <div className="carousel">
              <button className="prev" onClick={prevImage}>◀</button>
              <img src={images[imageIndex]} alt="Prison" />
              <button className="next" onClick={nextImage}>▶</button>
            </div>
            <div className="mode-text">
              <h2>Prison</h2>
              <p>
                Da prigioniero a magnate: scava, commercia, investi. Prison è la
                modalità perfetta per chi ama la progressione continua. Ranka,
                sblocca nuove aree, costruisci il tuo impero e domina l’economia
                della prigione.
              </p>
            </div>
          </div>
          {/* Roleplay */}
          <div className="mode-section" id="roleplay">
            <div className="carousel">
              <button className="prev" onClick={prevImage}>◀</button>
              <img src={images[imageIndex]} alt="Roleplay" />
              <button className="next" onClick={nextImage}>▶</button>
            </div>
            <div className="mode-text">
              <h2>Roleplay</h2>
              <p>
                Vivi una vita alternativa in città realistiche, con leggi, ruoli e
                interazioni reali. Interpreta un personaggio unico, entra in una
                fazione o crea la tua. Ogni giorno è una nuova storia da scrivere
                insieme agli altri giocatori.
              </p>
            </div>
          </div>
        </section>
        {/* Community & Supporto */}
        <section id="community" className="extra-section">
          <h2 className="section-title">Community &amp; Supporto</h2>
          <div className="container">
            <div className="text">
              <p>
                Abbiamo un server Discord attivo, dove potrai ricevere assistenza,
                proporre idee, trovare compagni di gioco o semplicemente
                chiacchierare.
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
        {/* FOOTER */}
        <div id="footer-placeholder" />
      </main>
    </>
  );
}
