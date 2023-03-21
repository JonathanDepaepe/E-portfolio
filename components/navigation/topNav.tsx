import Link from "next/link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faInstagram, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'

import {FC} from 'react'

type Props = {
    page: string
}

export const TopNav: FC<Props> = ({page}) => {
    return (
        <>
            <nav className={"bg-zinc-700 text-white "}>
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
                    <div className={"flex w-6/12 justify-around "}>
                        <Link className={page === "Home" ? '' : 'text-zinc-400 group transition duration-300'}
                              href={"/"}>Home <span className={page === "Home" ? 'block h-0.5 bg-teal-600' : "block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-teal-600"}></span></Link>
                        <Link className={page === "Projects" ? '' : 'text-zinc-400 group transition duration-300'}
                              href={"/projects"}>Projects <span className={page === "Projects" ? 'block h-0.5 bg-teal-600' : "block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-teal-600"}></span></Link>
                        <Link className={page === "Blog" ? '' : 'text-zinc-400 group transition duration-300'}
                              href={"/blog"}>Blog <span className={page === "Blog" ? 'block h-0.5 bg-teal-600' : "block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-teal-600"}></span></Link>
                        <Link className={page === "Contact" ? '' : 'text-zinc-400 group transition duration-300 '}
                              href={"/contact"}>Contact <span className={page === "Contact" ? 'block h-0.5 bg-teal-600' : "block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-teal-600"}></span></Link>
                    </div>
                </div>
            </nav>
        </>
    )
}