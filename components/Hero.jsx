'use client';

import { useRef } from 'react';
import { gsap, useGSAP } from '@/lib/gsap';
import Car from '@/components/ui/Car';
import Magnetic from '@/components/ui/Magnetic';

const LETTERS = 'ITZFIZZ'.split('');

export default function Hero() {
  const root = useRef(null);
  const scene = useRef(null);
  const car = useRef(null);
  const word = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('[data-intro]', { opacity: 0, y: 16, duration: 0.9, stagger: 0.12, ease: 'power3.out', delay: 0.25 });
      gsap.set(car.current, { xPercent: -50, yPercent: -50 });
      gsap
        .timeline({
          defaults: { ease: 'none', duration: 1 },
          scrollTrigger: { trigger: root.current, start: 'top top', end: '+=240%', pin: scene.current, scrub: 0.5, invalidateOnRefresh: true },
        })
        .fromTo(word.current, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)' }, 0)
        .fromTo(car.current, { x: 0 }, { x: () => root.current.offsetWidth }, 0)
        .fromTo('[data-lane]', { backgroundPositionX: 0 }, { backgroundPositionX: '-100vw' }, 0)
        .to('[data-hint]', { opacity: 0, duration: 0.1 }, 0);
    });
  }, { scope: root });

  return (
    <section id="top" ref={root} className="relative">
      <div ref={scene} className="grain flex h-[100svh] flex-col justify-between overflow-hidden pb-8 pt-24">
        <h1 aria-label="Welcome to Itzfizz" className="relative my-auto">
          <span data-intro className="block px-[4vw] pb-3 text-[clamp(1.25rem,2.6vw,2.25rem)] font-medium text-slate">
            Welcome to
          </span>
          <span className="relative block border-y border-asphalt/20">
            <span
              ref={word}
              aria-hidden="true"
              className="flex justify-between px-[3vw] py-[2vw] font-display text-[27vw] font-black leading-[.8]"
            >
              {LETTERS.map((l, i) => <span key={i}>{l}</span>)}
            </span>
            <span
              data-lane
              aria-hidden="true"
              className="absolute inset-x-0 -bottom-[3px] h-[3px]"
              style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(16,24,32,.45) 0 28px, transparent 28px 64px)' }}
            />
            <span ref={car} aria-hidden="true" className="absolute left-0 top-1/2 block w-[36vw] will-change-transform motion-reduce:hidden md:w-[26vw]">
              <Car className="block w-full" />
            </span>
          </span>
        </h1>
        <div className="flex flex-col gap-6 px-[4vw] md:flex-row md:items-end md:justify-between">
          <p data-intro className="max-w-[34ch] text-lg text-slate md:text-xl">
            Digital experiences that turn movement into measurable results.
          </p>
          <div data-intro className="flex items-center gap-6">
            <span data-hint className="text-sm text-slate">Scroll to drive</span>
            <Magnetic
              href="#results"
              className="inline-flex rounded-sm bg-asphalt px-7 py-4 font-semibold text-mist transition-colors duration-300 hover:bg-papaya hover:text-asphalt"
            >
              See the results
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
