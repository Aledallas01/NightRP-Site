// src/pages/About.jsx
import React from "react";

{/* -- Staff -- */}
import AyooDen from "../assets/images/team/AyooDen.gif";
import Xx1Fede0xX from "../assets/images/team/Xx1Fede0xX.webp";
import cicciosdao from "../assets/images/team/cicciosdao.png";
import Gisiva2022 from "../assets/images/team/Gisiva2022.webp";
import XxEllie999xX from "../assets/images/team/XxEllie999xX.webp";
import Rumenss from "../assets/images/team/Rumenss.webp";


{/* -- Developer -- */}
import Hert00l from "../assets/images/team/Hert00l.webp";
import AlyGG from "../assets/images/team/Aly.webp";
import Aledallas from "../assets/images/team/Aledallas.webp";


{/* -- Moderator -- */}
import ero1ne from "../assets/images/team/ero1ne.webp";
import Carmineitor from "../assets/images/team/Carmineitor.png";

{/* -- Helper -- */}
import AlCapone from "../assets/images/team/AlCapone.webp";
import FrostPngDanilo from "../assets/images/team/FrostPngDanilo.webp";
import Lσяєηzσ from "../assets/images/team/Lσяєηzσ.webp";
import Arrivatoh_ from "../assets/images/team/Arrivatoh_.webp";
import Calogero007 from "../assets/images/team/Calogero007.webp";


export default function About() {
    return (
      <>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>Chi Siamo – NightRP Minecraft Server</title>
    {/* Font Awesome (aggiungi QUI) */}
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    />
    <link rel="stylesheet" href="../CSS/style.css" />
    {/* HEADER */}
    <div id="header-placeholder" />
    {/* MAIN */}
    <main>
      {/* Hero About */}
      <section className="hero" id="about-hero">
        <h1>
          <i className="fas fa-info-circle" /> Chi Siamo
        </h1>
        <p>
          Scopri la storia, la mission e il team dietro NightRP, il server
          Minecraft che unisce creatività e avventura.
        </p>
      </section>
      {/* Storia */}
      <section id="storia">
        <div className="container">
          <h2 className="section-title">
            <i className="fas fa-book-open" /> La Nostra Storia
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            repellendus nam, eaque corrupti veritatis eum totam consequatur harum,
            aliquid unde sint accusantium ut dicta sunt necessitatibus officiis
            quia tenetur dolorem! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aut amet quasi incidunt quod id eligendi nulla nam
            eum. Esse reprehenderit debitis consectetur incidunt tempora nulla
            neque magni eveniet assumenda perspiciatis!
          </p>
        </div>
      </section>
      {/* Mission */}
      <section id="mission">
        <div className="container">
          <h2 className="section-title">
            <i className="fas fa-bullseye" /> La Nostra Missione
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum,
            nobis, quaerat at ab accusantium earum magni, dignissimos quibusdam
            dolor temporibus quos omnis alias explicabo? Dolores fuga aperiam
            optio labore laboriosam? Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Suscipit, inventore. Odit aspernatur maiores
            repellendus corrupti nemo suscipit laborum harum dolore itaque
            voluptate quis, ex repudiandae officiis excepturi, dicta recusandae
            tempora.
          </p>
        </div>
      </section>
      {/* Valori */}
      <section id="valori">
        <div className="container">
          <h2 className="section-title">
            <i className="fas fa-heart" /> I Nostri Valori
          </h2>
          <div className="cards">
            <div className="card">
              <i className="fas fa-hands-helping" />
              <span>Community</span>
              <p>
                Supporto e rispetto reciproco per costruire insieme un ambiente
                positivo.
              </p>
            </div>
            <div className="card">
              <i className="fas fa-cogs" />
              <span>Innovazione</span>
              <p>
                Plugin personalizzati e contenuti originali per un gameplay sempre
                fresco.
              </p>
            </div>
            <div className="card">
              <i className="fas fa-trophy" />
              <span>Competizione</span>
              <p>Tornei, sfide e classifiche per chi ama mettersi alla prova.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Team */}
      <section id="team" className="team-section">
        <h2 className="section-title">Il Nostro Team</h2>
        <h3 className="Staff">Staff</h3>
        <div className="team-container">

          <div className="staff-card">
            <div className="avatar">
              <img src={AyooDen} alt="AyooDen" />
            </div>
            <h3>AyooDen</h3>
            <p>Founder</p>
          </div>

          <div className="staff-card">
            <div className="avatar">
              <img src={Xx1Fede0xX} alt="Xx1Fede0xX" />
            </div>
            <h3>Xx1Fede0xX</h3>
            <p>Founder</p>
          </div>

          <div className="staff-card">
            <div className="avatar">
              <img src={cicciosdao} alt="cicciosdao" />
            </div>
            <h3>cicciosdao</h3>
            <p>Manager</p>
          </div>

          <div className="staff-card">
            <div className="avatar">
              <img src={Gisiva2022} alt="Gisiva2022" />
            </div>
            <h3>Gisiva2022</h3>
            <p>Senior Admin</p>
          </div>

          <div className="staff-card">
            <div className="avatar">
              <img src={XxEllie999xX} alt="XxEllie999xX" />
            </div>
            <h3>XxEllie999xX</h3>
            <p>Senior Admin</p>
          </div>

          <div className="staff-card">
            <div className="avatar">
              <img src={Rumenss} alt="Rumenss" />
            </div>
            <h3>Rumenss</h3>
            <p>Admin</p>
          </div>

        </div>
        
        <h3 className="Staff">Developer</h3>
        <div className="team-container">

          <div className="staff-card">
            <div className="avatar">
              <img src={Hert00l} alt="Xx1Fede0xX" />
            </div>
            <h3>Xx1Fede0xX</h3>
            <p>Senior Developer</p>
          </div>

          <div className="staff-card">
            <div className="avatar">
              <img src={AlyGG} alt="AlyGG" />
            </div>
            <h3>AlyGG</h3>
            <p>Developer</p>
          </div>

          <div className="staff-card">
            <div className="avatar">
              <img src={Aledallas} alt="Aledallas" />
            </div>
            <h3>Aledallas</h3>
            <p>Junior Developer</p>
            <p>Web Developer</p>
          </div>
        </div>

        <h3 className="Staff">Moderator</h3>
        <div className="team-container">

          <div className="staff-card">
            <div className="avatar">
              <img src={ero1ne} alt="ero1ne" />
            </div>
            <h3>ero1ne</h3>
            <p>Senior Mod</p>
          </div>

          <div className="staff-card">
            <div className="avatar">
              <img src={Carmineitor} alt="Carmineitor" />
            </div>
            <h3>Carmineitor</h3>
            <p>Junior Mod</p>
          </div>
        </div>

        <h3 className="Staff">Helper</h3>
        <div className="team-container">

          <div className="staff-card">
            <div className="avatar">
              <img src={AlCapone} alt="AlCapone" />
            </div>
            <h3>AlCapone</h3>
            <p>Senior Helper</p>
          </div>

          <div className="staff-card">
            <div className="avatar">
              <img src={FrostPngDanilo} alt="FrostPngDanilo" />
            </div>
            <h3>FrostPngDanilo</h3>
            <p>Helper</p>
          </div>

          <div className="staff-card">
            <div className="avatar">
              <img src={Lσяєηzσ} alt="Lσяєηzσ" />
            </div>
            <h3>Lσяєηzσ</h3>
            <p>Helper</p>
          </div>

          <div className="staff-card">
            <div className="avatar">
              <img src={Arrivatoh_} alt="Arrivatoh_" />
            </div>
            <h3>Arrivatoh_</h3>
            <p>Junior Helper</p>
          </div>

          <div className="staff-card">
            <div className="avatar">
              <img src={Calogero007} alt="Calogero007" />
            </div>
            <h3>Calogero007</h3>
            <p>Junior Helper</p>
          </div>
        </div>

      </section>
    </main>
    {/* FOOTER */}
    <div id="footer-placeholder" />
</>

    );
  }
  