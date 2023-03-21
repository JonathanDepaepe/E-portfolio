// @ts-nocheck
import {TopNav} from "../components/navigation/topNav";
import Image from "next/image";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFileDownload, faComment, faEnvelope, faFloppyDisk, faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons'
import {Typewriter} from 'react-simple-typewriter'
import {
    faJsSquare,
    faJava,
    faPhp,
    faReact,
    faHtml5,
    faCss3,
    faGitSquare,
    faPython,

} from '@fortawesome/free-brands-svg-icons'
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {MainFooter} from "../components/footer/mainFooter";
import {useRef} from "react";
import gsap from "gsap";


export default function Home() {
    let scrl = useRef(null);
    const [scrollX, setscrollX] = useState(0);
    const [scrolEnd, setscrolEnd] = useState(false);

    useEffect(() => {
        console.log("triggered")
        //Check width of the scollings
        if (
            scrl.current &&
            scrl?.current?.scrollWidth === scrl?.current?.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
        return () => {};
    }, [scrl?.current?.scrollWidth, scrl?.current?.offsetWidth]);
    //Slide click
    const slide = (shift) => {
        scrl.current.scrollLeft += shift;
        setscrollX(scrollX + shift);

        if (
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
            scrl.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };

    //Anim
    const anim = (e) => {
        gsap.from(e.target, { scale: 1 });
        gsap.to(e.target, { scale: 1.5 });
    };
    const anim2 = (e) => {
        gsap.from(e.target, { scale: 1.5 });
        gsap.to(e.target, { scale: 1 });
    };

    const scrollCheck = () => {
        // @ts-ignore
        setscrollX(scrl.current.scrollLeft);
        // @ts-ignore
        if (
            Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
            scrl.current.offsetWidth
        ) {
            setscrolEnd(true);
        } else {
            setscrolEnd(false);
        }
    };

    return (
        <>
            <div className={"bg-zinc-700"}>
                <div className={" lg:w-page70 mr-auto ml-auto"}>
                    <TopNav page={"Home"}/>
                </div>
            </div>
            <main className={"bg-zinc-700 text-white h-12/12"}>
                <div className={"flex xl:w-page70 flex-wrap md:flex-nowrap mr-auto ml-auto justify-center"}>
                    <div className={"mr-3 md:w-6/12 mt-auto mb-auto"}>
                        <h3 className={"font-bold text-center md:text-right  text-xl"}>Hi There, I am</h3>
                        <h2 className="font-lemon text-teal-600 text-3xl text-center md:text-right"><Typewriter
                            words={['Jonathan Depaepe']}
                            typeSpeed={100}
                            cursor
                            cursorStyle='_'

                        /></h2>
                        <p className={"text-center md:text-right"}>A font end developer who will soon be graduated from Howest Bruges
                            as a
                            Software engineer. I like
                            to create or edit websites in my spare time. Getting to know new projects and solving their
                            problems is definitely my thing!</p>
                        <div className={"mt-3 flex flex-wrap justify-center md:justify-end"}>
                            <Link className={"profile-button  flex "} href={""}>Project <FontAwesomeIcon
                                className={"ml-1 mt-auto mb-auto"}
                                icon={faFloppyDisk}/></Link>
                            <Link className={"profile-button flex"} href={""}>Contact <FontAwesomeIcon className={"ml-1 mt-auto mb-auto"}
                                                                                                  icon={faEnvelope}/></Link>
                            <Link className={"profile-button flex"} href={"/blog"}>Blog <FontAwesomeIcon className={"ml-1 mt-auto mb-auto"}
                                                                                                    icon={faComment}/></Link>
                            <Link className={"profile-button flex"} target="_blank" href={"/Jonathan Depaepe CV.pdf"}>Download
                                CV <FontAwesomeIcon className={"ml-1 mt-auto mb-auto"}
                                                    icon={faFileDownload}/></Link>
                        </div>
                    </div>
                    <Image src={"/images/IMG_E8092.JPG"} className={"rounded  lg:w-5/12"} width={400} height={466}
                           alt={"profile Pic"}/>
                </div>


                <div className="bg-zinc-900 w-12/12 ">
                    <div className="w-page70 mt-4 pt-4 mr-auto ml-auto">
                        <h4 className=" font-bold text-3xl w-fit ml-auto mr-auto mb-5">Skills & Experiences</h4>
                        <div className="flex justify-around">
                            <div className="flex w-full justify-center">
                                {scrollX !== 0 && (
                                    <button
                                        className="bg-zinc-700 rounded-full h-fit p-2 mt-auto mb-auto"
                                        onClick={() => slide(-50)}
                                        onMouseEnter={(e) => anim(e)}
                                        onMouseLeave={(e) => anim2(e)}
                                    >
                                        <FontAwesomeIcon
                                            className={"text-white"}
                                            icon={faAngleLeft}/>
                                    </button>
                                )}
                                <ul ref={scrl} className={"flex align-center  overflow-x-scroll scrollbar-hide"} onScroll={scrollCheck}>
                                    <div className="w-fit mr-10">
                                        <div className='flex flex-col mb-2 w-fit ml-auto mr-auto'>
                                            <h5 className="w-fit ml-auto mr-auto">JavaScript</h5>
                                            <FontAwesomeIcon className={"text-amber-300 text-5xl "} icon={faJsSquare}/>
                                        </div>
                                        <div className="w-full bg-amber-100 bg-opacity-40 rounded-full h-2.5 mb-4 w-20">
                                            <div className="bg-amber-300 h-2.5 rounded-full  w-6/12"/>
                                        </div>
                                    </div>
                                    <div className="w-fit mr-10">
                                        <div className='flex flex-col mb-2 w-fit ml-auto mr-auto'>
                                            <h5 className="w-fit ml-auto mr-auto">Java</h5>
                                            <FontAwesomeIcon className={"text-java text-5xl"} icon={faJava}/>
                                        </div>
                                        <div className="w-full bg-java bg-opacity-40 rounded-full h-2.5 mb-4 w-20">
                                            <div className="bg-java h-2.5 rounded-full  w-6/12"/>
                                        </div>
                                    </div>
                                    <div className="w-fit mr-10">
                                        <div className='flex flex-col mb-2 w-fit ml-auto mr-auto'>
                                            <h5 className="w-fit ml-auto mr-auto">PHP</h5>
                                            <FontAwesomeIcon className={"text-php text-5xl "} icon={faPhp}/>
                                        </div>
                                        <div className="w-full bg-php bg-opacity-40 rounded-full h-2.5 mb-4 w-20">
                                            <div className="bg-php h-2.5  rounded-full  w-6/12"/>
                                        </div>
                                    </div>
                                    <div className="w-fit mr-10">
                                        <div className='flex flex-col mb-2 w-fit ml-auto mr-auto'>
                                            <h5 className="w-fit ml-auto mr-auto">React</h5>
                                            <FontAwesomeIcon className={"text-react text-5xl "} icon={faReact}/>
                                        </div>
                                        <div className="w-full bg-react  bg-opacity-40 rounded-full h-2.5 mb-4 w-20">
                                            <div className="bg-react h-2.5  rounded-full  w-6/12"/>
                                        </div>
                                    </div>
                                    <div className="w-fit mr-10">
                                        <div className='flex flex-col w-fit mb-2 ml-auto mr-auto'>
                                            <h5 className="w-fit ml-auto mr-auto">HTML</h5>
                                            <FontAwesomeIcon className={"text-html5 text-5xl "} icon={faHtml5}/>
                                        </div>
                                        <div className="w-full bg-html5 bg-opacity-40 rounded-full h-2.5 mb-4 w-20">
                                            <div className="bg-html5 h-2.5  rounded-full  w-6/12"/>
                                        </div>
                                    </div>
                                    <div className="w-fit mr-10 ">
                                        <div className='flex flex-col w-fit mb-2 ml-auto mr-auto'>
                                            <h5 className="w-fit ml-auto mr-auto">CSS</h5>
                                            <FontAwesomeIcon className={"text-css3 text-5xl "} icon={faCss3}/>
                                        </div>
                                        <div className="w-full bg-css3 bg-opacity-40 rounded-full h-2.5 mb-4 w-20">
                                            <div className="bg-css3 h-2.5  rounded-full  w-6/12"/>
                                        </div>
                                    </div>
                                    <div className="w-fit mr-10">
                                        <div className='flex flex-col w-fit mb-2 ml-auto mr-auto'>
                                            <h5 className="w-fit ml-auto mr-auto">Git</h5>
                                            <FontAwesomeIcon className={"text-git text-5xl "} icon={faGitSquare}/>
                                        </div>
                                        <div className="w-full bg-git bg-opacity-40 rounded-full h-2.5 mb-4 w-20">
                                            <div className="bg-git h-2.5 rounded-full w-6/12"/>
                                        </div>
                                    </div>
                                    <div className="w-fit">
                                        <div className='flex flex-col mb-2 w-fit ml-auto mr-auto'>
                                            <h5 className="w-fit ml-auto mr-auto">Python</h5>
                                            <FontAwesomeIcon className={"text-python text-5xl "} icon={faPython}/>
                                        </div>
                                        <div className="w-full bg-python bg-opacity-40 rounded-full h-2.5 mb-4 w-20">
                                            <div className="bg-python h-2.5  rounded-full  w-6/12"/>
                                        </div>
                                    </div>
                                </ul>
                                {!scrolEnd && (
                                    <button
                                        className="bg-zinc-700 rounded-full h-fit p-2 mt-auto mb-auto"
                                        onClick={() => slide(+50)}
                                        onMouseEnter={(e) => anim(e)}
                                        onMouseLeave={(e) => anim2(e)}
                                    >
                                        <FontAwesomeIcon
                                            className={"text-white"}
                                            icon={faAngleRight}/>
                                    </button>
                                )}
                            </div>

                        </div>


                    </div>
                </div>
            </main>
            <MainFooter/>
        </>
    )
}
