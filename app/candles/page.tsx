import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { candles } from '@/data/products';

export const metadata: Metadata = {
  title: 'Candles',
  description: 'Sculptural forms designed to live in your space, before and after the flame.',
};

export default function CandlesPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-24">
      <header className="mb-12 text-center">
        <p className="text-[10px] uppercase tracking-[0.25em] text-stone-500">Collection</p>
        <h1 className="mt-4 font-serif text-5xl md:text-7xl"># CANDLES</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600">
          Sculptural forms designed to live in your space, before and after the flame.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {candles.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.slug}`}
            className="group block overflow-hidden rounded-[2rem] border border-stone-200/90 bg-white/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="overflow-hidden">
              <Image
                src={product.images[0]}
                alt={product.name}
                width={800}
                height={1000}
                className="h-[28rem] w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="space-y-3 p-6">
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">
                {product.collection}
              </p>
              <h2 className="font-serif text-3xl leading-none">{product.name}</h2>
              <p className="text-sm leading-6 text-stone-600">{product.shortDescription}</p>
              <div className="flex items-center justify-between pt-2 text-sm text-stone-700">
                <span>${product.price}</span>
                <span className="text-stone-500">View</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}