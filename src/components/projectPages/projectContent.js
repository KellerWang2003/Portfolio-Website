export default function ProjectContent({ order = "", leftChild, rightChild }) {
    return (
        <div className="w-full flex font-oxanium">
            {order === 'reverse' ? (
                <>
                    <div className="w-3/5">
                        {rightChild}
                    </div>
                    <div className="w-2/5 flex-1 pl-12">
                        {leftChild}
                    </div>
                </>
            ) : (
                <>
                    <div className="w-2/5 flex-1 pr-12">
                        {leftChild}
                    </div>
                    <div className="w-3/5">
                        {rightChild}
                    </div>
                </>
            )}
        </div>
    )
}