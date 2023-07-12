import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './_components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="mx-auto overflow-x-hidden">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
