import { PHONE_E164 } from '../data.js';

export default function Header() {
  return (
    <header className="site-header">
      <a href="#top" className="brand">The Beauty Room</a>
      <nav className="site-nav desktop-only" aria-label="Main">
        <a href="#services">Services</a>
        <a href="#work">Our work</a>
        <a href="#reviews">Reviews</a>
        <a href="#visit">Visit</a>
        <a href="#book" className="btn btn-brass btn-sm">Request by text</a>
      </nav>
      <a href={`tel:${PHONE_E164}`} className="header-call mobile-only">Call</a>
    </header>
  );
}
