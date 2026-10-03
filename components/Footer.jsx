import Magnetic from '@/components/ui/Magnetic';

export default function Footer() {
  return (
    <footer id="finish" className="bg-asphalt px-[4vw] pb-10 pt-24 text-mist">
      <div className="flex flex-col gap-10 border-t border-mist/15 pt-16 md:flex-row md:items-end md:justify-between">
        <h2 className="font-display text-[clamp(3rem,10vw,9rem)] font-extrabold leading-[.88]">Take another lap.</h2>
        <Magnetic
          href="#top"
          className="inline-flex self-start rounded-sm bg-papaya px-7 py-4 font-semibold text-asphalt transition-colors duration-300 hover:bg-mist"
        >
          Back to start
        </Magnetic>
      </div>
      <p className="mt-24 text-sm text-ash">© {new Date().getFullYear()} Itzfizz</p>
    </footer>
  );
}
