import { PHONE_DISPLAY, PHONE_E164 } from '../data.js';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <img
        src="/img/balayage.png"
        alt="Soft balayage"
        className="hero-mobile-img mobile-only"
      />
      <div className="hero-copy">
        <div className="eyebrow">Hair salon · Romoland, CA</div>
        <h1 className="hero-title">
          The<br className="desktop-only" /> <em>Beauty Room</em>
        </h1>
        <p className="hero-lede">
          Welcoming hair salon offering professional haircuts and customized hair coloring.
        </p>
        <div className="hero-ctas desktop-only">
          <a href="#book" className="btn btn-brass btn-lg">Request an appointment</a>
          <a href={`tel:${PHONE_E164}`} className="btn btn-ghost-light btn-lg">{PHONE_DISPLAY}</a>
        </div>
        <div className="hero-facts desktop-only">
          <div><div className="fact-label">Open</div>Mon–Sat · 9am–5pm</div>
          <div><div className="fact-label">Closed</div>Sunday</div>
          <div><div className="fact-label">Find us</div>28480 CA-74, Romoland</div>
        </div>
        <div className="hero-facts-mobile mobile-only">
          <span><span className="fact-label">Mon–Sat</span> 9am–5pm</span>
          <span>Closed Sunday</span>
        </div>
      </div>

      <div className="hero-media desktop-only">
        <img src="/img/balayage.png" alt="Soft balayage, long bob" className="hero-arch" />
        <div className="hero-media-col">
          <img src="/img/hair-1.jpg" alt="Copper waves" className="hero-side" />
          <blockquote className="hero-quote">
            “The atmosphere is so cute and classy and clean.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}
