/**
 * Central site content. Edit here instead of inside page markup.
 *
 * RULE: only add credits, press items, and links that have been verified and
 * approved. Anything left empty renders as a clearly labeled placeholder.
 */

export const site = {
  name: 'Jennifer Brammer',
  url: 'https://jenniferbrammer.com',
  tagline: 'An unmistakable presence.',
  roles: ['Actress', 'Luxury Lifestyle', 'Beauty'],
  defaultDescription:
    'The official website of Jennifer Brammer — actress, entrepreneur, and lifestyle figure. Film & television, The Brammer Society, gallery, press, and contact.',
  credit: 'Managed and developed by S Brands',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Film & Television', href: '/film-television' },
  { label: 'The Brammer Society', href: '/the-brammer-society' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Press', href: '/press' },
  { label: 'Contact', href: '/contact' },
];

/** Leave url empty until the official account is confirmed; empty links are hidden. */
export const socials: { label: string; icon: 'instagram' | 'x' | 'youtube' | 'imdb'; url: string }[] = [
  { label: 'Instagram', icon: 'instagram', url: '' },
  { label: 'X', icon: 'x', url: '' },
  { label: 'YouTube', icon: 'youtube', url: '' },
  { label: 'IMDb', icon: 'imdb', url: '' },
];

/** Verified film & television credits only. Empty array => placeholder rows. */
export const credits: { title: string; year: string; role: string; type: 'Film' | 'Television'; network?: string; url?: string }[] = [];

/** Verified press coverage only. Empty array => placeholder cards. */
export const press: { outlet: string; headline: string; date: string; url: string; excerpt?: string }[] = [];

/** Representation contacts. Fill in once confirmed. */
export const representation: { label: string; name: string; company: string; email: string }[] = [
  { label: 'Talent Agent', name: '', company: '', email: '' },
  { label: 'Management', name: '', company: '', email: '' },
  { label: 'Publicist', name: '', company: '', email: '' },
];

/**
 * Approved photographs. Put files in /public/images and set `src`
 * (e.g. '/images/hero.webp'). Empty src => labeled placeholder.
 */
export const images = {
  hero: { src: '', alt: 'Jennifer Brammer portrait', note: 'Hero portrait · landscape · min 2400×1600' },
  aboutPortrait: { src: '', alt: 'Jennifer Brammer in a white tailored suit', note: 'About portrait · 4:3 · min 1600×1200' },
  aboutPage: { src: '', alt: 'Jennifer Brammer portrait', note: 'Biography portrait · 4:5 · min 1200×1500' },
  society: { src: '', alt: 'A terrace table set for an evening of The Brammer Society', note: 'Society lifestyle image · landscape · min 2400×1200' },
  showreel: { src: '', alt: 'Showreel', note: 'Showreel video or still · 16:9' },
  gallery: [
    { src: '', alt: '', note: 'Gallery 01 · Portrait', category: 'Portraits' },
    { src: '', alt: '', note: 'Gallery 02 · Full length', category: 'Editorial' },
    { src: '', alt: '', note: 'Gallery 03 · Black & white', category: 'Portraits' },
    { src: '', alt: '', note: 'Gallery 04 · Lifestyle', category: 'Lifestyle' },
    { src: '', alt: '', note: 'Gallery 05 · Editorial', category: 'Editorial' },
    { src: '', alt: '', note: 'Gallery 06 · Portrait', category: 'Portraits' },
    { src: '', alt: '', note: 'Gallery 07 · Lifestyle', category: 'Lifestyle' },
    { src: '', alt: '', note: 'Gallery 08 · Editorial', category: 'Editorial' },
    { src: '', alt: '', note: 'Gallery 09 · Portrait', category: 'Portraits' },
  ],
};

