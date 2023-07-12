'use client'

import { useState, ReactNode, useEffect } from 'react'
import Content, { IContent } from '../../lib/content'
import { get } from 'lodash'
import { useRouter } from 'next/navigation'

export default function InstructionsModal({
    toggle,
    variant,
    deviceVariant,
}: {
    toggle: (isOpen: boolean) => void
    variant: string
    deviceVariant: 'mobile' | 'desktop' | null
}) {
    const [contentToLoad, setContentToLoad] = useState<ReactNode[]>([])
    const router = useRouter()

    function generateNode(
        type: 'p' | 'h1',
        content: string,
        key?: number
    ): ReactNode {
        switch (type) {
            case 'p':
                if (content.startsWith('~~')) {
                    return (
                        <p
                            className="border-1 my-4 border border-dashed p-2 pr-2"
                            key={key}
                        >
                            {content.substring(2)}
                        </p>
                    )
                }
                return (
                    <p className="mt-2 pr-2" key={key}>
                        {content}
                    </p>
                )
            case 'h1':
                return <h1>{content}</h1>
        }
    }

    useEffect(() => {
        const toLoad = get(Content, `common.${deviceVariant}`, null)
        const toLoadAll = get(Content, `common.all`, null)
        if (!toLoad || !toLoadAll) {
            router.push('/404')
            return
        }

        const tags: ReactNode[] = []

        toLoad.forEach((item) => {
            tags.push(generateNode('p', item, tags.length))
        })
        toLoadAll.forEach((item) => {
            tags.push(generateNode('p', item, tags.length))
        })

        setContentToLoad(tags)
    }, [deviceVariant])

    return (
        <div className="absolute left-0 top-0 z-40 h-full w-full backdrop-blur-sm">
            <div className="mt-16 flex h-full flex-col items-center justify-start">
                <div className="border-primarypurple w-5/6 rounded-lg border bg-white p-8 dark:bg-black md:w-3/4">
                    <div className="flex flex-col">
                        <div className="mb-4 text-2xl font-semibold">
                            Usage Instructions
                        </div>
                        {[...contentToLoad]}
                        <div className="w-full">
                            <button
                                className="float-right mr-3 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
                                onClick={() => toggle(false)}
                            >
                                Got it
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
