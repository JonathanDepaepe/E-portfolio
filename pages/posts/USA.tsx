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
                        {/*<Diary title={"Day 2"}
                               description={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores "}
                               image={"/images/howestUSA/day1/testday1.svg"} slug={'#'}/>
                        <Diary title={"Day 3"}
                               description={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores "}
                               image={"/images/howestUSA/day1/testday1.svg"} slug={'#'}/>
                        <Diary title={"Day 4"}
                               description={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores "}
                               image={"/images/howestUSA/day1/testday1.svg"} slug={'#'}/>
                        <Diary title={"Day 5"}
                               description={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores "}
                               image={"/images/howestUSA/day1/testday1.svg"} slug={'#'}/>
                        <Diary title={"Day 6"}
                               description={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores "}
                               image={"/images/howestUSA/day1/testday1.svg"} slug={'#'}/>
                        <Diary title={"Day 7"}
                               description={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores "}
                               image={"/images/howestUSA/day1/testday1.svg"} slug={'#'}/>*/}
                    </div>
                </div>
            </main>
            <MainFooter/>
        </div>
    )
}