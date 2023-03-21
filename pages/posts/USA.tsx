import {TopNav} from "../../components/navigation/topNav";
import {MainFooter} from "../../components/footer/mainFooter"
import React from "react";


export default function Blog() {
    return (
        <div className="flex flex-col h-full justify-between">
            <div className={"bg-zinc-700"}>
                <div className={"w-page70 mr-auto ml-auto"}>
                    <TopNav page={"Blog"}/>
                </div>
            </div>
            <main className={"bg-zinc-700 h-full text-white h-12/12 h-12/12"}>
                <div className={"flex w-page70 mr-auto ml-auto flex flex-col"}>
                    <h3>HoWest Goes USA</h3>

                    <div>

                    </div>
                </div>
            </main>
            <MainFooter/>
        </div>
    )
}