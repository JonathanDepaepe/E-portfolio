import React, {FC} from 'react'
import Link from "next/link";
import Image, {StaticImageData} from "next/image";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

type Props = {
    title: string,
    description: string,
    codeLanguages: Array<IconDefinition>,
    image: StaticImageData,
    slug: string
    gitHub: string,
    websiteLink: string
}

export const ProjectList: FC<Props> = ({title,description, codeLanguages,image,slug, gitHub, websiteLink}) => {
    return (
        <>
            <Link className="flex justify-center rounded-lg " href={slug}>
                <Image src={image} className="rounded-xl -mr-6 z-10 mt-auto mb-auto" alt={slug} width={200} height={112} />
                <div className="bg-zinc-600 pl-14 flex flex-col rounded-xl hover:shadow-2xl">
                    <h3 className="text-xl text-center font-bold">{title}</h3>
                    <p className="text-zinc-300 text-s ml-2 mr-2 mt-1.5">{description}</p>
                </div>
            </Link>
        </>
    )
}