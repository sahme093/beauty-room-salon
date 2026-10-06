import { PHONE_DISPLAY, PHONE_E164 } from '../data.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="brand">The Beauty Room</div>
      <div className="footer-info">
        <span>28480 CA-74, Romoland, CA 92585</span>
        <a href={`tel:${PHONE_E164}`}>{PHONE_DISPLAY}</a>
        <span>Mon–Sat 9–5</span>
      </div>
    </footer>
  );
}
