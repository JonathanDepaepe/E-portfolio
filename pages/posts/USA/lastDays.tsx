import {TopNav} from "../../../components/navigation/topNav";
import React from "react";
import {MainFooter} from "../../../components/footer/mainFooter";
import {Slider} from "../../../components/slider";

import bridge from "../../../public/images/howestUSA/lastDays/bridge.jpeg";
import cloudflare from "../../../public/images/howestUSA/lastDays/cloudflare.jpeg";
import lavaLamps from "../../../public/images/howestUSA/lastDays/lavaLamps.jpeg";
import alcatras from "../../../public/images/howestUSA/lastDays/alcatras.jpeg";
import prisonCell from "../../../public/images/howestUSA/lastDays/prisonCell.jpeg";
import baseball from "../../../public/images/howestUSA/lastDays/baseball.jpeg";
import randomBuilding from "../../../public/images/howestUSA/lastDays/randomBuilding.jpeg";


export default function LastDays() {
    return (
        <div>
            <div className={"bg-zinc-700"}>
                <div className={"w-page90 md:w-page70 mr-auto ml-auto "}>
                    <TopNav page={"Blog"}/>
                </div>
            </div>
            <main className={"bg-zinc-700 text-white h-12/12"}>
                <div className={"flex w-page90 md:w-page70 mr-auto ml-auto flex-col max-w-page"}>
                    <h2 className={"w-fit self-center text-3xl mb-5 mt-5 font-vegan tracking-wider"}>The Last Days</h2>
                    <Slider images={[
                        {name:"bridge", image:bridge},
                        {name:"cloudflare", image:cloudflare},
                        {name:"lavaLamps", image:lavaLamps},
                        {name:"alcatras", image:alcatras},
                        {name:"prisonCell", image:prisonCell},
                        {name:"baseball", image:baseball},
                        {name:"randomBuilding", image:randomBuilding},
                    ]}/>
                    <article className={"mb-5 flex flex-col"}>
                        <div className="flex justify-end mb-3">
                            <p>7-9 Apr. 2022</p>
                        </div>


                        <h3 className={"text-2xl text-teal-600 mb-3 mt-3 "}>Intro</h3>
                        <p className={"text-s text-gray-300 mb-7"}>There was not much planned for the last 3 days. The only 2 things on the schedule were Cloudflare and Alcatraz, so with all the free time we went to the movie theatre, baseball and so much more. </p>
                        <div className={"flex justify-between flex-wrap"}>
                            <div className="mt-3 md:mt-0 md:w-5/12">
                                <h3 className={"text-2xl text-teal-600 mb-3"}>Cloudflare</h3>
                                <p className={"text-s text-gray-300"}>Day 5 started with a morning walk to a local marketplace where we could buy some food. After this we went to Cloudflare. Cloudflare is a company that provides content delivery network services, DDoS mitigation, Internet security and distributed domain name server services. &nbsp;
                                    <a className="underline decoration-teal-600" href="https://www.linkedin.com/in/rebecca-weekly-224778/">Rebecca Weekly</a> gave us a warm welcome and explained about Cloudflare and what they do. She also gave a lot of information about hardware and what Cloudflare uses. She had some statements about the future hardware and what quantum computing could do to our future. After this we got a tour of the office and got to see the different departments.
                                </p>
                            </div>
                            <div className="mt-3 md:mt-0 md:w-5/12">
                                <h3 className={"text-2xl text-teal-600 mb-3"}>Other events</h3>
                                <p className={"text-s text-gray-300"}>
                                    Other then Cloudflare there was not much more planned for the day. We went to the movie theatre to watch the new Super Mario movie, Belgium theatres should write some things down from the American theatres. The seats were so comfortable and the food was great. After this we watched the Giants play baseball. I have never seen a baseball game before so it was a great experience. The game was very long and the Giants lost, but it was still a great experience.
                                </p> <p className="mt-4"> On the last day we visited Alcatraz. Alcatraz is a former federal prison located on an island in San Francisco Bay, California. The prison operated from 1934 to 1963 and was known as “The Rock”. The prison was closed because it was too expensive to run. The prison is now a museum and a very popular tourist attraction. We got a tour of the prison and got to see the cells and the different areas of the prison. It was very interesting to see how the prisoners lived and how they were treated.
                                </p>
                            </div>
                        </div>
                        <h3 className={"text-2xl text-teal-600 mb-3 mt-10"}>End</h3>
                        <p className={"text-s text-gray-300"}>This trip was one of the most interesting journeys I ever had. I have learned a lot of new information and made some friends along the way. A huge thanks to HoWest and the lectors for organising such a great trip! :) </p>
                    </article>
                </div>
            </main>
            <MainFooter/>
        </div>
    )
}
