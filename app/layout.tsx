'use client';
import '@/app/ui/global.css';
import NavBar from './ui/NavBar';
import Footer from './ui/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
