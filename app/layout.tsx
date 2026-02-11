import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import './globals.css'
import Providers from '@/lib/Providers'

export const metadata = {
  title: 'Retail Wagon',
  description: 'Retail Wagon - The place for all your purchases.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en" suppressHydrationWarning>
      <body
      >
        <Providers>
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        </Providers>
      </body>
    </html>
  )
}
