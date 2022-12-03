import Link from "next/link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLinkedin, faInstagram, faGithub, faTwitter} from '@fortawesome/free-brands-svg-icons'

export const TopNav = () => {
    return (
        <>
            <nav className={"bg-zinc-800 text-white "}>
                <div className="flex pt-5 pl-5 border-b border-b-zinc-600 pb-5">
                    <div className="flex h-fit mt-auto mb-auto">
                        <Link className="m-1" target="_blank" href="https://www.linkedin.com/in/jonathan-depaepe/" passHref><FontAwesomeIcon icon={faLinkedin}/></Link>
                        <Link className="m-1" href={"https://www.instagram.com/jonathan.depaepe/"}><FontAwesomeIcon icon={faInstagram}/></Link>
                        <Link className="m-1" href={"https://github.com/silentz420"}><FontAwesomeIcon icon={faGithub}/></Link>
                        <Link className="m-1" href={"https://twitter.com/silentz420"}><FontAwesomeIcon icon={faTwitter}/></Link>
                    </div>
                    <h1 className="font-bold text-3xl font-vegan m-auto">Jonathan Depaepe</h1>
                </div>
                <div className={"mt-3 pb-3 flex w-5/12 justify-around ml-auto mr-auto"}>
                    <Link className={"underline"} href={"#"}>Home</Link>
                    <Link className={"text-zinc-400"} href={"#"}>Projects</Link>
                    <Link className={"text-zinc-400"} href={"#"}>Blog</Link>
                    <Link className={"text-zinc-400"} href={"#"}>Contact</Link>
                </div>
            </nav>
        </>
    )
}