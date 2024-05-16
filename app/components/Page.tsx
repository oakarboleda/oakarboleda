import Footer from '@/app/components/global/Footer';
import Head from 'next/head';

import React from 'react';
import Header from '@/app/components/global/NavBar';

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
        <meta property="og:image" content="/oak.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://oakarboleda.io/" />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={desc} />
        <meta property="twitter:image" content="" />
      </Head>
      <main>
        <Header />
        {children}
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
