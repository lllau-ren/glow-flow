import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'We believe in the beauty of slow things.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-24">
      <header className="mb-12 text-center">
        <p className="text-[10px] uppercase tracking-[0.25em] text-stone-500">About</p>
        <h1 className="mt-4 font-serif text-5xl md:text-7xl">
          # WE BELIEVE IN THE BEAUTY OF SLOW THINGS.
        </h1>
      </header>

      <div className="space-y-8 text-xl leading-9 text-stone-700 md:text-2xl md:leading-[1.8]">
        <p>GLOW FLOW began with a simple observation:</p>
        <p>some of the most beautiful objects in a home are the ones that ask us to slow down.</p>
        <p>A flame moving through a room.</p>
        <p>A stone shaped by geological time.</p>
        <p>The texture of handmade material.</p>
        <p>The quiet space between objects.</p>
        <p>We create objects that live somewhere between art and ritual.</p>
        <p>Designed to be seen.</p>
        <p>Made to be experienced.</p>
        <p>Created to become part of the spaces we call home.</p>
      </div>

      <div className="mt-16 text-center font-serif text-3xl tracking-[0.2em] text-stone-700 md:text-4xl">
        LIGHT · EARTH · RITUAL
      </div>
    </div>
  );
}