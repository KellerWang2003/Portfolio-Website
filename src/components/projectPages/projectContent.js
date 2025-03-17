export default function ProjectContent({ order = "", leftChild, rightChild, className }) {
    return (
        <div className={`w-full flex flex-col gap-6 lg:gap-0 lg:flex-row lg:justify-between font-oxanium ${className}`}>
            <div className={`w-full lg:w-2/5 
                ${order === "mobileReverse" ? "order-2 lg:pl-12" : order === "reverse" ? "lg:pl-12 lg:order-2" : "lg:pr-12 lg:order-1"} flex-1`}>
                {leftChild}
            </div>
            <div className={`w-full lg:w-3/5 
                ${order === "mobileReverse" ? "order-1" : order === "reverse" ? "lg:order-1" : "lg:order-2"}`}>
                {rightChild}
            </div>
        </div>
    )
}