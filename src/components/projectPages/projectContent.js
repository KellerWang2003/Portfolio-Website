export default function ProjectContent({ leftChild, rightChild }) {
    return (
        <div className="w-full flex font-oxanium">
            <div className="w-2/5 flex-1 pr-16">
                {leftChild}
            </div>
            <div className="w-3/5">
                {rightChild}
            </div>
        </div>
    )
}