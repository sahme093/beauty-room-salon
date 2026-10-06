import { services } from '../data.js';

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="services">
        <div className="services-intro">
          <h2 className="section-title">Services</h2>
          <p className="desktop-only">
            Not sure what to book? Text us a photo of what you have in mind and we'll point you to
            the right service.
          </p>
        </div>
        <div className="service-groups">
          {services.map((grp) => (
            <div key={grp.name} className="service-group">
              <div className="label service-group-name">{grp.name}</div>
              <ul className="service-list">
                {grp.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
