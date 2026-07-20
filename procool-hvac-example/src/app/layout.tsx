import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ProCool HVAC | Professional Cooling & Heating Solutions',
  description: 'Expert HVAC services for residential and commercial properties in Metro Manila. Professional installation, maintenance, and emergency repairs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}
