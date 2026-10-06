"use client"

import Link from 'next/link'
import { useState } from 'react'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-[#f5f0e8]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-2xl tracking-[0.08em] text-stone-900">
          GLOW FLOW
        </Link>

        <nav className="hidden items-center gap-8 text-[10px] uppercase tracking-[0.22em] text-stone-700 md:flex">
          <Link href="/shop">Shop</Link>
          <Link href="/rituals">Rituals</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/about">About</Link>
        </nav>

        <div className="hidden items-center gap-5 text-[10px] uppercase tracking-[0.18em] text-stone-700 md:flex">
          <Link href="/shop">Search</Link>
          <Link href="/about">Account</Link>
          <button className="rounded-full border border-stone-300 bg-white/60 px-3 py-2">Cart (2)</button>
        </div>

        <button
          className="inline-flex rounded-full border border-stone-300 bg-white/60 px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-stone-700 md:hidden"
          onClick={() => setMobileOpen((value) => !value)}
        >
          Menu
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-stone-200 bg-[#f5f0e8] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-[10px] uppercase tracking-[0.22em] text-stone-700">
            <Link href="/shop">Shop</Link>
            <Link href="/rituals">Rituals</Link>
            <Link href="/journal">Journal</Link>
            <Link href="/about">About</Link>
          </div>
        </div>
      )}
    </header>
  )
}
