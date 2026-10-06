import type { Metadata } from 'next'
import Link from 'next/link'
import { rituals } from '@/data/products'

export const metadata: Metadata = {
  title: 'Rituals',
  description: 'A pairing of light and earth.',
}

export default function RitualsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-24">
      <header className="mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-stone-500">Collection</p>
        <h1 className="mt-4 font-serif text-5xl md:text-7xl"># RITUALS</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-stone-600">A pairing of light and earth.</p>
      </header>

      <div className="grid gap-10 lg:grid-cols-2">
        {rituals.map((ritual) => (
          <article key={ritual.id} className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white/50 p-6 shadow-soft">
            <div className="mb-6 rounded-[1.5rem] border border-stone-200 bg-stone-100 p-8 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">The ritual</p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">{ritual.name}</h2>
            </div>
            <div className="space-y-4 text-stone-600">
              <p className="text-lg leading-8">{ritual.description}</p>
              <p className="text-sm uppercase tracking-[0.18em] text-stone-500">{ritual.intention}</p>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-stone-200 pt-6">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-stone-500">Pairing</p>
                <p className="mt-2 text-base text-stone-700">{ritual.candle} + {ritual.crystal}</p>
              </div>
              <Link href="/shop" className="inline-flex items-center rounded-full border border-stone-300 bg-stone-900 px-5 py-3 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-stone-700">
                Begin the ritual
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
