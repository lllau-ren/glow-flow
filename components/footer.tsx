import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#f0e8df]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <p className="font-serif text-3xl text-stone-800">GLOW FLOW</p>
            <p className="mt-4 max-w-sm font-serif text-xl italic text-stone-600">Light for the moment.<br />Stone for what remains.</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Newsletter</p>
            <h3 className="mt-4 font-serif text-3xl">Enter the flow</h3>
            <p className="mt-3 text-sm leading-6 text-stone-600">Stories, objects and rituals for slower living.</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <input aria-label="Email" placeholder="Your email" className="w-full rounded-full border border-stone-300 bg-white/70 px-4 py-3 text-sm text-stone-700 outline-none placeholder:text-stone-400" />
              <button className="rounded-full bg-stone-900 px-5 py-3 text-xs uppercase tracking-[0.2em] text-white">Join</button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-3 text-sm text-stone-700">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Explore</p>
              <Link href="/shop">Shop</Link>
              <Link href="/rituals">Rituals</Link>
              <Link href="/journal">Journal</Link>
              <Link href="/about">About</Link>
            </div>
            <div className="space-y-3 text-sm text-stone-700">
              <p className="text-xs uppercase tracking-[0.2em] text-stone-500">More</p>
              <Link href="/about">Contact</Link>
              <Link href="/shop">Shipping</Link>
              <Link href="/shop">Returns</Link>
              <Link href="/shop">Privacy</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-stone-200 pt-8 text-sm text-stone-600 md:flex-row">
          <p>Instagram • Pinterest • TikTok</p>
          <p>© 2026 GLOW FLOW</p>
        </div>
      </div>
    </footer>
  )
}
