import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Light for the moment. Stone for what remains.',
};

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,10,9,0.54),rgba(13,10,9,0.15),rgba(13,10,9,0.2))]" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-end px-6 pb-16 pt-28 md:pb-24">
          <div className="max-w-2xl text-white">
            <p className="mb-5 text-[10px] uppercase tracking-[0.45em] text-stone-200">
              GLOW FLOW
            </p>
            <h1 className="font-serif text-5xl leading-[0.9] md:text-8xl">
              Light for the moment.
              <br />
              Stone for what remains.
            </h1>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-full bg-[#f5f0e8] px-7 py-3 text-[10px] uppercase tracking-[0.24em] text-stone-900 transition hover:bg-white"
              >
                Explore the collection
              </Link>
              <Link
                href="/rituals"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-transparent px-7 py-3 text-[10px] uppercase tracking-[0.24em] text-white transition hover:bg-white/10"
              >
                Discover the ritual
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 md:py-28">
        <p className="mb-6 text-center text-[10px] uppercase tracking-[0.3em] text-stone-500">
          Two elements. One ritual.
        </p>
        <h2 className="font-serif text-4xl leading-[1.1] text-stone-800 md:text-6xl">
          Some things are made to disappear.
          <br />
          Others are made to remain.
        </h2>
        <div className="mt-12 space-y-5 text-lg leading-8 text-stone-700 md:text-2xl md:leading-[1.8]">
          <p>Some things are made to disappear.</p>
          <p>A flame flickers. Wax slowly melts. A moment passes.</p>
          <p>Other things are made to remain.</p>
          <p>Stone forms beneath the earth. Crystals grow in silence. Time leaves its mark.</p>
          <p>GLOW FLOW brings these two elements together.</p>
          <p>The temporary and the enduring. Fire and earth. Light and stone.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-12 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500">
            Shop preview
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-6xl">
            Objects for quiet moments
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="group relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white/40 transition duration-500 hover:-translate-y-1 hover:shadow-soft"
            >
              <Image
                src={product.images[0]}
                alt={product.name}
                width={900}
                height={1100}
                className="h-[32rem] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(18,15,11,0.7))]" />
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <p className="text-[10px] uppercase tracking-[0.25em] text-stone-200">
                  {product.category}
                </p>
                <h3 className="mt-3 font-serif text-4xl">{product.name}</h3>
                <p className="mt-3 text-sm text-stone-200">{product.shortDescription}</p>
                <div className="mt-6 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-stone-200">
                  <span>View piece</span>
                  <span>${product.price}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#efe5d5] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem]">
              <Image
                src="https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80"
                alt="Melting candle wax"
                width={1200}
                height={1400}
                className="h-full min-h-[30rem] w-full object-cover"
              />
            </div>
            <div className="flex items-center rounded-[2rem] border border-stone-200 bg-white/40 p-10 text-stone-800">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-stone-500">
                  Light meets stone
                </p>
                <h2 className="mt-6 font-serif text-4xl md:text-5xl">
                  One changes in minutes.
                  <br />
                  One changes over millions of years.
                </h2>
                <p className="mt-8 text-lg leading-8 text-stone-700">
                  We place them together to remind ourselves that beauty can exist in both movement and stillness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2.5rem] border border-stone-200 bg-[#f3ece2] p-8 md:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">
                Ritual finder
              </p>
              <h2 className="mt-4 font-serif text-4xl md:text-6xl">
                What do you need today?
              </h2>
              <p className="mt-4 text-lg text-stone-600">I want to...</p>
            </div>
            <div>
              <RitualFinder />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white/60">
          <Image
            src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=80"
            alt="Warm interior with a candle and crystal"
            width={1800}
            height={1000}
            className="h-[30rem] w-full object-cover md:h-[40rem]"
          />
        </div>
        <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.25em] text-stone-500">
              Home interior
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-6xl">
              Make space for the moment.
            </h2>
          </div>
          <div className="max-w-xl text-lg text-stone-600">
            Objects that bring a sense of warmth, texture and stillness into the home.
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-[10px] uppercase tracking-[0.2em] text-white transition hover:bg-stone-700"
          >
            Shop home objects
          </Link>
        </div>
      </section>
    </>
  );
}

const RitualFinder = () => {
  const options = [
    {
      key: 'slow',
      label: 'slow down',
      pairing: 'Smoky Quartz + Sand Sculptural Candle',
      text: 'A grounding composition for reflective evenings and slow rituals.',
    },
    {
      key: 'grounded',
      label: 'feel grounded',
      pairing: 'Smoky Quartz + Clay Pillar Candle',
      text: 'Earthy warmth and depth for calmer spaces.',
    },
    {
      key: 'clarity',
      label: 'create clarity',
      pairing: 'Clear Quartz + Ivory Sculptural Candle',
      text: 'A clean pairing that brightens the room and the mind.',
    },
    {
      key: 'love',
      label: 'celebrate love',
      pairing: 'Rose Quartz + Soft Rose Candle',
      text: 'A warm, gentle ritual for connection and intimacy.',
    },
    {
      key: 'warmth',
      label: 'create warmth',
      pairing: 'Citrine + Golden Candle',
      text: 'Sunlit energy for cozy gatherings and joyful pauses.',
    },
    {
      key: 'beautiful',
      label: 'simply make my space beautiful',
      pairing: 'Natural Stone + Sand Spiral Candle',
      text: 'A composed pairing that brings texture and quiet elegance home.',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <button
            key={option.key}
            className="rounded-full border border-stone-300 bg-white/60 px-4 py-3 text-left text-[10px] uppercase tracking-[0.18em] text-stone-700 transition hover:border-stone-500 hover:bg-white"
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="rounded-[1.5rem] border border-stone-200 bg-white/70 p-6">
        <p className="text-[10px] uppercase tracking-[0.2em] text-stone-500">Your ritual</p>
        <h3 className="mt-4 font-serif text-3xl">Smoky Quartz + Sand Sculptural Candle</h3>
        <p className="mt-4 text-base leading-7 text-stone-700">
          A warm, grounded pairing shaped for soft evenings and stillness.
        </p>
        <button className="mt-6 inline-flex items-center rounded-full bg-stone-900 px-5 py-3 text-[10px] uppercase tracking-[0.18em] text-white">
          Begin your ritual
        </button>
      </div>
    </div>
  );
};