import {TopNav} from "../components/navigation/topNav";
import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faInstagram, faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";
import {MainFooter} from "../components/footer/mainFooter"

export default function Contact() {
    return (
        <div className="flex flex-col h-full justify-between">
            <div className={"bg-zinc-700"}>
                <div className={"w-page70 mr-auto ml-auto"}>
                    <TopNav page={"Contact"}/>
                </div>
            </div>
            <main style={{backgroundImage: `url(/images/map.svg)`, backgroundRepeat:"no-repeat", backgroundPosition:"center"}} className={"bg-zinc-700 h-full text-white"}>
                <div className={"flex w-page70 mr-auto ml-auto h-full"}>
                <div className="bg-zinc-700 p-10 rounded-2xl bg-opacity-80 m-auto ">
                    <div>
                        <a className={"flex items-center"} href="tel:+32498831111"><FontAwesomeIcon className="mr-2" icon={faLocationDot}/><p>Aartrijksestraat 96, 8211 Aartrijke</p></a>
                        <a  className={"flex items-center"} href="tel:+32498831111"> <FontAwesomeIcon className="mr-2" icon={faPhone}/><p>+32 498 83 11 11</p></a>
                        <a  className={"flex items-center"} href="mailto:Jonathan11908@hotmail.com"><FontAwesomeIcon className="mr-2" icon={faEnvelope}/> Jonathan11908@hotmail.com</a>

                    </div>
                    <div className="mt-7">
                        <Link className="border border-teal-400 rounded-full  pr-5 pl-5 pt-4 pb-4 ml-2 hover:bg-teal-600 hover:text-white" href="https://www.linkedin.com/in/jonathan-depaepe/"><FontAwesomeIcon icon={faLinkedin}/></Link>
                        <Link className="border border-teal-400 rounded-full  pr-5 pl-5 pt-4 pb-4 ml-2 hover:bg-teal-600 hover:text-white" href="https://www.instagram.com/jonathan.depaepe/"><FontAwesomeIcon icon={faInstagram}/></Link>
                        <Link className="border border-teal-400 rounded-full  pr-5 pl-5 pt-4 pb-4 ml-2 hover:bg-teal-600 hover:text-white" href="https://twitter.com/silentz420"><FontAwesomeIcon icon={faTwitter}/></Link>
                        <Link className="border border-teal-400 rounded-full  pr-5 pl-5 pt-4 pb-4 ml-2 hover:bg-teal-600 hover:text-white" href="https://www.facebook.com/jonathan.depaepe1/"><FontAwesomeIcon icon={faFacebook}/></Link>
                     </div>
                </div>
                <form>
                    


                </form>
                </div>
            </main>
            <MainFooter/>
        </div>
    )
}