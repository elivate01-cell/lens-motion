const FRAMES = [
  ['Frame 01 · Adeniyi', 'Golden hour · 85mm', 'g1'],
  ['Frame 02 · Obalende', 'Street · 35mm · flash on', 'g2'],
  ['Frame 03 · Yaba tech market', 'Editorial · 50mm', 'g3'],
  ['Frame 04 · Tarkwa Bay', 'Coastal · 24mm', 'g4'],
  ['Frame 05 · Computer Village', 'Product · macro ring', 'g5'],
  ['Frame 06 · Lekki phase 1', 'Studio · softbox pair', 'g6'],
];

const SESSIONS = [
  ['Portrait session', '₦60,000', '2 hrs · 1 location · 25 retouched frames'],
  ['Wedding day', '₦450,000', 'Full day · 2 shooters · 300+ frames & album'],
  ['Product / lookbook', '₦95,000', 'Studio · lighting rig · up to 30 SKUs'],
  ['Editorial half-day', '₦150,000', '4 hrs · moodboard call · usage negotiable'],
];

const INFO = [
  ['STUDIO', '14 Adeola Odeku, 2nd floor, Victoria Island'],
  ['DOORS', 'Mon–Sat · 9:00–18:00 · bookings by form'],
  ['GLASS', '35 / 50 / 85 primes · 24-70 zoom · two bodies'],
  ['TURNAROUND', 'Proofs in 48 hrs · retouch queue per session'],
];

export default function App() {
  return (
    <div className="lm">
      <div className="top">
        <a className="brand" href="#top">LENS<span>&amp;</span>MOTION</a>
        <nav className="tnav">
          <a href="#gallery">Gallery</a><a href="#rates">Sessions</a><a href="#book">Booking</a><a href="#studio">Studio</a>
        </nav>
        <a className="tcta" href="#book">Book a session</a>
      </div>
      <div className="lightstrip" aria-hidden="true" />
      <header className="hero" id="top">
        <p className="kick">PHOTOGRAPHY STUDIO · LAGOS · AVAILABLE LIGHT PREFERRED</p>
        <h1>Every picture owes you<br />one honest second.</h1>
        <p className="lede">We shoot onlocation and in-studio — portraits, weddings, products and the in-between moments nobody schedules.</p>
      </header>
      <section className="gallery" id="gallery">
        <div className="ghead"><h2>Recent frames</h2><span className="gmono">/ colour studies · location log</span></div>
        <div className="ggrid">
          {FRAMES.map((f) => (
            <figure className={`gframe ${f[2]}`} key={f[0]}>
              <figcaption><b>{f[0]}</b><span>{f[1]}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className="rates" id="rates">
        <div className="rhead"><h2>Session rates</h2><span className="gmono">/ per session · 50% deposit holds the date</span></div>
        {SESSIONS.map((s) => (
          <div className="srow" key={s[0]}>
            <b className="sname">{s[0]}</b>
            <span className="sdesc">{s[2]}</span>
            <b className="sprice">{s[1]}</b>
          </div>
        ))}
      </section>
      <section className="book" id="book">
        <h2>Booking in three steps</h2>
        <ol className="bsteps">
          <li><span className="bnum">01</span><b>Send the brief</b><p>What, where, when, and how many humans. A WhatsApp message counts as a brief.</p></li>
          <li><span className="bnum">02</span><b>Lock the date</b><p>50% deposit moves you from the waiting list to the calendar. Rain dates reschedule free.</p></li>
          <li><span className="bnum">03</span><b>Shoot &amp; proof</b><p>Proof gallery in 48 hours. Pick your frames; retouching follows within the week.</p></li>
        </ol>
      </section>
      <section className="studio" id="studio">
        <h2>Studio card</h2>
        <div className="scard">
          {INFO.map((i) => (
            <div className="srow2" key={i[0]}>
              <span className="gmono">{i[0]}</span>
              <p>{i[1]}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="foot">
        <span>© {new Date().getFullYear()} Lens &amp; Motion · Victoria Island, Lagos.</span>
        <span>PED Forge template draft · batch-3</span>
      </footer>
    </div>
  );
}