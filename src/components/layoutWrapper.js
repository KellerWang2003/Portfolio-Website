"use client";
import Navigation from "@/components/navigation";
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const backgroundColors = {
    'default': '#9EA4AE',
    '/projects/RocketEngineCatalog': '#353535'
};

export default function LayoutWrapper({ children }) {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const getBgColor = () => {
        return backgroundColors[pathname] || backgroundColors.default;
    };

    return (
        <main className={`h-dvh w-full p-[6px] md:p-2 flex flex-col`} style={{ backgroundColor: getBgColor() }}>
            <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {children}
        </main>
    )
}