'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';

const STATS = [
  { value: 58, up: true, label: 'Increase in pick-up point use' },
  { value: 23, up: false, label: 'Decrease in customer phone calls' },
  { value: 27, up: true, label: 'Increase in pick-up point use' },
  { value: 40, up: false, label: 'Decrease in customer phone calls' },
];

export default function Stats() {
  const root = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.utils.toArray('[data-count]').forEach((el) => {
        const state = { v: 0 };
        el.textContent = '0';
        gsap.to(state, {
          v: Number(el.dataset.count),
          duration: 1.8,
          ease: 'power3.out',
          onUpdate: () => { el.textContent = Math.round(state.v); },
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        });
      });
    });
  }, { scope: root });

  return (
    <section id="results" ref={root} className="bg-asphalt px-[4vw] py-24 text-mist md:py-36">
      <h2 className="mb-16 font-display text-[clamp(3rem,9vw,8rem)] font-extrabold leading-[.88] md:mb-24">
        Fewer calls.
        <br />
        More pick-ups.
      </h2>
      <ul>
        {STATS.map((s, i) => (
          <li key={i} className="grid grid-cols-12 items-end gap-x-6 border-t border-mist/15 py-8 md:py-10">
            <p className="col-span-12 font-display text-[clamp(6rem,22vw,17rem)] font-black leading-[.8] md:col-span-8">
              <span aria-hidden="true"><span data-count={s.value}>{s.value}</span>%</span>
              <span className="sr-only">{s.value} percent</span>
            </p>
            <p className="col-span-12 mt-6 flex items-center gap-3 text-lg text-ash md:col-span-4 md:mt-0 md:text-xl">
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" className={s.up ? 'text-papaya' : 'rotate-180 text-ash'}>
                <path d="M10 3v14M4 9l6-6 6 6" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
              {s.label}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
