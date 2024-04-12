import '../styles/globals.css';
import {
  AnimatePresence,
  AnimateSharedLayout,
  LazyMotion,
  domAnimation,
} from 'framer-motion';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import RootLayout from './layout';

function app({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" type="image/x-icon" />

        <title>{`Oak Arboleda's Portfolio`}</title>

        <meta name="title" content="Oak Arboleda's Portfolio" />
        <meta name="description" content="Oak Arboleda Portfolio" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Oak Arboleda's Portfolio" />
        <meta property="og:description" content="Oak Arboleda's Portfolio" />
        <meta property="og:image" content="/avatar.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Oak Arboleda's Portfolioo" />
        <meta
          property="twitter:description"
          content="Oak Arboleda's Portfolio"
        />
        <meta property="twitter:image" content="/avatar.jpg" />
      </Head>
      <AnimateSharedLayout>
        <AnimatePresence initial={false}>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </AnimatePresence>
      </AnimateSharedLayout>
      <Script
        strategy="lazyOnload"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      ></Script>
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `}
      </Script>
    </>
  );
}

export default app;
