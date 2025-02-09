export default function ProjectContent({ order = "", leftChild, rightChild }) {

    const MobileContent = (
        <div className="w-full min-h-[65dvh] flex flex-col gap-6 justify-between">
            {leftChild}
            {rightChild}
        </div>
    )


    const DesktopContent = (
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


    return (
        <>
            <div className="hidden md:block">{DesktopContent}</div>
            <div className="block md:hidden">{MobileContent}</div>
        </>
    )
}