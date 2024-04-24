import Footer from '@/app/components/global/Footer';
import Head from 'next/head';
import MobileNavbar from '@/app/components/global/MobileNavbar';
import NavBar from '@/app/components/global/NavBar';
import React from 'react';
import { GoogleAnalytics } from 'nextjs-google-analytics';

interface props {
  currentPage: string;
  meta: { title: string; desc: string };
  children: React.ReactNode;
  className?: string; // Add this line
}

function Page({
  currentPage,
  meta: { title, desc },
  children,
  className,
}: props) {
  const pageTitle = `${
    currentPage === 'Home'
      ? 'Oak Arboleda - Web Developer, Designer, Creator.'
      : `${currentPage} - oakarboleda.io`
  }`;
  console.log(currentPage);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="title" content={pageTitle} />
        <meta name="description" content={desc} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://oakarboleda.io/" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={desc} />
        <meta
          property="og:image"
          content="https://braydentw.io/static/misc/og.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://oakarboleda.io/" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={desc} />
        <meta
          property="twitter:image"
          content="https://oakarboleda.io/static/misc/og.png"
        ></meta>

        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </Head>
      <main>
        <div className="sky">
          <div className="stars"></div>
          <div className="stars1"></div>
          <div className="stars2"></div>
          <div className="shooting-stars"></div>
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Page;

type PageProps = {
  currentPage: string;
  meta: {
    title?: string;
    desc: string;
  };
  children?: JSX.Element | JSX.Element[];
};
