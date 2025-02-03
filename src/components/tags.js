export default function Tags({ tags }) {
    return (
        <div className="flex gap-2">
            {tags.map((tag, index) => (
                <span key={index} className="text-xs font-oxanium text-[#8C8C8C] 
                                        h-6 px-3 rounded border border-gray-400
                                        flex items-center justify-center">
                    {tag}
                </span>
            ))}
        </div>
    )
}