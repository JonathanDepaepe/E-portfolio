import React, {FC} from 'react'
import Link from "next/link";
import Image from "next/image";

type Props = {
    title: string,
    description: string,
    image: string,
    slug: string
}

export const Diary: FC<Props> = ({title,description,image,slug}) => {
    return (
        <>
            <Link className="w-80 h-90 flex flex-col rounded-lg mt-5 mb-5 ml-4" href={slug}>
                <Image src={image} className="rounded-xl w-10/12 ml-auto mr-auto -mb-14 z-10" alt={slug} width={200} height={112} />
                <div className="bg-zinc-600 pt-16  flex flex-col h-full rounded-xl hover:shadow-2xl">
                    <h3 className="text-xl text-center font-bold">{title}</h3>
                    <p className="text-zinc-300 text-s ml-2 mr-2 mt-1.5">{description}</p>
                    <button className="w-full rounded-bl-xl rounded-br-xl bg-teal-600 text-xl pt-3 pb-3 mt-3 hover:bg-teal-700">READ</button>
                    {/*<button className="w-9/12 ml-auto mr-auto mb-3 rounded-xl bg-teal-600 text-xl pt-3 pb-3 mt-3 hover:bg-teal-700">READ</button>*/}
                </div>
            </Link>
        </>
    )
}