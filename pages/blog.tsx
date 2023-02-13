import {TopNav} from "../components/navigation/topNav";
import {MainFooter} from "../components/footer/mainFooter"
import React from "react";
import Image from "next/image"
import Link from "next/link"


export default function Blog() {
    return (
        <div className="flex flex-col h-full justify-between">
            <div className={"bg-zinc-700"}>
                <div className={"w-page mr-auto ml-auto"}>
                    <TopNav page={"Blog"}/>
                </div>
            </div>
            <main className={"bg-zinc-700 h-full text-white h-12/12 h-12/12"}>
                <div className={"flex w-page mr-auto ml-auto justify-between flex"}>

                    <Link className="w-80 h-80 flex flex-col rounded-lg bg-zinc-600 hover:shadow-2xl" href="/posts/hackTheFuture">
                        <Image src="/images/hackTheFuture/hackTheFuture.png" className="rounded-t-lg w-full" alt="hackLogo" width={200} height={112} />
                        <div className="ml-5">
                            <h3 className="text-xl">Hack the Future</h3>
                            <p className="text-zinc-300 text-s">An experience-driven hackathon that a friend and me has participated in. This event has been backed by the CRONOS GROUP.</p>
                        </div>
                    </Link>

                    <Link className="w-80 h-80 flex flex-col rounded-lg bg-zinc-600 bg-zinc-700 hover:shadow-2xl" href="/posts/USA">
                        <Image src="/images/howest-logo.png" className="rounded-t-lg w-full" alt="hackLogo" width={200} height={112} />
                        <div className="ml-5">
                            <h3 className="text-xl">Howest Goes USA Diary</h3>
                            <p className="text-zinc-300 text-s">An whole week with HoWest to San Francisco to visit well known companies.</p>
                        </div>
                    </Link>

                </div>
            </main>
            <MainFooter/>
        </div>
    )
}