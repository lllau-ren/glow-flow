"use client"

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function CartPanel() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed right-5 top-20 z-40 rounded-full border border-stone-300 bg-white/80 px-4 py-2 text-[10px] uppercase tracking-[0.22em] text-stone-700 shadow-sm backdrop-blur-sm transition hover:bg-white"
      >
        Cart (2)
      </button>

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: 90, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 90, opacity: 0 }}
            transition={{ duration: 0.42, ease: 'easeOut' }}
            className="fixed right-5 top-24 z-50 w-[22rem] rounded-[2rem] border border-stone-200 bg-[#f8f4ef]/95 p-5 shadow-soft backdrop-blur-md"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-3xl text-stone-800">Cart</h3>
              <button onClick={() => setOpen(false)} className="text-[10px] uppercase tracking-[0.22em] text-stone-500">
                Close
              </button>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white/80 p-3">
                <div className="h-16 w-16 rounded-xl bg-[linear-gradient(135deg,#c7b59d,#eadcc3)]" />
                <div className="flex-1 text-sm text-stone-700">
                  <p className="font-medium">Sand Spiral Candle</p>
                  <p className="text-stone-500">Qty 1 • $76</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-stone-200 bg-white/80 p-3">
                <div className="h-16 w-16 rounded-xl bg-[linear-gradient(135deg,#d2b39b,#ecdfd1)]" />
                <div className="flex-1 text-sm text-stone-700">
                  <p className="font-medium">Smoky Quartz</p>
                  <p className="text-stone-500">Qty 1 • $32</p>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-stone-200 pt-5">
              <div className="flex items-center justify-between text-stone-700">
                <span>Subtotal</span>
                <span>$108</span>
              </div>
              <button className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-stone-900 px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-white transition hover:bg-stone-700">
                Checkout
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  )
}
