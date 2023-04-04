import React, {FC, useEffect, useState} from 'react'
import useStore from "../../lib/store";
import Image from "next/image";


type Props = {
    images: any[]
}

export const Slider: FC<Props> = ({images}) => {
    const totalImages= images.length;
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
    useEffect(()=> {
        autoSlider();
    })
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
            <div className="slider ml-auto mr-auto mt-0 text-center overflow-hidden w-full rounded-xl">
                <div style={{width: totalImages*100+"%", left: `-${(currentImage -1)*100}%` }} className={"image" + currentImage +  " image-container relative"}>
                    {images.map((image ) => (
                        <Image key={image.name} src={image.image} placeholder={"blur"} priority={true}
                               className="slide bg-zinc-700 float-left m-0 p-0 relative" style={{width:100/totalImages+"%"}}
                               alt={image.name}/>
                    ))}

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