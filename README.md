# Itzfizz scroll site

Next.js 14 (static export) + Tailwind CSS + GSAP ScrollTrigger.

## Run

    npm install
    npm run dev        # http://localhost:3000
    npm run build      # static site in ./out
    npm run preview    # serve ./out locally



## Swap the car

`components/ui/Car.jsx` is an inline SVG. To use your own top-view PNG (facing right), put it in
`public/car.png` and replace the SVG with
`<img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/car.png`} alt="" className="block w-full" />`.

## Design decisions

- Palette: tarmac grey (mist), asphalt, and one papaya accent taken from the car itself.
- Type: Big Shoulders Display (racing-number condensed) for the display, Hanken Grotesk for text.
- Motion: one scroll-scrubbed scene. The car's position drives the reveal of the headline, so the
  animation is the content. Counters fire once. Everything else stays still.
- Reduced motion: the headline is fully visible, the car is hidden, counters show final values.
