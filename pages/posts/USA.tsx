import {TopNav} from "../../components/navigation/topNav";
import {MainFooter} from "../../components/footer/mainFooter"
import React from "react";
import {Diary} from "../../components/diary";


export default function Blog() {
    return (
        <div className="flex flex-col h-full justify-between">
            <div className={"bg-zinc-700"}>
                <div className={"w-page70 mr-auto ml-auto"}>
                    <TopNav page={"Blog"}/>
                </div>
            </div>
            <main className={"bg-zinc-700 text-white"}>
                <div className={"flex w-page90 md:w-page70 mr-auto ml-auto flex flex-col"}>
                    <h3 className="w-fit self-center text-3xl mb-5 mt-5 font-vegan tracking-wider">Howest  goes usa</h3>
                    <div className="flex mr-auto ml-auto flex-wrap justify-center">
                        <Diary title={"Day 1"}
                               description={"The journey from Bruges to  San Francisco. It all started monday morning at 1AM and ended more then 24 hours later in nice city of San Francisco."}
                               image={"/images/howestUSA/day1/IMG_8392.jpg"} slug={'./USA/day1'}/>
                        <Diary title={"Day 2"}
                               description={"Day 2 was a great day. It started with the crossing of the Golden Gate Bridge after this we visited Palo Alto Networks then Microsoft and as last the Apple visitor center."}
                               image={"/images/howestUSA/day2/golden_bridge_far.jpg"} slug={'./USA/day2'}/>
                        <Diary title={"Day 3"}
                               description={"Starts with Belgium speakers that moved to the USA. In the afternoon we visited the barkley university. Day 4 we visited Odoo + and after to Oracle. "}
                               image={"/images/howestUSA/day3-4/morningView.jpeg"} slug={'./USA/day3-4'}/>
                        <Diary title={"Day 4"}
                               description={"There was not much planned for the last 3 days. The only 2 things on the schedule were Cloudflare and Alcatraz, so with all the free time we went to the movie theatre, baseball and so much more. "}
                               image={"/images/howestUSA/lastDays/bridge.jpeg"} slug={'./USA/lastDays'}/>

                    </div>
                </div>
            </main>
            <MainFooter/>
        </div>
    )
}