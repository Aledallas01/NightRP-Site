// src/pages/Games.jsx

import { Link } from 'react-router-dom';

export default function Forum() {
  return (
<>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title>Forum – NightRP Minecraft Server</title>
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
      {/* Hero */}
      <section className="hero" id="games-hero">
        <h1>
          <i className="fas fa-th-list" /> Le Nostre Modalità
        </h1>
        <p>
          Scegli il tuo modo di giocare: strategie, competizione e avventura ti
          aspettano!
        </p>
      </section>
      {/* Skyblock */}
      <section onClick={() => window.location.href='/SkyBlock'} id="skyblock" className="mode-details mode-card">
        <div className="container">
          <h2 className="section-title">
            <i className="fas fa-cloud" /> Skyblock
          </h2>
          <p className="mode-intro">
            Parti da un piccolo blocco nel vuoto e costruisci la tua isola.
            Gestisci risorse, crea macchinari automatici e scala la classifica
            settimanale!
          </p>
          {/* How to play */}
          <div className="how-to-play">
            <h3>
              <i className="fas fa-play-circle" /> Come Giocare
            </h3>
            <ol>
              <li>
                Unisciti con <code>play.nightrp.it</code> e seleziona Skyblock.
              </li>
              <li>
                Raccogli il materiale base e crea il tuo cobblestone generator.
              </li>
              <li>
                Espandi la tua isola, completa missioni e vendi risorse nel
                market.
              </li>
              <li>
                Ogni domenica la classifica viene azzerata: punta al primo posto!
              </li>
            </ol>
          </div>
        </div>
      </section>
      {/* KitPvP */}
      <section onClick={() => window.location.href='/KitPVP'} id="kitpvp" className="mode-details mode-card alt">
        <div className="container">
          <h2 className="section-title">
            <i className="fas fa-crosshairs" /> KitPvP OP
          </h2>
          <p className="mode-intro">
            Scegli un kit, entra nell’arena e combatti per la gloria. Modalità
            frenetica con respawn istantaneo e matchmaking rapido!
          </p>
          {/* Description */}
          <div className="how-to-play">
            <h3>
              <i className="fas fa-info-circle" /> Come Funziona
            </h3>
            <p>
              Ogni kit include armatura e armi casuali. Guadagna kill per salire
              di livello e sbloccare ricompense. Partecipa ai tornei settimanali
              per premi esclusivi!
            </p>
          </div>
          {/* Top Players */}
          <div className="leaderboard">
            <h3>
              <i className="fas fa-medal" /> Top 5 Kill
            </h3>
            <table>
              <thead>
                <tr>
                  <th>Pos</th>
                  <th>Giocatore</th>
                  <th>Kill</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>PvP_God</td>
                  <td>320</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>SharpShooter</td>
                  <td>298</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>BladeMaster</td>
                  <td>275</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>QuickStrike</td>
                  <td>260</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>ShadowNinja</td>
                  <td>240</td>
                </tr>
              </tbody>
            </table>

            <div className="warning">
              <h3>ATTENZIONE</h3>
              <p>
                I dati inseriti sono solo PLACEHOLDER <br />I dati ufficiali
                saranno visibili dopo il collegamento Server - Web
              </p>
            </div>

          </div>
        </div>
      </section>
      {/* Prison */}
      <section onClick={() => window.location.href='/Prison'} id="prison" className="mode-details mode-card">
        <div className="container">
          <h2 className="section-title">
            <i className="fas fa-shackles" /> Prison
          </h2>
          <p className="mode-intro">
            Da prigioniero a magnate: scava, commercia e investi. Scala i ranghi
            per ottenere libertà e ricompense esclusive.
          </p>
          {/* How to play */}
          <div className="how-to-play">
            <h3>
              <i className="fas fa-play-circle" /> Come Giocare
            </h3>
            <ul>
              <li>Inizia nella cella e scava blocchi per ottenere risorse.</li>
              <li>Vendi il recuperato al mercato per salire di grado.</li>
              <li>Raggiungi il rank superiore per nuove aree e vantaggi.</li>
            </ul>
          </div>
        </div>
      </section>
      {/* Roleplay */}
      <section onClick={() => window.location.href='/Roleplay'} id="roleplay" className="mode-details mode-card alt">
        <div className="container">
          <h2 className="section-title">
            <i className="fas fa-theater-masks" /> Roleplay
          </h2>
          <p className="mode-intro">
            Ambientato a Washington, vivi una storia fatta di fazioni e scelte
            morali. Le due gangs ufficiali sono <strong>Cartello</strong> e{" "}
            <strong>Falcone</strong>. Entra nel Discord per più dettagli!
          </p>
        </div>
      </section>
    </main>
    {/* FOOTER */}
    <div id="footer-placeholder" />
</>

  );
}
