import './globals.css'

export const metadata = {
  title: 'Luxury Rent Car Surabaya',
  description: 'Sewa mobil premium dengan driver profesional',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
