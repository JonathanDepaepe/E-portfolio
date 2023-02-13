import {TopNav} from "../components/navigation/topNav";
import React from "react";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLocationDot, faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faInstagram, faTwitter, faFacebook} from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";

export default function Contact() {
    // @ts-ignore
    return (
        <>
            <div className={"bg-zinc-800"}>
                <div className={"w-page mr-auto ml-auto"}>
                    <TopNav page={"Contact"}/>
                </div>
            </div>
            <main className={"w-page mt-3 mr-auto ml-auto"}>
                <div>
                    <div>
                        <FontAwesomeIcon icon={faLocationDot}/><p>Aartrijksestraat 96, 8211 Aartrijke</p>
                        <FontAwesomeIcon icon={faPhone}/><p>+32 498 83 11 11</p>
                        <Link href=""><FontAwesomeIcon icon={faEnvelope}/> Jonathan11908@hotmail.com</Link>

                    </div>
                    <div>
                        <Link href="https://www.linkedin.com/in/jonathan-depaepe/"><FontAwesomeIcon icon={faLinkedin}/></Link>
                        <Link href="https://www.instagram.com/jonathan.depaepe/"><FontAwesomeIcon icon={faInstagram}/></Link>
                        <Link href="https://twitter.com/silentz420"><FontAwesomeIcon icon={faTwitter}/></Link>
                        <Link href="https://www.facebook.com/jonathan.depaepe1/"><FontAwesomeIcon icon={faFacebook}/></Link>
                     </div>
                </div>
                <form>
                    


                </form>

            </main>
        </>
    )
}