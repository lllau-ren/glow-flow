export type Product = {
  id: string
  slug: string
  name: string
  category: 'Candle' | 'Crystal' | 'Ritual'
  collection: string
  price: number
  currency: string
  description: string
  shortDescription: string
  images: string[]
  material?: string
  dimensions?: string
  weight?: string
  origin?: string
  burnTime?: string
  ritual?: string
  tags: string[]
  inventory: number
}

export type Ritual = {
  id: string
  name: string
  intention: string
  candle: string
  crystal: string
  description: string
  story: string
  image: string
}

export type JournalEntry = {
  id: string
  category: string
  title: string
  excerpt: string
}

export const candles: Product[] = [
  {
    id: 'form-i',
    slug: 'form-i',
    name: 'FORM I',
    category: 'Candle',
    collection: 'Candles',
    price: 78,
    currency: 'USD',
    description: 'A quietly sculptural candle with soft ivory tones and a clean architectural profile.',
    shortDescription: 'Ivory sculptural candle',
    images: ['https://images.unsplash.com/photo-1602872029708-84d970d3386b?auto=format&fit=crop&w=1200&q=80'],
    material: 'Soy wax / natural wax blend',
    dimensions: '14 cm',
    burnTime: '45 hours',
    tags: ['ivory', 'architectural', 'soft glow'],
    inventory: 12,
  },
  {
    id: 'form-ii',
    slug: 'form-ii',
    name: 'FORM II',
    category: 'Candle',
    collection: 'Candles',
    price: 82,
    currency: 'USD',
    description: 'A sand-toned spiral form inspired by quiet movement and the curve of a stone path.',
    shortDescription: 'Sand spiral candle',
    images: ['https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1200&q=80'],
    material: 'Soy wax / natural wax blend',
    dimensions: '16 cm',
    burnTime: '50 hours',
    tags: ['spiral', 'sand', 'warmth'],
    inventory: 10,
  },
  {
    id: 'form-iii',
    slug: 'form-iii',
    name: 'FORM III',
    category: 'Candle',
    collection: 'Candles',
    price: 88,
    currency: 'USD',
    description: 'A clay pillar with a grounded silhouette designed to sit with ease in a room.',
    shortDescription: 'Clay pillar candle',
    images: ['https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80'],
    material: 'Soy wax / natural wax blend',
    dimensions: '18 cm',
    burnTime: '55 hours',
    tags: ['clay', 'pillar', 'minimal'],
    inventory: 8,
  },
  {
    id: 'form-iv',
    slug: 'form-iv',
    name: 'FORM IV',
    category: 'Candle',
    collection: 'Candles',
    price: 92,
    currency: 'USD',
    description: 'A sculptural stone arch shape that catches the light with quiet intensity.',
    shortDescription: 'Stone arch candle',
    images: ['https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80'],
    material: 'Soy wax / natural wax blend',
    dimensions: '20 cm',
    burnTime: '60 hours',
    tags: ['arch', 'stone', 'editorial'],
    inventory: 7,
  },
]

export const crystals: Product[] = [
  {
    id: 'smoky-quartz',
    slug: 'smoky-quartz',
    name: 'SMOKY QUARTZ',
    category: 'Crystal',
    collection: 'Crystals',
    price: 32,
    currency: 'USD',
    description: 'A naturally formed mineral with deep translucent tones and subtle variations created over geological time.',
    shortDescription: 'Grounding crystal',
    images: ['https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?auto=format&fit=crop&w=1200&q=80'],
    material: 'Natural mineral',
    dimensions: '8 x 6 cm',
    weight: '180 g',
    origin: 'Brazil',
    tags: ['grounding', 'stillness', 'earth'],
    inventory: 14,
  },
  {
    id: 'clear-quartz',
    slug: 'clear-quartz',
    name: 'CLEAR QUARTZ',
    category: 'Crystal',
    collection: 'Crystals',
    price: 36,
    currency: 'USD',
    description: 'A bright, clear form with subtle mineral depth and a luminous presence in natural light.',
    shortDescription: 'Clarity crystal',
    images: ['https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80'],
    material: 'Natural mineral',
    dimensions: '9 x 7 cm',
    weight: '210 g',
    origin: 'Madagascar',
    tags: ['clarity', 'light', 'clean'],
    inventory: 12,
  },
  {
    id: 'rose-quartz',
    slug: 'rose-quartz',
    name: 'ROSE QUARTZ',
    category: 'Crystal',
    collection: 'Crystals',
    price: 34,
    currency: 'USD',
    description: 'Soft, warm mineral color with gentle translucence and an unmistakably calm presence.',
    shortDescription: 'Soft rose crystal',
    images: ['https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80'],
    material: 'Natural mineral',
    dimensions: '7 x 6 cm',
    weight: '170 g',
    origin: 'South Africa',
    tags: ['rose', 'gentle', 'warmth'],
    inventory: 11,
  },
  {
    id: 'citrine',
    slug: 'citrine',
    name: 'CITRINE',
    category: 'Crystal',
    collection: 'Crystals',
    price: 38,
    currency: 'USD',
    description: 'Golden mineral warmth with mineral complexity and a luminous, uplifting expression.',
    shortDescription: 'Golden warmth crystal',
    images: ['https://images.unsplash.com/photo-1610552050897-d3d5b12e2f48?auto=format&fit=crop&w=1200&q=80'],
    material: 'Natural mineral',
    dimensions: '8 x 5 cm',
    weight: '175 g',
    origin: 'Brazil',
    tags: ['golden', 'warmth', 'optimism'],
    inventory: 9,
  },
]

export const rituals: Ritual[] = [
  {
    id: 'grounding-ritual',
    name: 'THE GROUNDING RITUAL',
    intention: 'slow down',
    candle: 'Warm Sand Candle',
    crystal: 'Smoky Quartz',
    description: 'A quiet pairing for slow evenings, warm spaces and moments of stillness.',
    story: 'Created for the gentle rhythm of evening light and a slower pace.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'clarity-ritual',
    name: 'THE CLARITY RITUAL',
    intention: 'create clarity',
    candle: 'Ivory Sculptural Candle',
    crystal: 'Clear Quartz',
    description: 'Light and mineral form brought together in a simple, intentional composition.',
    story: 'For a room that needs clarity, quiet and order.',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'love-ritual',
    name: 'THE LOVE RITUAL',
    intention: 'celebrate love',
    candle: 'Soft Rose Candle',
    crystal: 'Rose Quartz',
    description: 'Soft form, warm light and the beauty of connection.',
    story: 'A gentle composition for the spaces where affection lives.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'abundance-ritual',
    name: 'THE ABUNDANCE RITUAL',
    intention: 'create warmth',
    candle: 'Golden Candle',
    crystal: 'Citrine',
    description: 'A warm composition inspired by light, optimism and possibility.',
    story: 'A bright, generous ritual for the heart of a room.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
  },
]

export const journalEntries: JournalEntry[] = [
  { id: 'lighting-candle', category: 'Rituals', title: 'The Art of Lighting a Candle', excerpt: 'A slow, considered ritual can change the mood of a room before the first flame begins.' },
  { id: 'natural-imperfection', category: 'Objects', title: 'Why Natural Imperfection Matters', excerpt: 'Texture, variation and asymmetry make a home feel lived in, warm and deeply considered.' },
  { id: 'quiet-corner', category: 'Home', title: 'A Guide to Creating a Quiet Corner', excerpt: 'The most beautiful interiors hold space for stillness, tactility and a little softness.' },
  { id: 'story-of-smoky-quartz', category: 'Materials', title: 'The Story of Smoky Quartz', excerpt: 'Formed deep within the earth, smoky quartz carries a quiet and grounding presence.' },
  { id: 'how-light-changes-room', category: 'Home', title: 'How Light Changes a Room', excerpt: 'A single candle can transform the atmosphere of a space with warmth, shadow and movement.' },
  { id: 'objects-that-slow-us-down', category: 'Objects', title: 'Objects That Slow Us Down', excerpt: 'At GLOW FLOW, every object is designed to invite attention and stillness.' },
]

export const products = [...candles, ...crystals]
