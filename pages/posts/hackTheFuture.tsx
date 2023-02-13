import {TopNav} from "../../components/navigation/topNav";
import React from "react";
import {MainFooter} from "../../components/footer/mainFooter";
import Image from "next/image"
import 'flowbite';


export default function Blog() {
    return (
        <>

            <div className={"bg-zinc-700"}>
                <div className={"w-page mr-auto ml-auto"}>
                    <TopNav page={"Blog"}/>
                </div>
            </div>
            <main className={"bg-zinc-700 text-white h-12/12"}>
                <div className={"flex w-page mr-auto ml-auto flex-col"}>
                    <h2 className={"w-fit self-center text-2xl mb-5 mt-5 font-vegan"}>Hack The Future</h2>
                <div id="controls-carousel" className="relative" data-carousel="static">
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                            <Image src="/images/hackTheFuture/wonPicutre.JPG" width={4200} height={2800}
                                   className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                   alt="..."/>
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                            <Image src="/images/hackTheFuture/hackTheFuture.png" width={4200} height={2800}
                                   className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                   alt="..."/>
                        </div>
                        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                            <Image src="/images/hackTheFuture/snacks.jpg" width={4200} height={2800}
                                   className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                   alt="..."/>
                        </div>

                        <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                            <Image src="/images/hackTheFuture/stage.jpg" width={4200} height={2800}
                                   className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                   alt="..."/>
                        </div>


                    </div>

                    <button type="button"
                            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            data-carousel-prev>
        <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-100" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
                                                                              stroke-linejoin="round" stroke-width="2"
                                                                              d="M15 19l-7-7 7-7"></path></svg>
            <span className="sr-only">Previous</span></span>
                    </button>
                    <button type="button"
                            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                            data-carousel-next>
        <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-100" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
                                                                              stroke-linejoin="round" stroke-width="2"
                                                                              d="M9 5l7 7-7 7"></path></svg>
            <span className="sr-only">Next</span>
        </span>
                    </button>
                </div>


                    <article className={"mb-5"}>
                        <div className="flex justify-between mb-3">
                            <h3 className={"text-2xl text-gray-200"}>About</h3>
                            <p>15 Nov 2022</p>
                        </div>

                        <p className={"text-s text-gray-300"}>Hack The Future is an experience-driven hackathon both for IT and creative students and its
                            backed by the CRONOS GROUP. When you registered for the hackathon you had to create a group of 2 people with its own
                            name. I Joined up with <a
                                href="https://www.linkedin.com/in/buffel-aron/">Aron Buffel</a> and together we created
                            the group Null.</p>

                        <h3 className={"text-2xl text-gray-200 mb-3 mt-3"}>Challenge</h3>
                        <p className={"text-s text-gray-300"}>We picked the challenge Plant The Future by Optis. This challenge had 2 technoligies
                            JavaSpring and React. The challenge itself was very simple, create an Front-end application in react that
                            comunicate with an JavaScrping backend API The challenge had its own theme ours was the following: Creating a web application where you
                            can purchase a number of trees. This way you can reduse your
                            own CO2 emissions.</p>

                        <h3 className={"text-2xl text-gray-200 mb-3 mt-3"}>Event</h3>
                        <p className={"text-s text-gray-300"}>The event itself was well organized, the main event started at 9am with some welcome coffee
                            and a briefing. After this the Hacking started for 2 Hours, after the 2 hours we had a well made lunch with
                            soup, wraps ... When the lunch was done, we had another 2-3 hours of hacking. When the times was up we had to
                            pitch our solutions and vote on the best one. As last there was an Award ceremony that announched all the winner from the challanges</p>


                        <h3 className={"text-2xl text-gray-200 mb-3 mt-3"}>Prizes</h3>
                        <p className={"text-s text-gray-300"}>there were 2 prizes per challenge, one price was for being the most voted solution by other
                            students and the other was being best solution for the challenge Aron and me won one the price for most voted solution and with this we both got an backpack
                            made out of cork.</p>

                    </article>
                </div>
            </main>
            <MainFooter/>

        </>
    )
}
