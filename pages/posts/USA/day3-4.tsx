import {TopNav} from "../../../components/navigation/topNav";
import React from "react";
import {MainFooter} from "../../../components/footer/mainFooter";
import {Slider} from "../../../components/slider";

import morningView from "../../../public/images/howestUSA/day3-4/morningView.jpeg";
import berkley from "../../../public/images/howestUSA/day3-4/berkley.jpeg";
import berkley2 from "../../../public/images/howestUSA/day3-4/berkley-02.jpeg";
import odooSign from "../../../public/images/howestUSA/day3-4/odooSign.jpeg";
import oracle from "../../../public/images/howestUSA/day3-4/oracle.jpeg";



export default function Day34() {
    return (
        <div>
            <div className={"bg-zinc-700"}>
                <div className={"w-page90 md:w-page70 mr-auto ml-auto "}>
                    <TopNav page={"Blog"}/>
                </div>
            </div>
            <main className={"bg-zinc-700 text-white h-12/12"}>
                <div className={"flex w-page90 md:w-page70 mr-auto ml-auto flex-col max-w-page"}>
                    <h2 className={"w-fit self-center text-3xl mb-5 mt-5 font-vegan tracking-wider"}>Third and Fourth Day</h2>
                    <Slider images={[
                        {name:"morningView", image:morningView},
                        {name:"berkley", image:berkley},
                        {name:"berkley2", image:berkley2},
                        {name:"odooSign", image:odooSign},
                        {name:"oracle", image:oracle},
                    ]}/>
                    <article className={"mb-5 flex flex-col"}>
                        <div className="flex justify-end mb-3">
                            <p>5-6 Apr. 2022</p>
                        </div>


                        <h3 className={"text-2xl text-teal-600 mb-3 mt-3 "}>Intro</h3>
                        <p className={"text-s text-gray-300 mb-7"}>Day 3 started with 3 speakers that told how there expirations was moving from Belgium to the USA and told some information about themself. In the afternoon we visited the barkley university. Day 4 we visited Odoo + and after to Oracle. </p>
                        <div className={"flex justify-between flex-wrap"}>
                            <div className="mt-3 md:mt-0 md:w-5/12">
                                <h3 className={"text-2xl text-teal-600 mb-3"}>Alumni event</h3>
                                <p className={"text-s text-gray-300"}>Day 3 started with a walk to the alumni event. Here we got invited by <a href="https://www.linkedin.com/company/storiedco/">Storied</a> in downtown San Francisco. The CEO of Storied (<a href="https://www.linkedin.com/in/ACoAAAAlfvQBKncbXrImDCNEd9GnJuJjikt7Abo">Lee Ali Shirani</a>)
                                    told us all about storied and how he started his company. After this two Belgium alumni (<a href="https://www.linkedin.com/in/ACoAAAHm9z4BMl5PHCQC_J-UFKpjzVDPcgNbMP4">Christian Vuerings</a> and <a href="https://www.linkedin.com/in/ACoAAAUFu38BrumDFWV2TePylP9uJWCz3mqqt_A">Thomas Degry</a>) told us about their expirations and how they got to where they are now.
                                    Christian told us all about about how to create and maintaining design. Thomas told us how he created his career, how he applied for big companies and how he created his animations. Most of the <a
                                        href="https://stripe.com/">Stripe</a> animations are made by Thomas so this was very interesting.
                                </p>
                            </div>
                            <div className="mt-3 md:mt-0 md:w-5/12">
                                <h3 className={"text-2xl text-teal-600 mb-3"}>Odoo and Oracle</h3>
                                <p className={"text-s text-gray-300"}>Day 4 started with a bus ride to Odoo. Odoo is a Belgian company that offers open ERP software. <a href="https://www.linkedin.com/in/ACoAAABs5S4B6NT0rDkmt19z7aESNlI4sPYyUSI">Fabrice Henrion</a> gave us an engaging explanation of Odoo and an interesting demo of the Odoo platform.
                                    After all this interesting information we got a free meal from Odoo and then we headed towards Oracle. The Oracle visit started with a welcome by <a href="https://www.linkedin.com/in/ACoAACmXoy0BpCQbyJJgTUmHZsNSuiusLjr1iCQ">Scott Lang</a>, who also explained about Oracle Academy. Then, <a
                                        href="https://www.linkedin.com/in/ACoAAAAUie0BTIsBcfRkifKAKbp1n_s24-zxwfI">Ashish Mohindroo</a> provided an informative session about low code and Oracle APEX with is their low code solution, followed by <a
                                        href="https://www.linkedin.com/in/samarlotia?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAA6R0sB8qMLz4b3a6aO1ar6erG5KX8xeyI">Samar Lotia</a>  who gave an interesting explanation of Oracle Analytics Cloud.</p>
                            </div>
                        </div>
                        <h3 className={"text-2xl text-teal-600 mb-3 mt-10"}>Conclusion</h3>
                        <p className={"text-s text-gray-300"}>Both days were very interesting. Learned a lot about the big companies and how different it is how people work there then here in Belgium. I will for sure check out Low code and how this can help me in the future, take a deeper dive into css animations and maybe checkout the Oracle academy.</p>
                    </article>
                </div>
            </main>
            <MainFooter/>
        </div>
    )
}
