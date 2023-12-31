import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation';
const inter = Inter({ subsets: ['latin'] })
import Link from 'next/link';
export const metadata = {
  title: 'TrueId',
  description: 'Developed at starknet Hacker House',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Navigation />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
