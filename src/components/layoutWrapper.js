"use client";
import Navigation from "@/components/navigation";
import Cursor from "@/components/cursor";
import { usePathname } from 'next/navigation';
import { CursorProvider } from '@/context/cursorContext';
import { MenuProvider } from '@/context/menuContext';

const backgroundColors = {
    'default': '#9EA4AE',
    '/projects/RocketEngineCatalog': '#353535',
    '/zh/projects/RocketEngineCatalog': '#353535'
};

export default function LayoutWrapper({ children }) {
    const pathname = usePathname();

    const getBgColor = () => {
        return backgroundColors[pathname] || backgroundColors.default;
    };

    return (
        <CursorProvider>
            <MenuProvider>
                <main className={`h-[100vh] w-full p-[6px] md:p-2 flex flex-col`} style={{ backgroundColor: getBgColor() }}>
                    <Navigation />
                    <Cursor backgroundColor={getBgColor()} />
                        {children}
                </main>
            </MenuProvider>
        </CursorProvider>
    );
}