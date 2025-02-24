export default function ProjectContent({ order = "", leftChild, rightChild, className }) {

    const MobileContent = (
        <div className={`w-full flex flex-col gap-8 justify-between ${className}`}>
            {leftChild}
            {rightChild}
        </div>
    )


    const DesktopContent = (
        <div className={`w-full flex font-oxanium ${className}`}>
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
            <div className="hidden lg:block">{DesktopContent}</div>
            <div className="block lg:hidden">{MobileContent}</div>
        </>
    )
}