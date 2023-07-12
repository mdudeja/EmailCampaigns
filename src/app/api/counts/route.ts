import dbConnect, { isDBConnected } from '@/lib/dbConnect'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
    const v = getQSParamFromURL('app_variant', req.url)
    const counts = await fetchCounts(v || '')
    return NextResponse.json(counts)
}

function getQSParamFromURL(
    key: string,
    url: string | undefined
): string | null {
    if (!url) return ''
    const search = new URL(url).search
    const urlParams = new URLSearchParams(search)
    return urlParams.get(key)
}

async function _initdb() {
    const connection = await dbConnect()
    if (connection) {
        const { db } = connection

        if (isDBConnected()) {
            return db
        }
    }
}

async function fetchCounts(app_variant: string) {
    const db = await _initdb()
    if (!db) {
        return {
            visits: 0,
            emails: 0,
        }
    }

    const collection_visits = db.collection('visits')
    const collection_emails = db.collection('emails')

    const count_visits = await collection_visits.countDocuments({
        app_variant: app_variant,
    })
    const count_emails = await collection_emails.countDocuments({
        app_variant: app_variant,
    })

    return { visits: count_visits, emails: count_emails }
}
