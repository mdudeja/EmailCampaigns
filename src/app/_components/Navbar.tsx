'use client'

import { useEffect, useState } from 'react'

export default function Navbar({
    url,
    app_variant,
}: {
    url: string
    app_variant: string
}) {
    const [counts, setCounts] = useState<{ [key: string]: number }>({
        visits: 0,
        emails: 0,
    })

    function updateVisits() {
        fetch(`/api/updatecounts?app_variant=${app_variant}&count=visits`, {
            method: 'POST',
        })
            .then((res) => res.json())
            .then((data) => {})
    }

    function updateEmails() {
        fetch(`/api/updatecounts?app_variant=${app_variant}&count=emails`, {
            method: 'POST',
        })
            .then((res) => res.json())
            .then((data) => {})
    }

    useEffect(() => {
        fetch(`/api/counts?app_variant=${app_variant}`)
            .then((res) => res.json())
            .then((data) => {
                setCounts({
                    visits: parseInt(data.visits),
                    emails: parseInt(data.emails),
                })
                setTimeout(updateVisits, 1000)
            })
    }, [])

    return (
        <nav className="border-gray-200 bg-white dark:bg-gray-900">
            <div className="mx-auto flex h-20 max-w-screen-xl flex-wrap items-center justify-between p-4">
                <div className="flex w-4/6 flex-col items-start">
                    <span className="text-md overflow-hidden text-ellipsis whitespace-nowrap font-semibold dark:text-white md:text-2xl">
                        Respond to Law Commission
                    </span>
                    <span className="text-xs md:text-base">
                        <span>Total Visits: {counts.visits} |</span>
                        <span> Total Emails: {counts.emails}</span>
                    </span>
                </div>
                <div className="flex flex-col">
                    <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="mr-3 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
                        onClick={updateEmails}
                    >
                        Send Email
                    </a>
                </div>
            </div>
        </nav>
    )
}
