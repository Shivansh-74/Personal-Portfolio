export default function Footer() {
    return (
        <footer className=" border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <div  className="flex items-center">
                        <div className="logo mx-1 font-bold text-2xl">SHIV
                        <span className='text-orange-600'>
                        ANSH
                        </span>
                        
                        </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-2">
                                    <div className="hover:underline">
                                        Home
                                    </div>
                                </li>
                                <li className="mb-2">
                                    <div  className="hover:underline">
                                        About
                                    </div>
                                </li>
                                <li  className="mb-2">
                                    <div className="hover:underline">
                                        Skills
                                    </div>
                                </li>
                                <li className="mb-2">
                                    <div className="hover:underline">
                                        Contact
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/Shivansh-74"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <div className="hover:underline">
                                        Linkedin
                                    </div>
                                </li>
                                <li>
                                    <div className="hover:underline py-3">
                                        Instagram
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <div className="hover:underline">
                                        Privacy Policy
                                    </div>
                                </li>
                                <li>
                                    <div className="hover:underline">
                                        Terms &amp; Conditions
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2023
                        . All Rights Reserved.
                    </span>
                    
                </div>
            </div>
        </footer>
    );
}
