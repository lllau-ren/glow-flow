import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-6 text-center">
      <p className="text-[10px] uppercase tracking-[0.3em] text-stone-500">404</p>
      <h1 className="mt-4 font-serif text-5xl">Page not found</h1>
      <p className="mt-4 text-lg text-stone-600">
        The ritual you were looking for has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full bg-stone-900 px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-white"
      >
        Return home
      </Link>
    </div>
  );
}