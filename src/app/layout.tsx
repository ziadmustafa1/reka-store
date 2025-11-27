import type { Metadata } from 'next'
import './globals.css'
import { siteConfig } from '@/config/site'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['Next.js', 'React', 'Store', 'Ecommerce', 'Reka Store'],
  authors: [{ name: 'Reka Store' }],
  creator: 'Reka Store',
  openGraph: {
    type: 'website',
    locale: 'ar_EG',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className="flex min-h-screen flex-col bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
