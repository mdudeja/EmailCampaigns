'use client'

import { useEffect, useState } from "react"

export default function Navbar({url, app_variant}: {url: string, app_variant: string}) {
    const [counts, setCounts] = useState<{[key: string]: number}>({visits: 0, emails: 0})

    function updateVisits() {
        fetch(`/api/updatecounts?app_variant=${app_variant}&count=visits`, {
            method: 'POST',
        })
            .then((res) => res.json())
            .then((data) => {
                setCounts({
                    visits: parseInt(data.visits),
                    emails: parseInt(data.emails),
                })
            })
    }

    function updateEmails() {
        fetch(`/api/updatecounts?app_variant=${app_variant}&count=emails`, {
            method: 'POST',
        })
            .then((res) => res.json())
            .then((data) => {
                setCounts({
                    visits: parseInt(data.visits),
                    emails: parseInt(data.emails),
                })
            })
    }

    useEffect(() => {
        fetch(`/api/counts?app_variant=${app_variant}`)
            .then((res) => res.json())
            .then((data) => {
                setCounts({
                    visits: parseInt(data.visits),
                    emails: parseInt(data.emails),
                })
                updateVisits()
            })
    }, [])

    return (
        <nav className="bg-white dark:bg-gray-900 border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 h-20">
                <div className="flex flex-col items-start w-3/5">
                    <span className="text-md md:text-2xl font-semibold whitespace-nowrap dark:text-white overflow-hidden text-ellipsis">
                        Respond to Law Commission
                    </span>
                    <span>
                        <span>Total Visits: {counts.visits} |</span>
                        <span> Total Emails: {counts.emails}</span>
                    </span>
                </div>
                <div className="flex flex-col">
                    <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={updateEmails}
                    >
                        Send Email
                    </a>
                </div>
            </div>
        </nav>
    )
}
