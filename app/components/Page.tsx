import Footer from '@/app/components/global/Footer';
import Head from 'next/head';
import MobileNavbar from '@/app/components/global/MobileNavbar';
import NavBar from '@/app/components/global/NavBar';
import React, { ReactChildren, Suspense } from 'react';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Points,
  PointMaterial,
  PerspectiveCamera,
  OrbitControls,
  Stars,
  Loader,
} from '@react-three/drei';

function Page({ currentPage, meta: { title, desc }, children }: PageProps) {
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
        <GoogleAnalytics gaId="G-XYZ" />
        <GoogleTagManager gtmId="GTM-XYZ" />
      </Head>
      <main className="from-purple via-blue to-blackblue w-full bg-gradient-to-t ">
        <div className="z-100 hidden sm:block">
          <NavBar />
        </div>
        <div className="z-100 -m-5 block sm:hidden">
          <MobileNavbar />
        </div>
        {children}
        <Footer />
      </main>
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
