'use client'

import { ReactNode, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { get, isArray } from 'lodash'
import Content, { IVariantContent } from '../../../lib/content'
import InstructionsModal from '@/app/_components/InstructionsModal'
import Navbar from '@/app/_components/Navbar'
import { useMediaQuery } from '@/app/_hooks/useMediaQuery'

export default function VariantPage({
    params,
}: {
    params: { variant: string }
}) {
    const [variant, setVariant] = useState(params.variant)
    const [modalOpen, setModalOpen] = useState(false)
    const router = useRouter()
    const [contentToLoad, setContentToLoad] = useState<ReactNode[]>([])
    const isOnDesktop = useMediaQuery('lg')

    function boldText(text: string): string | TrustedHTML {
        return text
            .replace(/##/g, '<span class="font-bold">')
            .replace(/\$\$/g, '</span>')
    }

    function generateNode(
        type: 'p' | 'h1' | 'ol',
        content: string | string[],
        key?: number,
        italicise?: boolean
    ): ReactNode {
        switch (type) {
            case 'p':
                if ((content as string).startsWith('~~')) {
                    return (
                        <p
                            className="mt-6 pr-2"
                            key={key}
                            dangerouslySetInnerHTML={{
                                __html: boldText(
                                    (content as string).substring(2)
                                ),
                            }}
                        ></p>
                    )
                }

                if (italicise) {
                    return (
                        <p
                            className="mt-2 pr-2 italic"
                            key={key}
                            dangerouslySetInnerHTML={{
                                __html: boldText(content as string),
                            }}
                        ></p>
                    )
                }

                return (
                    <p
                        className="mt-2 pr-2"
                        key={key}
                        dangerouslySetInnerHTML={{
                            __html: boldText(content as string),
                        }}
                    ></p>
                )

            case 'ol':
                return (
                    <ul className="mt-2 list-inside list-disc" key={key}>
                        {(content as string[]).map((item, index) => {
                            return (
                                <li
                                    className="mt-2"
                                    key={index}
                                    dangerouslySetInnerHTML={{
                                        __html: boldText(item),
                                    }}
                                ></li>
                            )
                        })}
                    </ul>
                )

            case 'h1':
                return (
                    <h1
                        dangerouslySetInnerHTML={{
                            __html: boldText(content as string),
                        }}
                    ></h1>
                )
        }
    }

    function populateContent() {
        if (variant) {
            const toLoad: IVariantContent | null = get(
                Content,
                `variants.${variant}`,
                null
            )
            if (!toLoad) {
                router.push('/404')
                return
            }

            const tags: ReactNode[] = []

            ;(toLoad as unknown as IVariantContent).intro.forEach(
                (item: string) => {
                    tags.push(generateNode('p', item, tags.length, true))
                }
            )
            tags.push(
                <p className="bottom-1 mb-4 mt-4 border border-dashed pr-2" />
            )
            ;(toLoad as unknown as IVariantContent).body.forEach((item) => {
                if (isArray(item)) {
                    tags.push(generateNode('ol', item, tags.length))
                } else {
                    tags.push(generateNode('p', item, tags.length))
                }
            })

            setContentToLoad(tags)
        }
    }

    function getLink() {
        const deviceVariant = isOnDesktop ? 'desktop' : 'mobile'
        const toLoad: IVariantContent | null = get(
            Content,
            `variants.${variant}`,
            null
        )
        const toLoadAll: String[] | null = get(
            Content,
            `common.${deviceVariant}`,
            null
        )

        if (!toLoad || !toLoadAll) {
            return ''
        }

        const subject = encodeURIComponent(
            (toLoad as unknown as IVariantContent).subject
        )

        let bodyToLoad = (toLoad as unknown as IVariantContent).body
        if (params.variant === 'feminists') {
            bodyToLoad = (toLoad as unknown as IVariantContent)
                .email_body as string[]
        }

        const body = encodeURIComponent(
            bodyToLoad
                .map((item) => {
                    if (isArray(item)) {
                        return item
                            .map((subItem) => {
                                return subItem
                                    .replace(/~~/g, '\n')
                                    .replace('##', '')
                                    .replace('$$', '')
                            })
                            .join('\n\n')
                    }

                    return item
                        .replace(/~~/g, '\n')
                        .replace('##', '')
                        .replace('$$', '')
                })
                .join('\n\n')
        )
        const to = encodeURIComponent(get(Content, `common.email_id`, ''))

        if (isOnDesktop) {
            return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`
        } else {
            return `mailto:${to}?subject=${subject}&body=${body}`
        }
    }

    useEffect(() => {
        setVariant(params.variant)
        const acceptableVariants = (
            process.env.NEXT_PUBLIC_VARIANTS || ''
        ).split(',')
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
                        className="absolute z-20 hidden w-full cursor-pointer bg-white px-4 text-right text-blue-900 underline underline-offset-4 dark:bg-transparent dark:text-blue-300 lg:block"
                        onClick={() => {
                            setModalOpen(true)
                        }}
                    >
                        IMP: Instructions on how to use this app
                    </p>
                    <p
                        className="absolute z-20 w-full cursor-pointer bg-white px-4 text-right text-blue-100 underline underline-offset-4 dark:bg-black dark:text-blue-300 lg:hidden"
                        onClick={() => {
                            setModalOpen(true)
                        }}
                    >
                        IMP: Instructions on how to use this app
                    </p>
                    <div className="full-height-minus-header grid w-screen grid-cols-1 md:grid-cols-2">
                        {variant === 'queertrans' && (
                            <div
                                className="absolute left-0 top-0 -z-10 h-full w-full bg-cover opacity-80 md:relative"
                                style={{
                                    backgroundImage:
                                        "url('/images/bg_queer.jpg')",
                                }}
                            >
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
                        )}
                        {variant === 'feminists' && (
                            <div
                                className="absolute left-0 top-0 -z-10 h-full w-full bg-contain opacity-80 md:relative"
                                style={{
                                    backgroundImage:
                                        "url('/images/bg_feminists.jpg')",
                                }}
                            ></div>
                        )}
                        <div className="z-10 mx-auto my-12 w-11/12 rounded-md border bg-white px-4 py-2 dark:bg-black md:mx-auto md:my-4 md:h-full md:border-none">
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
