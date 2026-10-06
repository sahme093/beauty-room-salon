import {
  serviceOptions,
  timesOfDay,
  hours,
  PHONE_DISPLAY,
  PHONE_E164,
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  MAPS_URL,
} from '../data.js';

const todayIso = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
};

export default function Booking({ form, setForm, request }) {
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  // hours[] is Monday-first; getDay() is Sunday-first.
  const todayIndex = (new Date().getDay() + 6) % 7;

  return (
    <>
      <section className="section booking-section" id="book">
        <form className="booking-card" onSubmit={(e) => e.preventDefault()}>
          <div>
            <div className="eyebrow desktop-only">Appointment request</div>
            <h2 className="booking-title">
              Request <span className="desktop-only-inline">a visit </span><em>by text</em>
            </h2>
            <p className="booking-lede">
              <span className="desktop-only-inline">
                Fill this in and tap send. It opens your messages app with the request written out
                to {PHONE_DISPLAY}. We'll text back to confirm a time.
              </span>
              <span className="mobile-only-inline">
                Opens your messages app with your request written out. We'll text back to confirm.
              </span>
            </p>
          </div>

          <div className="booking-fields">
            <label className="field">
              Your name
              <input value={form.name} onChange={set('name')} placeholder="First and last" autoComplete="name" />
            </label>
            <label className="field">
              Service
              <select value={form.service} onChange={set('service')}>
                {serviceOptions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </label>
            <label className="field">
              Preferred date
              <input type="date" value={form.date} min={todayIso()} onChange={set('date')} />
            </label>
            <div className="field" role="group" aria-label="Time of day">
              Time of day
              <div className="time-options">
                {timesOfDay.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={'time-btn' + (form.time === t ? ' is-on' : '')}
                    aria-pressed={form.time === t}
                    onClick={() => setForm((f) => ({ ...f, time: t }))}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <label className="field field-wide">
              <span>
                <span className="desktop-only-inline">Anything we should know?</span>
                <span className="mobile-only-inline">Notes</span>
              </span>
              <span className="field-hint desktop-only">Current color, hair length, inspiration</span>
              <textarea
                value={form.notes}
                onChange={set('notes')}
                rows={3}
                placeholder="e.g. Virgin hair, want low-maintenance highlights, not too blonde"
              />
            </label>
          </div>

          {request.isSunday && (
            <div className="sunday-warning" role="alert">We're closed Sundays. Pick Monday–Saturday.</div>
          )}

          <div className="booking-send desktop-only">
            <a href={request.smsHref} className="btn btn-brass btn-lg">Send request by text</a>
            <span className="fine-print">Message and data rates may apply.</span>
          </div>
        </form>

        <div className="booking-aside desktop-only">
          <div className="label">Your text will read</div>
          <div className="sms-bubble">{request.body}</div>
          <div className="visit-grid" id="visit">
            <div className="visit-col">
              <div className="label">Visit</div>
              <div className="visit-address">{ADDRESS_LINE_1}<br />{ADDRESS_LINE_2}</div>
              <a href={MAPS_URL} target="_blank" rel="noreferrer" className="text-link">Get directions →</a>
            </div>
            <div className="visit-col">
              <div className="label">Hours</div>
              {hours.map((h, i) => (
                <div
                  key={h.day}
                  className={'hours-row' + (h.closed ? ' is-closed' : '') + (i === todayIndex ? ' is-today' : '')}
                >
                  <span>{h.day}</span>
                  <span>{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section visit-mobile mobile-only" id="visit-mobile">
        <div className="label">Visit</div>
        <div>{ADDRESS_LINE_1}, {ADDRESS_LINE_2}</div>
        <div className="visit-links">
          <a href={MAPS_URL} target="_blank" rel="noreferrer" className="text-link">Directions →</a>
          <a href={`tel:${PHONE_E164}`} className="text-link">{PHONE_DISPLAY}</a>
        </div>
        <div className="muted">Mon–Sat 9am–5pm · Closed Sunday</div>
      </section>
    </>
  );
}
