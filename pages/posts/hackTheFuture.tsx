import {TopNav} from "../../components/navigation/topNav";
import React, {useEffect} from "react";
import {MainFooter} from "../../components/footer/mainFooter";
import {Slider} from "../../components/slider";
import Link from "next/link";
import wonPicture from "../../public/images/hackTheFuture/wonPicutre.jpg";
import snacks from "../../public/images/hackTheFuture/snacks.jpg"
import stage from "../../public/images/hackTheFuture/stage.jpg"
import hackTheFuture from "../../public/images/hackTheFuture/hackTheFuture.png"


export default function Blog() {
    useEffect(() => {
        console.log("triggered")
    })
    return (
        <div>
            <div className={"bg-zinc-700"}>
                <div className={"w-page90 md:w-page70 mr-auto ml-auto "}>
                    <TopNav page={"Blog"}/>
                </div>
            </div>
            <main className={"bg-zinc-700 text-white h-12/12"}>
                <div className={"flex w-page90 md:w-page70 mr-auto ml-auto flex-col max-w-page"}>
                    <h2 className={"w-fit self-center text-3xl mb-5 mt-5 font-vegan"}>Hack The Future</h2>
                    <Slider images={[
                        {name:"wonPicture", image:wonPicture},
                        {name:"hackTheFuture", image:hackTheFuture},
                        {name:"stacks", image:snacks},
                        {name:"stage", image:stage}
                    ]} />
                    <article className={"mb-5 flex flex-col"}>
                        <div className="flex justify-end mb-3">
                            <p>15 Nov 2022</p>
                        </div>


                        <h3 className={"text-2xl text-teal-600 mb-3 mt-3 "}>About</h3>
                        <p className={"text-s text-gray-300 mb-7"}>Hack The Future is an experience-driven hackathon both for
                            IT and creative students and its
                            backed by the CRONOS GROUP. When you registered for the hackathon you had to create a group
                            of 2 people with its own
                            name. I Joined up with <Link className={"border-b-2 border-b-teal-600"}
                               target="_blank" href="https://www.linkedin.com/in/buffel-aron/">Aron Buffel</Link> and together we created
                            the group Null.</p>

                        <div className={"flex justify-between flex-wrap"}>
                            <div className="mt-3 md:mt-0 md:w-5/12">
                                <h3 className={"text-2xl text-teal-600 mb-3"}>Challenge</h3>
                                <p className={"text-s text-gray-300"}>We picked the challenge Plant The Future by Optis.
                                    This challenge had 2 technologies
                                    JavaSpring and React. The challenge itself was very simple, create an Front-end
                                    application in react that
                                    communicate with an JavaScript backend API The challenge had its own theme ours was
                                    the following: Creating a web application where you
                                    can purchase a number of trees. This way you can reduce your
                                    own CO<sub>2</sub> emissions.</p>
                            </div>
                            <div className="mt-3 md:mt-0 md:w-5/12">
                                <h3 className={"text-2xl text-teal-600 mb-3"}>Event</h3>
                                <p className={"text-s text-gray-300"}>The event itself was well organized, the main
                                    event started at 9am with some welcome coffee
                                    and a briefing. After this the Hacking started for 2 Hours, after the 2 hours we had
                                    a well made lunch with
                                    soup, wraps ... When the lunch was done, we had another 2-3 hours of hacking. When
                                    the times was up we had to
                                    pitch our solutions and vote on the best one. As last there was an Award ceremony
                                    that announced all the winner from the challenges</p>
                            </div>
                        </div>
                        <h3 className={"text-2xl text-teal-600 mb-3 mt-10"}>Prizes</h3>
                        <p className={"text-s text-gray-300"}>There were 2 prizes per challenge, one price was for being
                            the most voted solution by other
                            students and the other was being best solution for the challenge Aron and me won one the
                            price for most voted solution and with this we both got an backpack
                            made out of cork.</p>

                    </article>
                </div>
            </main>
            <MainFooter/>
        </div>
    )
}
