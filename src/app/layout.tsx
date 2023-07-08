import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './_components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Email Campaigns App',
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
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    )
}
