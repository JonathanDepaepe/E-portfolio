import React, {useEffect, useState} from 'react'
import Image from "next/image";
import useStore from "../../lib/store";
import wonPicture from "../../public/images/hackTheFuture/wonPicutre.jpg";
import snacks from "../../public/images/hackTheFuture/snacks.jpg"
import stage from "../../public/images/hackTheFuture/stage.jpg"

export const Slider = () => {
    const totalImages= 4;
    const [currentImage, setCurrentImage] = useState(1);
    function nextImage(){
        currentImage + 1 === totalImages +1?
            setCurrentImage(1):
            setCurrentImage(currentImage+1);

    }
    function prevImage(){
        currentImage - 1 === 0?
            setCurrentImage(4):
            setCurrentImage(currentImage-1);
    }

    function autoSlider(){
        setTimeout(()=>{
            let sessionState = useStore.getState();
            // @ts-ignore
            let slideDate = new Date(sessionState.slider);
            if (calcDateSeconds(new Date(Date.now()), slideDate) > 5){
                useStore.setState({ slider: Date.now() })
                nextImage()
            }
        },5000)

    }

    function calcDateSeconds(date1: Date, date2: Date){
        return (date1.valueOf() - date2.valueOf())/1000;
    }

    useEffect(()=>{
        autoSlider();
        console.log("here")})

    return (
        <div className="flex">

            <button type="button" onClick={()=>{prevImage();useStore.setState({ slider: Date.now() });}}
                    className="">
        <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-100" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
                                                                              stroke-linejoin="round" stroke-width="2"
                                                                              d="M15 19l-7-7 7-7"></path></svg>
            <span className="sr-only">Previous</span></span>
            </button>
            <div className="slider rounded-xl">
            <div className={"image" + currentImage +  " image-container"}>
                <Image src={wonPicture} priority={true} placeholder={"blur"} width={1000} height={600}
                       className="slide bg-zinc-700"
                       alt="Won picture"/>
                <Image src="/images/hackTheFuture/hackTheFuture.png" priority={true} placeholder={"blur"} width={1000} height={600}
                       className="slide bg-zinc-700"
                       alt="hacktefuturelogo"/>
                <Image src={snacks} priority={true} placeholder={"blur"}  width={1000} height={600}
                       className=" slide bg-zinc-700"
                       alt="snacks"/>
                <Image src={stage} priority={true} placeholder={"blur"} width={1000} height={600}
                       className="slide bg-zinc-700"
                       alt="stage"/>
            </div>
            </div>
            <button type="button" onClick={()=>{nextImage(); useStore.setState({ slider: Date.now() });}}
                    className=""
            >
        <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-100" fill="none" stroke="currentColor"
                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round"
                                                                              stroke-linejoin="round" stroke-width="2"
                                                                              d="M9 5l7 7-7 7"></path></svg>
            <span className="sr-only">Next</span>
        </span>
            </button>
        </div>
    )
}