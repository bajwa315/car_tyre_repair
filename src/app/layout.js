import { Geist, Geist_Mono } from "next/font/google";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Fastest Car Tyre Repair & Mobile Tyre Service in Dubai | Fast Response',
  description: '24/7 emergency car tyre repair, mobile tyre replacement, and onsite flat tyre services across Dubai. Fast response within 20 minutes! Professional tyre services at your location.',
  viewport: 'width=device-width, initial-scale=1.0',
  alternates: {
    canonical: 'https://www.car-tyre-repair.com/',
  },
  openGraph: {
    title: '24/7 Car Tyre Repair & Mobile Tyre Service in Dubai',
    description: 'Fast emergency tyre repair and replacement services across Dubai. We come to you within 20 minutes!',
    type: 'website',
    url: 'https://www.car-tyre-repair.com/',
    images: [
      {
        url: 'https://www.car-tyre-repair.com/tyre-bg.jpg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        <link rel='icon' href='/logo.png' />
        <meta
          name='keywords'
          content='car tyre repair Dubai, flat tyre Dubai, mobile tyre repair, tyre replacement Dubai, 24/7 tyre service, emergency tyre fix, onsite tyre puncture repair, mobile tyre change Dubai'
        />
        <meta name='robots' content='index, follow' />
      </Head>

      <body className={`scroll-smooth ${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-PJVH9VVG'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Google Tag Manager Script */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PJVH9VVG');
          `}
        </Script>

        {/* Google Ads gtag.js Script */}
        <Script 
          id="google-ads-tag"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17036263320"
        />
        <Script id="google-ads-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17036263320');
          `}
        </Script>

        {children}
        <ToastContainer position='top-center' autoClose={3000} />
      </body>
    </html>
  );
}
