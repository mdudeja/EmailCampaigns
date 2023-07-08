export default function Navbar() {
    return (
        <nav className="bg-white dark:bg-gray-900 border-gray-200">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        UCC Response
                    </span>
                </div>
                <div className="flex md:order-2">
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=mridul20384@gmail.com&su=UCC Response&body=Test Email Body Content"
                        target="_blank"
                        rel="noreferrer"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hidden md:block"
                    >
                        Send Email
                    </a>
                    <a
                        href="mailto:mridul20384@gmail.com?subject=UCC Response&body=Test Email Body Content"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:hidden"
                    >
                        Send Email
                    </a>
                </div>
            </div>
        </nav>
    )
}
