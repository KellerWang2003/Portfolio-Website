export default function ContentWrapper({ children, bgColor = "#F7F4EC", borderColor = "#6E6E6E" }) {
    return (
        <div style={{ backgroundColor: bgColor, borderColor: borderColor }} 
             className={`flex-1 w-full rounded-xl overflow-scroll hide-scrollbar
                        border p-6`}>
            {children}
        </div>
    );
}