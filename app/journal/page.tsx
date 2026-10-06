import type { Metadata } from 'next'
import { journalEntries } from '@/data/products'

export const metadata: Metadata = {
  title: 'Journal',
  description: 'Rituals, objects and spaces shaped by slower living.',
}

export default function JournalPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-24">
      <header className="mb-12 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-stone-500">Journal</p>
        <h1 className="mt-4 font-serif text-5xl md:text-7xl">JOURNAL</h1>
      </header>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {journalEntries.map((entry) => (
          <article key={entry.id} className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white/50 transition duration-500 hover:-translate-y-1 hover:shadow-soft">
            <div className="h-56 w-full bg-[linear-gradient(135deg,#d7c3a0,_#f3e5d6_35%,#d2c7b7)]" />
            <div className="space-y-4 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">{entry.category}</p>
              <h2 className="font-serif text-3xl leading-tight">{entry.title}</h2>
              <p className="text-sm leading-6 text-stone-600">{entry.excerpt}</p>
              <span className="inline-flex text-xs uppercase tracking-[0.18em] text-stone-500">Read story</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
