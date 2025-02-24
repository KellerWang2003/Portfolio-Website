export default function Title({ title, className }) {
    return (
        <h1 className={`w-full text-3xl font-bold font-oxanium border-b border-current pb-2 ${className}`}>
            {title}
        </h1>
    )
}