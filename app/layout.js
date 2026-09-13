import './globals.css'

const siteUrl = 'https://luxury-rent-car-chi.vercel.app'
const siteName = 'Annayyara Garage 7'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Sewa Mobil Surabaya | Annayyara Garage 7',
    template: '%s | Annayyara Garage 7',
  },
  description: 'Sewa mobil premium di Surabaya dengan driver profesional. Armada lengkap: Alphard, Vellfire, Fortuner, Hiace, dan lainnya. Booking mudah via WhatsApp.',
  keywords: [
    'sewa mobil surabaya',
    'rental mobil surabaya',
    'sewa mobil dengan driver surabaya',
    'rental mobil premium surabaya',
    'sewa alphard surabaya',
    'annayyara garage 7',
  ],
  authors: [{ name: siteName }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Sewa Mobil Surabaya | Annayyara Garage 7',
    description: 'Sewa mobil premium di Surabaya dengan driver profesional. Armada lengkap, harga bersaing, booking mudah via WhatsApp.',
    url: siteUrl,
    siteName,
    images: [
      {
        url: '/media/hero.jpeg',
        width: 1200,
        height: 630,
        alt: 'Annayyara Garage 7 - Sewa Mobil Surabaya',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sewa Mobil Surabaya | Annayyara Garage 7',
    description: 'Sewa mobil premium di Surabaya dengan driver profesional.',
    images: ['/media/hero.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoRental',
  name: siteName,
  image: `${siteUrl}/media/hero.jpeg`,
  url: siteUrl,
  telephone: '+6281392294199',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Wisma Tirta Agung Asri V.87 Gununganyar',
    addressLocality: 'Surabaya',
    addressRegion: 'Jawa Timur',
    addressCountry: 'ID',
  },
  areaServed: 'Surabaya',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
