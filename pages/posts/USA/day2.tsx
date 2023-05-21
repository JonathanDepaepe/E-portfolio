import {TopNav} from "../../../components/navigation/topNav";
import React from "react";
import {MainFooter} from "../../../components/footer/mainFooter";
import {Slider} from "../../../components/slider";
import goldenBridgeFar from "../../../public/images/howestUSA/day2/golden_bridge_far.jpg";
import appleVisitor from "../../../public/images/howestUSA/day2/apple_visitor.jpg";
//import microsoftCard from "../../../public/images/howestUSA/day2/microsoft_card.jpg"
import microsoftLogo from "../../../public/images/howestUSA/day2/microsoft_logo.jpg"
import viewMorning from "../../../public/images/howestUSA/day2/view_in_de_morning.jpg"
import onGoldenBridge from "../../../public/images/howestUSA/day2/view_in_de_morning.jpg"
import viewSanFran from "../../../public/images/howestUSA/day2/view_San_Fran.jpg"


export default function Day2() {
    return (
        <div>
            <div className={"bg-zinc-700"}>
                <div className={"w-page90 md:w-page70 mr-auto ml-auto "}>
                    <TopNav page={"Blog"}/>
                </div>
            </div>
            <main className={"bg-zinc-700 text-white h-12/12"}>
                <div className={"flex w-page90 md:w-page70 mr-auto ml-auto flex-col max-w-page"}>
                    <h2 className={"w-fit self-center text-3xl mb-5 mt-5 font-vegan tracking-wider"}>Second Day</h2>
                    <Slider images={[
                        {name:"viewMorning", image:viewMorning},
                        {name:"goldenBridgeFar", image:goldenBridgeFar},
                        {name:"onGoldenBridge", image:onGoldenBridge},
                        {name:"microsoftLogo", image:microsoftLogo},
                        //{name:"microsoftCard", image:microsoftCard},
                        {name:"appleVisitor", image:appleVisitor},
                        {name:"viewSanFran", image:viewSanFran},
                    ]}/>
                    <article className={"mb-5 flex flex-col"}>
                        <div className="flex justify-end mb-3">
                            <p>4 Apr. 2022</p>
                        </div>


                        <h3 className={"text-2xl text-teal-600 mb-3 mt-3 "}>Intro</h3>
                        <p className={"text-s text-gray-300 mb-7"}>Day 2 was a great day. It started with the crossing of the Golden Gate Bridge after this we visited Palo Alto Networks then Microsoft and as last the Apple visitor center. </p>
                        <div className={"flex justify-between flex-wrap"}>
                            <div className="mt-3 md:mt-0 md:w-5/12">
                                <h3 className={"text-2xl text-teal-600 mb-3"}>Golden Gate Bridge and Palo Alto Networks</h3>
                                <p className={"text-s text-gray-300"}>The day started at 7.30 in the morning. We took a bus to the start of Golden Gate bridge and from there we crossed the bridge on foot.
                                    The view in the morning was amazing and the bridge itself was massive and amazing as well. After we all crossed the bridge we got into the bus and went to Palo Alto Networks.
                                    When we arrived we all went into a meeting room for a short intro of the company and also 3 persons that talked about how they joined the company. After all this information we went on a tour around the campus.
                                    Here you could see how it was to work for a big company (Own fitness room, 4 different types of restaurants, play room, special offices for remote employers that don&apos;t need a desk)
                                </p>
                            </div>
                            <div className="mt-3 md:mt-0 md:w-5/12">
                                <h3 className={"text-2xl text-teal-600 mb-3"}>Microsoft and Apple</h3>
                                <p className={"text-s text-gray-300"}>After all the great information we had about Palo Alto we went to Microsoft. Here we met up with a person who was born in Belgium (<a href="https://www.linkedin.com/in/nills/">Nills</a>) and now lives in the USA.
                                Nill started with giving information about himself and how his career was build and how we could improve ours. For example he told us that we need to focus on networking and always be positive to everything.
                                After this another employee (<a href="https://www.linkedin.com/in/emilioreyesleblanc/">Emilio</a>) told us how his career was and gave us information about low-code solutions and the Microsoft Power Platform.
                                Then Nill ended with talking about Github Copilot and the future of Copilot within the Microsoft space. For example how it would be on Powerpoint or Word. At the end of the day we also visited the Apple visitor center.
                                This was just a nice Apple store with an AR table that turned alive with an Ipad.</p>
                            </div>
                        </div>
                        <h3 className={"text-2xl text-teal-600 mb-3 mt-10"}>Conclusion</h3>
                        <p className={"text-s text-gray-300"}>The day was a very interesting day with a lot of useful information. It was nice knowing what Microsoft next plans were and what they are currently working on. We also got some information on how Microsoft started with investing in OpenAI.
                        It was sad that the days are so short. There was so much fun and interesting information and the time flew by. </p>
                    </article>
                </div>
            </main>
            <MainFooter/>
        </div>
    )
}
