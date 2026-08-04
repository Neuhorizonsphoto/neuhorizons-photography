'use client';

import Image from 'next/image';
import { useState } from 'react';

const galleries = {
  Seniors: [
    '/images/8C149606-C063-474A-8099-712675C493A6_1_105_c.jpeg',
    '/images/20EE3BEE-43B7-442C-803F-63A7B90438A0_1_105_c.jpeg',
    '/images/49C409B3-9A49-4182-8367-A8299D43AD1E_1_105_c.jpeg',
    '/images/6B6DCFAA-6E2D-41D4-8B28-03CB8B96E840_1_105_c.jpeg',
    '/images/2BA2953D-408C-4CC5-AC0D-EA570565BDB2_1_105_c.jpeg',
    '/images/5A3E4FAE-AFDD-4F25-9AE4-E21C0F09D8F3_1_105_c.jpeg'
  ],
  Action: [
    '/images/58D87963-1FCB-4755-A484-C58CC00D83E5_1_105_c.jpeg',
    '/images/FE16F704-0490-4291-9CE0-9D05E0C92906_1_105_c.jpeg',
    '/images/D87C48E9-2909-46CE-9F0C-6E81AA542A35_1_105_c.jpeg',
    '/images/0D2F5B34-A366-4478-A7EC-91F4AC61E00E_1_105_c.jpeg'
  ]
};

const services = [
  ['Senior Portraits', 'Personalized sessions that highlight personality, milestones, and the moments that make senior year unforgettable.'],
  ['Action Photography', 'Fast-paced images that freeze motion, energy, and the split-second details that make the moment.'],
  ['Automotive', 'Bold, detail-focused photography for cars, trucks, motorcycles, and custom builds.'],
  ['Families & Couples', 'Relaxed sessions focused on genuine connection, natural expressions, and lasting memories.'],
  ['Colorado Landscapes', 'Cinematic landscape photography inspired by Colorado’s mountains, roads, and wide-open spaces.']
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-wrap">
      <a href="#top" className="brand">NEUHORIZONS <span>PHOTOGRAPHY</span></a>
      <button className="menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>☰</button>
      <nav className={open ? 'nav open' : 'nav'} onClick={() => setOpen(false)}>
        <a href="#gallery">Gallery</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact" className="nav-cta">Book a Session</a>
      </nav>
    </header>
  );
}

function Gallery() {
  const [filter, setFilter] = useState('All');
  const all = Object.entries(galleries).flatMap(([category, items]) => items.map(src => ({ src, category })));
  const shown = filter === 'All' ? all : all.filter(item => item.category === filter);

  return (
    <section id="gallery" className="section gallery-section">
      <div className="eyebrow">SELECTED WORK</div>
      <div className="section-heading">
        <h2>Stories in motion.<br/>Moments that last.</h2>
        <p>A growing collection of portraits and action photography created throughout Colorado.</p>
      </div>
      <div className="filters">
        {['All', ...Object.keys(galleries)].map(item => (
          <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>
        ))}
      </div>
      <div className="masonry">
        {shown.map((item, i) => (
          <figure className="shot" key={`${item.src}-${i}`}>
            <Image src={item.src} alt={`${item.category} photography by Neuhorizons Photography`} width={1200} height={900} sizes="(max-width: 700px) 100vw, 33vw" />
            <figcaption>{item.category}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main id="top">
      <Nav />
      <section className="hero">
        <Image className="hero-bg" src="/images/FE16F704-0490-4291-9CE0-9D05E0C92906_1_105_c.jpeg" alt="Motorcycle action photography" fill priority sizes="100vw" />
        <div className="hero-overlay" />
        <div className="grid-floor" />
        <div className="hero-content">
          <Image className="hero-logo" src="/logo.png" alt="Neuhorizons Photography logo" width={420} height={420} priority />
          <p className="kicker">COLORADO PORTRAIT • ACTION • AUTOMOTIVE</p>
          <h1>Capturing moments<br/><span>beyond the horizon.</span></h1>
          <p className="hero-copy">Professional photography serving clients across Colorado, with a focus on authentic portraits, high-energy action, and vehicles that deserve to be seen.</p>
          <div className="hero-actions">
            <a href="#gallery" className="btn primary">View Gallery</a>
            <a href="#contact" className="btn ghost">Book a Session</a>
          </div>
        </div>
        <a className="scroll" href="#gallery">SCROLL</a>
      </section>

      <Gallery />

      <section id="services" className="section services-section">
        <div className="eyebrow">WHAT I PHOTOGRAPH</div>
        <div className="section-heading"><h2>Built around your story.</h2><p>Every session is tailored to the subject, the location, and the final look you want to achieve.</p></div>
        <div className="service-grid">
          {services.map(([title, copy], i) => (
            <article className="service-card" key={title}>
              <span>0{i + 1}</span><h3>{title}</h3><p>{copy}</p><strong>Contact for Pricing</strong>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-image">
          <Image src="/images/8C149606-C063-474A-8099-712675C493A6_1_105_c.jpeg" alt="Senior portrait session by Neuhorizons Photography" fill sizes="(max-width: 900px) 100vw, 50vw" />
        </div>
        <div className="about-copy">
          <div className="eyebrow">ABOUT NEUHORIZONS</div>
          <h2>More than a photo.<br/>A finished moment.</h2>
          <p>I started getting into photography because I love capturing genuine moments and shaping them through the editing process into something people can keep and enjoy for years.</p>
          <p>For about four years, I have been developing my style and learning how to turn a scene into a finished image. The best part is seeing the excitement on people’s faces when they view their photos for the first time.</p>
          <p>Action photography and vehicles are where I feel most at home, but every session has the same goal: create authentic images, make the experience comfortable, and deliver a final product you are proud to share.</p>
          <p className="location">Proudly serving clients throughout Colorado.</p>
        </div>
      </section>

      <section className="banner">
        <p>COLORADO-BASED • AVAILABLE STATEWIDE</p>
        <h2>Let’s create something worth remembering.</h2>
        <a href="#contact" className="btn primary">Start Your Session</a>
      </section>

      <section id="contact" className="section contact-section">
        <div>
          <div className="eyebrow">GET IN TOUCH</div>
          <h2>Ready to plan your shoot?</h2>
          <p>Tell me what you have in mind, where you are located, and the kind of session you are looking for. I’ll follow up to discuss details, availability, and pricing.</p>
          <div className="contact-details">
            <span>Serving all of Colorado</span>
            <span>Contact for pricing</span>
          </div>
        </div>
        <form className="contact-form" action="mailto:hello@neuhorizonsphotography.com" method="post" encType="text/plain">
          <label>Name<input required name="name" type="text" placeholder="Your name" /></label>
          <label>Email<input required name="email" type="email" placeholder="you@example.com" /></label>
          <label>Session type<select name="session"><option>Senior Portraits</option><option>Action Photography</option><option>Automotive</option><option>Families & Couples</option><option>Landscape / Print Inquiry</option><option>Other</option></select></label>
          <label>Message<textarea required name="message" rows="6" placeholder="Tell me about the session you have in mind..." /></label>
          <button className="btn primary" type="submit">Send Inquiry</button>
          <small>This form opens your default email app. Update the destination email in <code>app/page.js</code> when your business email is ready.</small>
        </form>
      </section>

      <footer>
        <Image src="/logo.png" alt="Neuhorizons Photography" width={130} height={130} />
        <div><strong>Neuhorizons Photography</strong><span>Capturing moments beyond the horizon.</span></div>
        <div className="footer-links"><a href="#gallery">Gallery</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        <p>© {new Date().getFullYear()} Neuhorizons Photography. All rights reserved.</p>
      </footer>
    </main>
  );
}
