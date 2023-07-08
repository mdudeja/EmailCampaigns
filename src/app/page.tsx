import Image from 'next/image'
import bg_queer from '/public/images/bg_queer.jpg'

export default function Home() {
    return (
        <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full w-screen">
                <div className="opacity-80 absolute md:relative top-0 left-0">
                    <Image src={bg_queer} alt="Queer" />
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
                <div className="px-4 py-2 mx-4 md:mx-auto my-4 border rounded-md md:border-none bg-white dark:bg-black z-10 overflow-y-auto">
                    <p className="mt-2">
                        Some Intro text about the process, UCC, why we are doing
                        this etc.{' '}
                    </p>
                    <p className="mt-2">
                        Some Intro text about the process, UCC, why we are doing
                        this etc.{' '}
                    </p>
                    <p className="mt-2">
                        Some Intro text about the process, UCC, why we are doing
                        this etc.{' '}
                    </p>
                    <p className="mt-2">
                        Some Intro text about the process, UCC, why we are doing
                        this etc.{' '}
                    </p>
                    <p className="mt-2">
                        Some Intro text about the process, UCC, why we are doing
                        this etc.{' '}
                    </p>
                    <p className="mt-2">
                        Some Intro text about the process, UCC, why we are doing
                        this etc.{' '}
                    </p>
                    <p className="mt-2">
                        Some Intro text about the process, UCC, why we are doing
                        this etc.{' '}
                    </p>
                </div>
            </div>
        </div>
    )
}
