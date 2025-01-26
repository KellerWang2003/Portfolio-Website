import Image from "next/image";
import Link from "next/link";

export default function ProjectCover({ cover, title, tags, description, link }) {
    const Content = (
        <div className="w-full flex flex-col gap-4 cursor-pointer">
            <div className="w-full">
                <Image src={cover} alt={title} width={1000} height={500} className="rounded-lg w-full"/>
            </div>
            <section className="flex flex-col gap-1">
                <div className="flex justify-between">
                    <h1 className="text-base font-oxanium text-black flex-1">{title}</h1>
                    <Tags tags={tags} />
                </div>
                <p className="text-base font-oxanium text-[#8C8C8C]">{description}</p>
            </section>
        </div>
    );

    return link ? (
        <Link href={link}>
            {Content}
        </Link>
    ) : (
        Content
    );
}

function Tags({ tags }) {
    return (
        <div className="flex gap-2">
            {tags.map((tag, index) => (
                <span key={index} className="text-xs font-oxanium text-[#8C8C8C] 
                                        h-6 px-3 rounded-full border border-gray-400
                                        flex items-center justify-center">
                    {tag}
                </span>
            ))}
        </div>
    )
}