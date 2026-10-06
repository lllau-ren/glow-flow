import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { crystals } from '@/data/products';

export const metadata: Metadata = {
  title: 'Crystals',
  description: 'Natural forms shaped by time.',
};

export default function CrystalsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-24">
      <header className="mb-12 text-center">
        <p className="text-[10px] uppercase tracking-[0.25em] text-stone-500">Collection</p>
        <h1 className="mt-4 font-serif text-5xl md:text-7xl"># CRYSTALS</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600">
          Natural forms shaped by time.
        </p>
      </header>

      <div className="space-y-8">
        {crystals.map((product) => (
          <article
            key={product.id}
            className="grid gap-6 overflow-hidden rounded-[2rem] border border-stone-200 bg-white/50 p-4 md:grid-cols-[1.2fr_1.6fr] md:p-6"
          >
            <div className="overflow-hidden rounded-[1.5rem]">
              <Image
                src={product.images[0]}
                alt={product.name}
                width={900}
                height={1100}
                className="h-full min-h-[24rem] w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between p-3 md:p-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-stone-500">
                  {product.origin}
                </p>
                <h2 className="mt-3 font-serif text-4xl md:text-5xl">{product.name}</h2>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-stone-500">
                  {product.material}
                </p>
                <p className="mt-6 max-w-xl text-base leading-7 text-stone-600">
                  {product.description}
                </p>
              </div>

              <div className="mt-8 grid gap-5 border-t border-stone-200 pt-6 md:grid-cols-2">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">
                    Dimensions
                  </p>
                  <p className="mt-2 text-lg text-stone-700">{product.dimensions}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">
                    Price
                  </p>
                  <p className="mt-2 text-lg text-stone-700">${product.price}</p>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-between gap-4 border-t border-stone-200 pt-6">
                <p className="text-sm text-stone-600">
                  Each crystal is naturally unique. Shape, color and inclusions may vary.
                </p>
                <Link
                  href={`/product/${product.slug}`}
                  className="inline-flex items-center rounded-full border border-stone-300 bg-stone-900 px-5 py-3 text-[10px] uppercase tracking-[0.18em] text-white transition hover:bg-stone-700"
                >
                  View piece
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}