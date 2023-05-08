import {TopNav} from "../components/navigation/topNav";
import React from "react";
import {MainFooter} from "../components/footer/mainFooter"


export default function Projects() {
    return (
        <div className="flex flex-col h-full justify-between">
            <div className={"bg-zinc-700"}>
                <div className={"w-page90 md:w-page70 mr-auto ml-auto"}>
                    <TopNav page={"Projects"}/>
                </div>
            </div>
            <main className={"bg-zinc-700 h-full text-white"}>
                <div className={"flex w-page70 mr-auto ml-auto"}>
                    Page not yet made :)
                    {/*<ProjectList title={"Hack the future"} description={lorum} codeLanguages={[faReact, faJava]} image={hackTheFuture} slug={"/project/hackTheFuture"}  gitHub={""} websiteLink={""}/>*/}

                </div>
            </main>
            <MainFooter/>
        </div>
    )
}