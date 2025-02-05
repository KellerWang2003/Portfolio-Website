"use client";
import Navigation from "@/components/navigation";
import { usePathname } from 'next/navigation';

const backgroundColors = {
    'default': '#9EA4AE',
    '/projects/RocketEngineCatalog': '#353535'
};

export default function LayoutWrapper({ children }) {
    const pathname = usePathname();

    const getBgColor = () => {
        return backgroundColors[pathname] || backgroundColors.default;
    };

    return (
        <main className={`h-dvh w-full p-4 flex flex-col`} style={{ backgroundColor: getBgColor() }}>
            <Navigation />
            {children}
        </main>
    )
}