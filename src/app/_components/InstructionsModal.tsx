'use client'

import { useState, ReactNode, useEffect } from "react"
import Content, {IContent} from "../../lib/content"
import { get } from 'lodash'
import { useRouter } from "next/navigation"

export default function InstructionsModal({
    toggle, variant, deviceVariant
}: {
    toggle: (isOpen: boolean) => void, 
    variant: string
    deviceVariant: 'mobile' | 'desktop' | null
}) {
    const [contentToLoad, setContentToLoad] = useState<ReactNode[]>([])
    const router = useRouter()

    function generateNode(type: 'p' | 'h1' , content: string, key?: number): ReactNode {
        switch (type) {
            case 'p':
                return <p className="mt-2 pr-2" key={key}>{content}</p>
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
        <div className="h-full w-full backdrop-blur-sm absolute top-0 left-0 z-40">
            <div className="flex h-full flex-col items-center justify-start mt-16">
                <div className="w-5/6 rounded-lg border border-primarypurple bg-white p-8 md:w-3/4 dark:bg-black">
                <div className="flex flex-col">
                    <div className="mb-4 text-2xl font-semibold">Usage Instructions</div>
                    {[...contentToLoad]}
                    <div className="w-full">
                        <button
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 float-right"
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