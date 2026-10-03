'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger, useGSAP } from '@/lib/gsap';

const LINKS = [
  { href: '#top', label: 'Drive' },
  { href: '#results', label: 'Results' },
  { href: '#finish', label: 'Finish' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('#top');
  const header = useRef(null);
  const bar = useRef(null);

  useGSAP(() => {
    LINKS.forEach(({ href }) =>
      ScrollTrigger.create({
        trigger: href,
        start: 'top 55%',
        end: 'bottom 55%',
        refreshPriority: -1,
        onToggle: (s) => s.isActive && setActive(href),
      })
    );
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from(header.current, { y: -32, opacity: 0, duration: 0.9, ease: 'power3.out' });
      gsap.fromTo(bar.current, { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.2 } });
    });
  }, []);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <div ref={bar} aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left scale-x-0 bg-papaya" />
      <header
        ref={header}
        className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[4vw] py-4 text-white mix-blend-difference"
      >
        <a href="#top" className="font-display text-3xl font-black leading-none">Itzfizz</a>
        <nav aria-label="Primary" className="hidden gap-10 md:flex">
          {LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              aria-current={active === href ? 'true' : undefined}
              className={`relative py-1 text-base font-medium after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                active === href ? 'after:scale-x-100' : 'after:scale-x-0'
              }`}
            >
              {label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="py-2 text-base font-medium md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </header>
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-40 flex flex-col justify-center gap-4 bg-asphalt px-[6vw] text-mist transition-all duration-500 md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {LINKS.map(({ href, label }) => (
          <a key={href} href={href} onClick={() => setOpen(false)} className="font-display text-7xl font-black leading-none">
            {label}
          </a>
        ))}
      </div>
    </>
  );
}