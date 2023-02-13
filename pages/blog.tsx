import {TopNav} from "../components/navigation/topNav";
import React from "react";


export default function Blog() {
    return (
        <>
            <div className={"bg-zinc-800"}>
                <div className={"w-page mr-auto ml-auto"}>
                    <TopNav page={"Blog"}/>
                </div>
            </div>
            <main className={"w-page mt-3 mr-auto ml-auto"}>
                <article>

                </article>
            </main>
        </>
    )
}