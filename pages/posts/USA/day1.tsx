import {TopNav} from "../../../components/navigation/topNav";
import React from "react";
import {MainFooter} from "../../../components/footer/mainFooter";
import {Slider} from "../../../components/slider";
import SunsSet from "../../../public/images/howestUSA/day1/IMG_8409.jpg";
import JonathanSeaView from "../../../public/images/howestUSA/day1/IMG_8406.jpg";
import YarneAirplane from "../../../public/images/howestUSA/day1/IMG_8387.jpg"
import TopOfStreet from "../../../public/images/howestUSA/day1/IMG_8392.jpg"



export default function Day1() {
    return (
        <div>
            <div className={"bg-zinc-700"}>
                <div className={"w-page90 md:w-page70 mr-auto ml-auto "}>
                    <TopNav page={"Blog"}/>
                </div>
            </div>
            <main className={"bg-zinc-700 text-white h-12/12"}>
                <div className={"flex w-page90 md:w-page70 mr-auto ml-auto flex-col max-w-page"}>
                    <h2 className={"w-fit self-center text-3xl mb-5 mt-5 font-vegan tracking-wider"}>First Day</h2>
                    <Slider images={[
                        {name:"JonathanSeaView", image:JonathanSeaView},
                        {name:"YarneAirplane", image:YarneAirplane},
                        {name:"SunsSet", image:SunsSet},
                        {name:"TopOfStreet", image:TopOfStreet},
                    ]}/>
                    <article className={"mb-5 flex flex-col"}>
                        <div className="flex justify-end mb-3">
                            <p>3 Apr. 2022</p>
                        </div>


                        <h3 className={"text-2xl text-teal-600 mb-3 mt-3 "}>Intro</h3>
                        <p className={"text-s text-gray-300 mb-7"}>Day 1 started very early and was a long day. We had to be in Bruges at 1AM to get our flight at 9am. The flight was 11 hours and when we arrived the time went 9 hours back.
                            In San Fransisco we walked around and used the public transport.</p>

                        <div className={"flex justify-between flex-wrap"}>
                            <div className="mt-3 md:mt-0 md:w-5/12">
                                <h3 className={"text-2xl text-teal-600 mb-3"}>Getting to San Francisco</h3>
                                <p className={"text-s text-gray-300"}>It all started monday morning at 1AM, Here we took a bus in Bruges at 1AM to go to Kortrijk to pick up the rest of the group.
                                    When everyone arrived we drove to Paris to get a flight to San Francisco. The flight itself was at 9AM and was an 11 hour flight.
                                    When flying we got Breakfast, a little snack and then again a breakfast. This is because we went 9 hours back and made it morning again. I mainly slept in the airplane and watched some movies.
                                     </p>
                            </div>
                            <div className="mt-3 md:mt-0 md:w-5/12">
                                <h3 className={"text-2xl text-teal-600 mb-3"}>San Francisco</h3>
                                <p className={"text-s text-gray-300"}>When arriving to the hostel after landing, the lectors had to get all the keys for the rooms. After waiting a couple of minutes they came to the conclusion that the
                                rooms were not ready yet. So instead we went to a nearby mobile provider to get the people that did not have a sim yet a sim card. After this we took one of the oldest streetcars to go to the pier.
                                Here on the pier we took a group picture and after this we were free to do whatever we wanted.</p>
                            </div>
                        </div>
                        <h3 className={"text-2xl text-teal-600 mb-3 mt-10"}>Conclusion</h3>
                        <p className={"text-s text-gray-300"}>It was a hard and long day but it was worth it. The public transportation was okay but is not that good as Belgium so this said a lot about the public transportation.</p>
                    </article>
                </div>
            </main>
            <MainFooter/>
        </div>
    )
}
