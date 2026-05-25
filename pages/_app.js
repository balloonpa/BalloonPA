import '@/styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { GA_ID, trackPageView } from '@/utils/gtag';
import CookieBanner from '@/components/CookieBanner';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', trackPageView);
    return () => router.events.off('routeChangeComplete', trackPageView);
  }, [router.events]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          wait_for_update: 500
        });
        gtag('js', new Date());
        gtag('config', '${GA_ID}');
      `}</Script>
      <Component {...pageProps} />
      <CookieBanner />
    </>
  );
}
