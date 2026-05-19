import {useState} from 'react';
import {Link} from 'react-router';

const COLS = [
  {
    heading: 'Contact', gold: false,
    links: [
      {label: '1-888-708-1466', href: 'tel:18887081466'},
      {label: 'Contact us',     href: 'https://help.serta.com'},
    ],
  },
  {
    heading: 'Support', gold: false,
    links: [
      {label: 'FAQ',                href: 'https://help.serta.com'},
      {label: 'Warranty',           href: '/pages/warranty'},
      {label: 'Recall Information', href: '/pages/recall-information'},
      {label: 'Returns',            href: '/pages/shipping-returns'},
    ],
  },
  {
    heading: 'About', gold: false,
    links: [
      {label: 'About Us',      href: '/pages/our-story'},
      {label: 'Store Locator', href: '/pages/mattress-store-locator'},
      {label: 'Blog',          href: '/blogs/mattress-guides'},
      {label: 'Careers',       href: 'https://careers.serta.com'},
    ],
  },
  {
    heading: 'Mattresses', gold: true,
    links: [
      {label: 'Shop All',               href: '/collections/mattresses'},
      {label: 'Twin',                   href: '/collections/mattresses?size=twin'},
      {label: 'Twin XL',                href: '/collections/mattresses?size=twin-xl'},
      {label: 'Full',                   href: '/collections/mattresses?size=full'},
      {label: 'Queen',                  href: '/collections/mattresses?size=queen'},
      {label: 'King',                   href: '/collections/mattresses?size=king'},
      {label: 'California King',        href: '/collections/mattresses?size=cal-king'},
      {label: 'Size Guide',             href: '/pages/mattress-size-guide'},
      {label: 'Shop by Sleep Position', href: '/pages/shop-by-sleep-position'},
      {label: 'Hotel Mattresses',       href: '/pages/hotel-mattresses'},
    ],
  },
  {
    heading: 'Products', gold: true,
    links: [
      {label: 'Adjustable Bed Frames', href: '/collections/adjustable-bases'},
      {label: 'Mattress Foundations',  href: '/collections/foundations'},
      {label: 'Pillows',               href: '/collections/pillows'},
      {label: 'Shop All Products',     href: '/collections/all-products'},
      {label: 'Catalog',               href: '/pages/catalog'},
    ],
  },
];

const SOCIAL = [
  {
    name: 'Facebook', href: 'https://www.facebook.com/sertamattress',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  },
  {
    name: 'Instagram', href: 'https://www.instagram.com/serta/',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  },
  {
    name: 'YouTube', href: 'https://www.youtube.com/user/MattressSerta',
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.4 19.54C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-1.94A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>,
  },
];

export function SertaFooter() {
  const [email, setEmail]         = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <>
      {/* Newsletter */}
      <div style={{backgroundColor: '#1c2b3a', padding: '32px 24px'}}>
        <div style={{maxWidth: 1280, margin: '0 auto', backgroundColor: '#111827', borderRadius: 16, padding: 'clamp(32px,5vw,56px) clamp(24px,5vw,64px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 40, justifyContent: 'space-between'}}>
          <p style={{fontFamily: "'DM Sans', sans-serif", fontSize: 'clamp(22px,2.5vw,30px)', fontWeight: 700, color: '#fff', lineHeight: 1.3, flex: '1 1 300px', maxWidth: 480, margin: 0}}>
            Be the first to find out about new arrivals, and special offers.
          </p>
          <div style={{flex: '1 1 280px', maxWidth: 460}}>
            {submitted ? (
              <p style={{fontSize: 15, fontWeight: 600, color: 'rgba(255,255,255,0.85)'}}>✓ Thanks for subscribing!</p>
            ) : (
              <>
                <form onSubmit={handleSubmit} style={{display: 'flex', gap: 10, marginBottom: 12}}>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email*"
                    required
                    aria-label="Email address"
                    style={{flex: 1, padding: '14px 18px', borderRadius: 8, border: 'none', backgroundColor: '#fff', color: '#111', fontSize: 14, outline: 'none'}}
                  />
                  <button type="submit" style={{backgroundColor: '#E5A100', color: '#20374D', padding: '14px 28px', borderRadius: 999, fontSize: 15, fontWeight: 700, cursor: 'pointer', border: 'none', whiteSpace: 'nowrap', flexShrink: 0}}>
                    Subscribe
                  </button>
                </form>
                <p style={{fontSize: 12, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5, margin: 0}}>
                  This site is protected by reCAPTCHA and the Google{' '}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{color: 'rgba(255,255,255,0.7)', textDecoration: 'underline'}}>Privacy Policy</a>{' '}
                  and{' '}
                  <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" style={{color: 'rgba(255,255,255,0.7)', textDecoration: 'underline'}}>Terms of Service</a>{' '}apply
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <footer style={{backgroundColor: '#20374D', color: '#fff'}}>
        <div style={{maxWidth: 1280, margin: '0 auto', padding: '64px 24px 48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 40}}>
          {/* Logo + social */}
          <div>
            <Link to="/" aria-label="Serta home" style={{display: 'inline-block', marginBottom: 24}}>
              <img src="/serta-logo.svg" alt="Serta" width="80" style={{display: 'block', filter: 'brightness(0) invert(1)'}} />
            </Link>
            <div style={{display: 'flex', gap: 16}}>
              {SOCIAL.map(s => (
                <a key={s.name} href={s.href} aria-label={s.name} target="_blank" rel="noopener noreferrer" style={{color: 'rgba(255,255,255,0.6)'}}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLS.map(col => (
            <div key={col.heading}>
              <p style={{fontSize: 14, fontWeight: 700, color: col.gold ? '#E5A100' : '#fff', marginBottom: 20, marginTop: 0}}>
                {col.heading}
              </p>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                {col.links.map(link => (
                  <li key={link.label} style={{marginBottom: 12}}>
                    {link.href.startsWith('http') || link.href.startsWith('tel') ? (
                      <a href={link.href} style={{fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none'}}>{link.label}</a>
                    ) : (
                      <Link to={link.href} style={{fontSize: 14, color: 'rgba(255,255,255,0.7)', textDecoration: 'none'}}>{link.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Legal */}
        <div style={{borderTop: '1px solid rgba(255,255,255,0.1)', padding: '20px 24px', textAlign: 'center', fontSize: 12, color: 'rgba(255,255,255,0.35)'}}>
          © 2025 Serta, Inc. All Rights Reserved.
        </div>
      </footer>
    </>
  );
}
