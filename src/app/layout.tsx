import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './_components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Response to 22nd Law Commission',
    description: 'About UCC Recommendations',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="mx-auto overflow-x-hidden">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}
