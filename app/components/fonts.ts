import {
  Audiowide,
  Duru_Sans,
  Oranienbaum,
  Syne,
  Zen_Dots,
  Libre_Barcode_39_Text,
  Saira_Extra_Condensed,
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

export const libreBarcode39 = Libre_Barcode_39_Text({
  display: 'swap',
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400'],
});

export const sairaExtraCondensed = Saira_Extra_Condensed({
  display: 'swap',
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400'],
});
