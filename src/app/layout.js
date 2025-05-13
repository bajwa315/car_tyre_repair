import { Geist, Geist_Mono } from "next/font/google";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Fatest Car Tyre Repair & Mobile Tyre Service in Dubai | Fast Response',
  description:
    '24/7 emergency car tyre repair, mobile tyre replacement, and onsite flat tyre services across Dubai. Fast response within 20 minutes! Professional tyre services at your location.',
  alternates: {
    canonical: 'https://www.car-tyre-repair.com/',
  },
  openGraph: {
    title: '24/7 Car Tyre Repair & Mobile Tyre Service in Dubai',
    description:
      'Fast emergency tyre repair and replacement services across Dubai. We come to you within 20 minutes!',
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
  keywords: [
    'car tyre repair Dubai',
    'flat tyre Dubai',
    'mobile tyre repair',
    'tyre replacement Dubai',
    '24/7 tyre service',
    'emergency tyre fix',
    'onsite tyre puncture repair',
    'mobile tyre change Dubai',
  ],
  robots: 'index, follow',
  viewport: {
    width: 'device-width',
    initialScale: 1.0,
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
      <body
        className={` scroll-smooth ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ToastContainer position="top-center" autoClose={3000} />
      </body>
    </html>
  );
}
