import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export const metadata: Metadata = {
  title: 'Product',
  description: 'GLOW FLOW product details.',
};

export default function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((item) => item.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-24">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white/60">
            <Image
              src={product.images[0]}
              alt={product.name}
              width={1200}
              height={1400}
              className="h-[42rem] w-full object-cover"
            />
          </div>
        </div>

        <aside className="rounded-[2rem] border border-stone-200 bg-white/60 p-8 shadow-soft">
          <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">
            {product.category}
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-none">{product.name}</h1>
          <p className="mt-2 text-xl text-stone-500">{product.shortDescription}</p>
          <div className="mt-6 text-3xl font-medium text-stone-800">${product.price}</div>

          <p className="mt-8 text-base leading-7 text-stone-700">{product.description}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-[10px] uppercase tracking-[0.22em] text-white transition hover:bg-stone-700">
              Add to collection
            </button>
            <button className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-transparent px-6 py-3 text-[10px] uppercase tracking-[0.22em] text-stone-800 transition hover:bg-stone-100">
              Begin the ritual
            </button>
          </div>

          <div className="mt-10 space-y-6 border-t border-stone-200 pt-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">
                Details
              </p>
              <dl className="mt-4 space-y-3 text-sm text-stone-700">
                <div className="flex justify-between gap-4">
                  <dt>Origin</dt>
                  <dd>{product.origin || 'Natural mineral'}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Dimensions</dt>
                  <dd>{product.dimensions || 'Approx. 7 x 5 cm'}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Weight</dt>
                  <dd>{product.weight || 'Approx. 180 g'}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt>Burn time</dt>
                  <dd>{product.burnTime || '—'}</dd>
                </div>
              </dl>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">
                Care
              </p>
              <p className="mt-3 text-sm leading-6 text-stone-700">
                Burn on a heat-resistant surface. Never leave a burning candle unattended.
              </p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">
                Note
              </p>
              <p className="mt-3 text-sm leading-6 text-stone-700">
                Each crystal is naturally unique. No two pieces are exactly alike.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}