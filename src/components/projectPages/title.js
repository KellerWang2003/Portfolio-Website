export default function Title({ title, className, dark = false }) {
    return (
        <h1 className={`w-full text-center text-lg md:text-2xl font-oxanium ${dark ? 'bg-[#2E2E2E]' : 'bg-[#F2EFE7] border border-[#BFBFBF]'} rounded-md  py-3 ${className}`}>
            {title}
        </h1>
    )
}