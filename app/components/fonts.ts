import {
  Audiowide,
  Duru_Sans,
  Oranienbaum,
  Syne,
  Zen_Dots,
} from 'next/font/google';

export const syne = Syne({
  display: 'swap',
  style: ['normal'],
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const oranienbaum = Oranienbaum({
  style: ['normal'],
  subsets: ['cyrillic'],
  display: 'swap',
  weight: ['400'],
});

export const audiowide = Audiowide({
  style: ['normal'],
  display: 'swap',
  subsets: ['latin'],
  weight: ['400'],
});

export const zenDots = Zen_Dots({
  display: 'swap',
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400'],
});

export const duruSans = Duru_Sans({
  display: 'swap',
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400'],
});
