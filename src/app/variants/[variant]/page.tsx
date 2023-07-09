'use client'

import { ReactNode, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { get } from 'lodash'
import Content, { IVariantContent } from "../../../lib/content"
import InstructionsModal from "@/app/_components/InstructionsModal"
import Navbar from "@/app/_components/Navbar"
import { useMediaQuery } from "@/app/_hooks/useMediaQuery"

export default function Variant({params}: {params: {variant: string}}) {
    const [variant, setVariant] = useState(params.variant)
    const [modalOpen, setModalOpen] = useState(false)
    const router = useRouter()
    const [contentToLoad, setContentToLoad] = useState<ReactNode[]>([])
    const isOnDesktop = useMediaQuery("lg")


    function generateNode(type: 'p' | 'h1' , content: string, key?: number, italicise?: boolean): ReactNode {
        switch (type) {
            case 'p':
                if (content.startsWith('~~')) {
                    return <p className="mt-6 pr-2" key={key}>{content.substring(2)}</p>    
                }

                if (italicise) {
                    return <p className="mt-2 pr-2 italic" key={key}>{content}</p>
                }

                return <p className="mt-2 pr-2" key={key}>{content}</p>

            case 'h1':
                return <h1>{content}</h1>
        }
    }
    

    function populateContent() {
        if (variant) {
            const toLoad: IVariantContent | null = get(Content, `variants.${variant}`, null)
            if (!toLoad) {
                router.push('/404')
                return
            }

            const tags: ReactNode[] = []

            ;(toLoad as unknown as IVariantContent).intro.forEach((item: string) => {
                tags.push(generateNode('p', item, tags.length, true))
            })
            tags.push(<p className="pr-2 border bottom-1 border-dashed mt-2" />)
            ;(toLoad as unknown as IVariantContent).body.forEach((item) => {
                tags.push(generateNode('p', item, tags.length))
            })

            setContentToLoad(tags)
        }
    }

    function getLink(){
        const deviceVariant = isOnDesktop ? 'desktop' : 'mobile'
        const toLoad: IVariantContent | null = get(Content, `variants.${variant}`, null)
        const toLoadAll: String[] | null = get(Content, `common.${deviceVariant}`, null)

        if (!toLoad || !toLoadAll) {
            return ""
        }

        const subject = encodeURIComponent((toLoad as unknown as IVariantContent).subject)
        const body = encodeURIComponent((toLoad as unknown as IVariantContent).body.map((item) => item.replace(/~~/g, '\n')).join('\n\n'))
        const to = encodeURIComponent(get(Content, `common.email_id`, ""))

        if (isOnDesktop) {
            return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`
        } else {
            return `mailto:${to}?subject=${subject}&body=${body}`
        }

    }

    useEffect(() => {
        setVariant(params.variant)
        const acceptableVariants = (process.env.NEXT_PUBLIC_VARIANTS || "").split(',')
        if (variant && !acceptableVariants.includes(variant)) {
            router.push('/404')
            return
        }
        populateContent()
    }, [variant, router])

    return (
        <>
            <Navbar url={getLink()} app_variant={variant} />
            <main>
                <div className="relative">
                    <p 
                        className="text-right px-4 absolute w-full z-20 cursor-pointer text-blue-900 dark:text-blue-300 underline underline-offset-4 hidden lg:block bg-white dark:bg-transparent"
                        onClick={() => {
                            setModalOpen(true)
                        }}
                    >
                        IMP: Instructions on how to use this app
                    </p>
                    <p 
                        className="text-right px-4 absolute w-full z-20 cursor-pointer text-blue-100 dark:text-blue-300 underline underline-offset-4 lg:hidden"
                        onClick={() => {
                            setModalOpen(true)
                        }}
                    >
                        IMP: Instructions on how to use this app
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 w-screen full-height-minus-header">
                        <div className="opacity-80 absolute md:relative top-0 left-0 h-full w-full bg-cover -z-10" style={{backgroundImage: "url('/images/bg_queer.jpg')"}}>
                            <p className="absolute bottom-0 mx-4">
                                Photo by{' '}
                                <a href="https://unsplash.com/@sharonmccutcheon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                                    Alexander Grey
                                </a>{' '}
                                on{' '}
                                <a href="https://unsplash.com/photos/Ur_NzyKfCo4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                                    Unsplash
                                </a>
                            </p>
                        </div>
                        <div className="px-4 py-2 mx-4 my-12 md:mx-auto md:my-4 border rounded-md md:border-none bg-white dark:bg-black z-10 overflow-y-auto h-5/6 md:h-full">
                            {[...contentToLoad]}
                        </div>
                    </div>
                    {modalOpen && (
                        <InstructionsModal
                            toggle={(isOpen: boolean) => setModalOpen(isOpen)}
                            variant={variant}
                            deviceVariant={isOnDesktop ? 'desktop' : 'mobile'}
                        />
                    )}
                </div>
            </main>
        </>
    )
}