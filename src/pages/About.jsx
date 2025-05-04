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
        <div className="team-container">
          <div className="staff-card">
            <div className="avatar">
              <img src="../images/team/Xx1Fede0xX.png" alt="Staff 1" />
            </div>
            <h3>Xx1Fede0xX</h3>
            <p>Founder</p>
          </div>
          <div className="staff-card">
            <div className="avatar">
              <img src="../images/team/Aledallas.png" alt="Staff 2" />
            </div>
            <h3>Aledallas</h3>
            <p>Web Developer</p>
          </div>
          <div className="staff-card">
            <div className="avatar">
              <img src="../images/team/staff3.png" alt="Staff 3" />
            </div>
            <h3>Esempio</h3>
            <p>Admin</p>
          </div>
          {/* Puoi aggiungerne altri */}
        </div>
      </section>
    </main>
    {/* FOOTER */}
    <div id="footer-placeholder" />
</>

    );
  }
  