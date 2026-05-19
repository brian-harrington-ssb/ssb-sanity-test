import {Link} from 'react-router';
import {useState, useEffect, useRef} from 'react';

import CartDrawer from './cart-drawer-wrapper';

const PROMO = [
  {pre: 'Buy now, pay later with ', link: 'https://help.serta.com/article/939-do-you-offer-financing', linkText: 'Affirm', post: ''},
  {pre: 'Free shipping on qualifying orders — ', link: '/collections/mattresses', linkText: 'Shop now', post: ''},
  {pre: '100-Night Trial on all mattresses — ', link: '/pages/120-day-trial', linkText: 'Learn more', post: ''},
];

const MAIN_NAV = [
  {label: 'Mattresses', href: '/collections/mattresses', hasMega: true},
  {label: 'Bed Frames',  href: '/collections/bed-frames'},
  {label: 'Pillows',     href: '/collections/pillows'},
  {label: 'Bedding',     href: '/collections/bedding'},
  {label: 'Sale',        href: '/collections/sale', highlight: true},
];

const MEGA_SIZES = [
  {label: 'Twin',     href: '/collections/shop-twin-size-mattresses'},
  {label: 'Twin XL',  href: '/collections/shop-twin-xl-size-mattresses'},
  {label: 'Full',     href: '/collections/shop-full-size-mattresses'},
  {label: 'Queen',    href: '/collections/shop-queen-size-mattress'},
  {label: 'King',     href: '/collections/shop-king-size-mattress'},
  {label: 'Cal King', href: '/collections/shop-california-king-size-mattresses'},
];

const MEGA_COLS = [
  {
    name:  'Serta Classic Collection',
    image: 'https://www.serta.com/adobe/assets/urn:aaid:aem:da016ab7-458e-4848-ba5a-32a01f5c2be7/as/Classic.png',
    links: [{label: 'Serta Classic', href: '/products/classic-mattress'}],
  },
  {
    name:  'iSeries NXG Collection',
    image: 'https://www.serta.com/adobe/assets/urn:aaid:aem:7a46b9b8-aee4-4e57-9806-ab13fc4cf9b6/as/iSeries.png',
    links: [
      {label: 'iSeries NXG Hybrid', href: '/collections/iseries-nxg-collection'},
      {label: 'iSeries NXG Foam',   href: '/collections/iseries-nxg-collection'},
      {label: 'Shop All',           href: '/collections/iseries-nxg-collection'},
    ],
  },
  {
    name:  'Perfect Sleeper Collection',
    image: 'https://www.serta.com/adobe/assets/urn:aaid:aem:f6ae8ad5-8593-4b8d-995c-a0e8344a7621/as/26_Serta_Launch_PerfectSleeper_Site_ShopByCollection_Thumbnail.avif',
    links: [
      {label: 'Perfect Sleeper Innerspring', href: '/collections/perfect-sleeper-assortment'},
      {label: 'Perfect Sleeper Hybrid',      href: '/collections/perfect-sleeper-assortment'},
      {label: 'Shop All',                    href: '/collections/perfect-sleeper-assortment'},
    ],
  },
  {
    name:  'iComfort Collection',
    image: 'https://www.serta.com/adobe/assets/urn:aaid:aem:406ea8b5-f6ef-470d-ae8d-eea4ef046103/as/iComfort.png',
    links: [
      {label: 'iComfort',    href: '/collections/icomfort-assortment'},
      {label: 'iComfortPro', href: '/collections/icomfort-assortment'},
      {label: 'Shop All',    href: '/collections/icomfort-assortment'},
    ],
  },
];

const MEGA_HERO = 'https://www.serta.com/adobe/assets/urn:aaid:aem:c2aa8cd2-a1ac-412c-991f-5d42c61a5152/as/SE24_Stretch_Sheep.jpg';

export function SertaHeader() {
  const [megaOpen, setMegaOpen]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [promoIdx, setPromoIdx]     = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setMegaOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  const prevPromo = () => setPromoIdx(i => (i - 1 + PROMO.length) % PROMO.length);
  const nextPromo = () => setPromoIdx(i => (i + 1) % PROMO.length);
  const msg = PROMO[promoIdx];

  return (
    <div ref={ref} style={{position: 'sticky', top: 0, zIndex: 200}}>

      {/* ── Utility bar ── */}
      <div style={{backgroundColor: '#00131F', color: '#fff'}}>
        <div style={{maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <Link to="/pages/mattress-store-locator" style={{display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#fff', textDecoration: 'none'}}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Find a store
          </Link>
          <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
            <button onClick={prevPromo} aria-label="Previous offer" style={{color: '#fff', opacity: 0.7, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', padding: '0 4px'}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <p style={{fontSize: 13, color: '#fff', whiteSpace: 'nowrap'}}>
              {msg.pre}<a href={msg.link} style={{color: 'inherit', textDecoration: 'underline', fontWeight: 700}}>{msg.linkText}</a>{msg.post}
            </p>
            <button onClick={nextPromo} aria-label="Next offer" style={{color: '#fff', opacity: 0.7, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', padding: '0 4px'}}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
          <Link to="/account" style={{fontSize: 13, color: '#fff', textDecoration: 'none'}}>Sign In</Link>
        </div>
      </div>

      {/* ── Main header ── */}
      <header style={{backgroundColor: '#fff', borderBottom: '1px solid #CDCED2'}}>
        <div style={{maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 72, display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center'}}>

          {/* Left: desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-stretch h-[72px]">
            {MAIN_NAV.map(item => (
              <div
                key={item.label}
                style={{position: 'relative', display: 'flex', alignItems: 'stretch'}}
                onMouseEnter={() => setMegaOpen(!!item.hasMega)}
                onMouseLeave={() => {}}
              >
                <Link
                  to={item.href}
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: item.highlight ? '#E5A100' : (megaOpen && item.hasMega ? '#20374D' : '#181D27'),
                    padding: '0 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    whiteSpace: 'nowrap',
                    textDecoration: 'none',
                    borderBottom: megaOpen && item.hasMega ? '2px solid #20374D' : '2px solid transparent',
                  }}
                >
                  {item.label}
                  {item.hasMega && (
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{transform: megaOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s'}}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  )}
                </Link>
              </div>
            ))}
          </nav>

          {/* Mobile: hamburger */}
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen(v => !v)}
            className="md:hidden flex justify-self-start"
            style={{color: '#181D27', background: 'none', border: 'none', cursor: 'pointer'}}
          >
            {mobileOpen
              ? <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            }
          </button>

          {/* Center: logo */}
          <Link to="/" aria-label="Serta home" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', lineHeight: 1}}>
            <p style={{fontSize: 8, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#20374D', marginBottom: 4, whiteSpace: 'nowrap'}}>
              WE MAKE THE WORLD&rsquo;S BEST MATTRESS.™
            </p>
            <img src="/serta-logo.svg" alt="Serta" width="74" height="59" style={{display: 'block'}} />
          </Link>

          {/* Right: quiz + cart */}
          <div style={{display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'flex-end'}}>
            <Link to="/pages/mattress-quiz" className="hidden md:block" style={{fontSize: 14, fontWeight: 600, color: '#181D27', textDecoration: 'none', whiteSpace: 'nowrap'}}>
              Mattress Quiz
            </Link>
            <CartDrawer />
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <nav style={{backgroundColor: '#fff', borderTop: '1px solid #CDCED2', padding: '8px 24px 24px'}}>
            {MAIN_NAV.map(item => (
              <Link
                key={item.label}
                to={item.href}
                style={{display: 'block', fontSize: 16, fontWeight: 600, color: item.highlight ? '#E5A100' : '#181D27', padding: '13px 0', borderBottom: '1px solid #CDCED2', textDecoration: 'none'}}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/pages/mattress-quiz" style={{display: 'block', fontSize: 16, fontWeight: 600, color: '#181D27', padding: '13px 0', borderBottom: '1px solid #CDCED2', textDecoration: 'none'}}>
              Mattress Quiz
            </Link>
          </nav>
        )}
      </header>

      {/* ── Mega menu ── */}
      {megaOpen && (
        <div
          onMouseEnter={() => setMegaOpen(true)}
          onMouseLeave={() => setMegaOpen(false)}
          style={{position: 'absolute', top: '100%', left: 0, right: 0, backgroundColor: '#fff', borderTop: '2px solid #20374D', borderBottom: '1px solid #CDCED2', boxShadow: '0 8px 32px rgba(0,0,0,.10)', zIndex: 300}}
        >
          <div style={{maxWidth: 1280, margin: '0 auto', padding: '32px 24px', display: 'grid', gridTemplateColumns: '180px 1fr 240px', gap: 32}}>
            {/* Shop by Size */}
            <div>
              <p style={{fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8F949E', marginBottom: 16, paddingBottom: 10, borderBottom: '1px solid #CDCED2'}}>Shop by Size</p>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                {MEGA_SIZES.map(s => (
                  <li key={s.label} style={{marginBottom: 10}}>
                    <Link to={s.href} style={{fontSize: 14, color: '#181D27', textDecoration: 'none'}}>{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Collections */}
            <div>
              <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16, paddingBottom: 10, borderBottom: '1px solid #CDCED2'}}>
                <p style={{fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8F949E', margin: 0}}>Mattresses</p>
                <Link to="/collections/mattresses" style={{fontSize: 13, fontWeight: 700, color: '#20374D', textDecoration: 'none'}}>All Mattresses →</Link>
              </div>
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24}}>
                {MEGA_COLS.map(col => (
                  <div key={col.name} style={{display: 'flex', gap: 14}}>
                    <img src={col.image} alt={col.name} style={{width: 90, height: 68, objectFit: 'contain', flexShrink: 0, backgroundColor: '#F7F4F0', borderRadius: 6}} />
                    <div>
                      <p style={{fontSize: 13, fontWeight: 700, color: '#181D27', marginBottom: 6, lineHeight: 1.3}}>{col.name}</p>
                      <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                        {col.links.map(lnk => (
                          <li key={lnk.label} style={{marginBottom: 4}}>
                            <Link to={lnk.href} style={{fontSize: 13, color: '#414651', textDecoration: 'none'}}>{lnk.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Hero image */}
            <div style={{borderRadius: 8, overflow: 'hidden'}}>
              <img src={MEGA_HERO} alt="Shop mattresses" style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block'}} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
