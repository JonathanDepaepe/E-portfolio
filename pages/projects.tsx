import {TopNav} from "../components/navigation/topNav";
import React from "react";
import {MainFooter} from "../components/footer/mainFooter"
import {ProjectList} from "../components/projects/projectList";
import {faReact, faJava} from "@fortawesome/free-brands-svg-icons";
import hackTheFuture from "../public/images/hackTheFuture/hackTheFuture.png"

const lorum = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

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
                    <ProjectList title={"Hack the future"} description={lorum} codeLanguages={[faReact, faJava]} image={hackTheFuture} slug={"/project/hackTheFuture"}  gitHub={""} websiteLink={""}/>

                </div>
            </main>
            <MainFooter/>
        </div>
    )
}