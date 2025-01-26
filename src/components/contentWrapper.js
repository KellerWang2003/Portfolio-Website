export default function ContentWrapper({ children, bgColor = "#F7F4EC" }) {
    return (
        <div style={{ backgroundColor: bgColor }} 
             className={`flex-1 w-full rounded-xl overflow-scroll hide-scrollbar
                        border border-[#6E6E6E] 
                        p-6`}>
            {children}
        </div>
    );
}