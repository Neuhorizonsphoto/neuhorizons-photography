import './globals.css';

export const metadata = {
  title: 'Neuhorizons Photography | Colorado Photographer',
  description: 'Colorado portrait, senior, action, and automotive photography. Serving clients throughout Colorado.',
  metadataBase: new URL('https://neuhorizonsphotography.com'),
  openGraph: {
    title: 'Neuhorizons Photography',
    description: 'Capturing moments beyond the horizon throughout Colorado.',
    url: 'https://neuhorizonsphotography.com',
    siteName: 'Neuhorizons Photography',
    images: ['/logo.png'],
    locale: 'en_US',
    type: 'website'
  },
  icons: { icon: '/logo.png' }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
