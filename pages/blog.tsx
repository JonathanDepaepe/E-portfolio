import {TopNav} from "../components/navigation/topNav";
import {MainFooter} from "../components/footer/mainFooter"
import React from "react";
import Image from "next/image"
import Link from "next/link"


export default function Blog() {
    return (
        <div className="flex flex-col h-full justify-between">
            <div className={"bg-zinc-700"}>
                <div className={"w-page70 mr-auto ml-auto"}>
                    <TopNav page={"Blog"}/>
                </div>
            </div>
            <main className={"bg-zinc-700 h-full text-white h-12/12 h-12/12"}>
                <div className={"flex w-page70 mr-auto ml-auto flex-wrap justify-center"}>

                    <Link  className="w-80 h-80 flex flex-col rounded-lg mt-5 mr-5" href="/posts/hackTheFuture">
                        <Image src="/images/hackTheFuture/hackTheFuture.png" className="rounded-xl w-10/12 ml-auto mr-auto -mb-14 z-10" alt="hackLogo" width={200} height={112} />
                        <div className="bg-zinc-600 pt-16 pb-3 rounded-xl h-full hover:shadow-2xl">
                            <h3 className="text-xl ml-4">Hack the Future</h3>
                            <p className="text-zinc-300 text-s ml-4 m-1.5">An experience-driven hackathon that a friend and me has participated in. This event has been backed by the CRONOS GROUP.</p>
                        </div>
                    </Link>

                    <Link className="w-80 h-80 flex flex-col rounded-lg mt-5 mb-5" href="/posts/USA">
                        <Image src="/images/LvAyMie.jpg" className="rounded-xl w-10/12 ml-auto mr-auto -mb-14 z-10" alt="hackLogo" width={200} height={112} />
                        <div className="bg-zinc-600 pt-16 pb-3 h-full rounded-xl hover:shadow-2xl">
                            <h3 className="text-xl ml-4">HoWest Goes USA Diary</h3>
                            <p className="text-zinc-300 text-s ml-4 mt-1.5">An whole week with HoWest to San Francisco to visit well known companies. Such as Google, Microsoft, Rivian...</p>
                        </div>
                    </Link>

                </div>
            </main>
            <MainFooter/>
        </div>
    )
}