export default function ContentWrapper({ children }) {
    return (
        <div className="bg-[#F7F4EC] flex-1 w-full rounded-xl overflow-scroll hide-scrollbar
                        ring-1 ring-[#6E6E6E] ring-inset
                        p-6">
            {children}
        </div>
    );
}