import "./globals.css"


export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="max-w-[1200px] mx-auto">{children}</body>
    </html>
  )
}
