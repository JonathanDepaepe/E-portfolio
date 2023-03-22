import Link from "next/link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faInstagram, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faBars, faHouse, faCode, faPenFancy, faPhone} from "@fortawesome/free-solid-svg-icons";
import {Popover, Transition} from '@headlessui/react'

import {FC, Fragment} from 'react'

type Props = {
    page: string
}

export const TopNav: FC<Props> = ({page}) => {
    return (
        <>
            <nav className={" bg-zinc-700 text-white "}>
                <div className="flex pt-5 pl-5 pb-5">
                    <div className="flex h-fit mt-auto mb-auto">
                        <Link className="m-1" target="_blank" href="https://www.linkedin.com/in/jonathan-depaepe/"
                              passHref><FontAwesomeIcon icon={faLinkedin}/></Link>
                        <Link className="m-1" target="_blank"
                              href={"https://www.instagram.com/jonathan.depaepe/"}><FontAwesomeIcon icon={faInstagram}/></Link>
                        <Link className="m-1" target="_blank" href={"https://github.com/silentz420"}><FontAwesomeIcon
                            icon={faGithub}/></Link>
                        <Link className="m-1" target="_blank" href={"https://twitter.com/silentz420"}><FontAwesomeIcon
                            icon={faTwitter}/></Link>
                    </div>
                </div>
                <div className=" flex justify-between pb-5">
                    <h1 className="ml-2 text-2xl font-vegan">Jonathan Depaepe</h1>
                    <div className={"hidden md:flex w-6/12 justify-around "}>
                        <Link className={page === "Home" ? '' : 'text-zinc-400 group transition duration-300'}
                              href={"/"}>Home <span
                            className={page === "Home" ? 'block h-0.5 bg-teal-600' : "block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-teal-600"}></span></Link>
                        <Link className={page === "Projects" ? '' : 'text-zinc-400 group transition duration-300'}
                              href={"/projects"}>Projects <span
                            className={page === "Projects" ? 'block h-0.5 bg-teal-600' : "block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-teal-600"}></span></Link>
                        <Link className={page === "Blog" ? '' : 'text-zinc-400 group transition duration-300'}
                              href={"/blog"}>Blog <span
                            className={page === "Blog" ? 'block h-0.5 bg-teal-600' : "block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-teal-600"}></span></Link>
                        <Link className={page === "Contact" ? '' : 'text-zinc-400 group transition duration-300 '}
                              href={"/contact"}>Contact <span
                            className={page === "Contact" ? 'block h-0.5 bg-teal-600' : "block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-teal-600"}></span></Link>
                    </div>
                    <div className="fixed z-20 top-16 right-1 px-4">
                        <Popover className="relative">
                            {({open}) => (
                                <>
                                    <Popover.Button
                                        className={"md:hidden bg-zinc-600 p-3 pt-2 pb-2 rounded-xl hover:shadow-2xl"}>
                                        <FontAwesomeIcon className={"hover:rotate-180 transition-all duration-500"}
                                                         icon={faBars}/>
                                    </Popover.Button>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="opacity-0 translate-y-1"
                                        enterTo="opacity-100 translate-y-0"
                                        leave="transition ease-in duration-150"
                                        leaveFrom="opacity-100 translate-y-0"
                                        leaveTo="opacity-0 translate-y-1"
                                    >
                                        <Popover.Panel
                                            className="md:hidden absolute left-1/2 z-10 mt-3 -left-full -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                            <div
                                                className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                <div className="relative grid gap-8 bg-zinc-600 p-7 lg:grid-cols-2">
                                                <a href={"/"} className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-zinc-700  ">
                                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12 bg-zinc-500 rounded-xl">
                                                        <FontAwesomeIcon icon={faHouse} aria-hidden="true" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <p className="text-sm font-medium">Home</p>
                                                    </div>
                                                </a>
                                                    <a href={"/projects"} className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-zinc-700  ">
                                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12 bg-zinc-500 rounded-xl">
                                                            <FontAwesomeIcon icon={faCode} aria-hidden="true" />
                                                        </div>
                                                        <div className="ml-4">
                                                            <p className="text-sm font-medium">Projects</p>
                                                        </div>
                                                    </a>
                                                    <a href={"/blog"} className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-zinc-700  ">
                                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12 bg-zinc-500 rounded-xl">
                                                            <FontAwesomeIcon icon={faPenFancy} aria-hidden="true" />
                                                        </div>
                                                        <div className="ml-4">
                                                            <p className="text-sm font-medium">Blog</p>
                                                        </div>
                                                    </a>
                                                    <a href={"/contact"} className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-zinc-700  ">
                                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12 bg-zinc-500 rounded-xl">
                                                            <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
                                                        </div>
                                                        <div className="ml-4">
                                                            <p className="text-sm font-medium">Contact</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </Popover.Panel>
                                    </Transition>
                                </>
                            )}
                        </Popover>
                    </div>
                </div>
            </nav>
        </>
    )
}