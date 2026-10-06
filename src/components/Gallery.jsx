import { gallery } from '../data.js';

export default function Gallery() {
  return (
    <section className="section gallery-section" id="work">
      <div className="section-head">
        <h2 className="section-title">Recent <em>work</em></h2>
        <p className="section-note desktop-only">Color, cuts and styling from our chairs in Romoland.</p>
      </div>
      <div className="gallery">
        {gallery.map((g) => (
          <figure key={g.label} className="gallery-item">
            <img src={g.src} alt={g.label} loading="lazy" />
            <figcaption>{g.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
