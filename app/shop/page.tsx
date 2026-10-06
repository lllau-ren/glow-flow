import type { Metadata } from 'next';
import Link from 'next/link';
import { candles, crystals, rituals } from '@/data/products';

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Objects for quiet moments.',
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-24 text-stone-800">
      <header className="mb-12">
        <p className="mb-4 text-[10px] uppercase tracking-[0.2em] text-stone-500">Shop</p>
        <h1 className="font-serif text-5xl md:text-7xl">Objects for quiet moments.</h1>
      </header>

      <section className="grid gap-8 md:grid-cols-3">
        <div className="rounded-[2rem] border border-stone-200/80 bg-white/50 p-8">
          <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500">Candles</span>
          <h2 className="mt-5 font-serif text-4xl">Sculptural light.</h2>
          <p className="mt-4 text-base leading-7 text-stone-600">
            Architectural forms designed to soften a room before and after the flame.
          </p>
          <Link href="/candles" className="mt-6 inline-flex text-[10px] uppercase tracking-[0.2em] text-stone-700">
            View collection
          </Link>
        </div>

        <div className="rounded-[2rem] border border-stone-200/80 bg-white/50 p-8">
          <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500">Crystals</span>
          <h2 className="mt-5 font-serif text-4xl">Natural form.</h2>
          <p className="mt-4 text-base leading-7 text-stone-600">
            Earth-made textures and mineral character, each one naturally unique.
          </p>
          <Link href="/crystals" className="mt-6 inline-flex text-[10px] uppercase tracking-[0.2em] text-stone-700">
            View collection
          </Link>
        </div>

        <div className="rounded-[2rem] border border-stone-200/80 bg-white/50 p-8">
          <span className="text-[10px] uppercase tracking-[0.25em] text-stone-500">Rituals</span>
          <h2 className="mt-5 font-serif text-4xl">A pairing of light and earth.</h2>
          <p className="mt-4 text-base leading-7 text-stone-600">
            Curated compositions for slow evenings and beautifully lived-in spaces.
          </p>
          <Link href="/rituals" className="mt-6 inline-flex text-[10px] uppercase tracking-[0.2em] text-stone-700">
            View collection
          </Link>
        </div>
      </section>
    </div>
  );
}