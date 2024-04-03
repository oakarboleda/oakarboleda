import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import HomeLinks from './ui/home-links';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`$inter.className} antialiased`}>
        <HomeLinks />
        {children}
      </body>
    </html>
  );
}
