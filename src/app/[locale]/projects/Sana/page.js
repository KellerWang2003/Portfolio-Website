import ContentWrapper from "@/components/contentWrapper";
import ProjectLanding from "@/components/projectPages/projectLanding";
import Footer from "@/components/footer";
import Content from "./content";

import React from 'react';
import { setRequestLocale } from 'next-intl/server';

const cover = "/images/Sana/media/image-13-2.png";

export default function Sana({ params }) {

    const { locale } = React.use(params);

    //enable static rendering
    setRequestLocale(locale);

    return (
        <ContentWrapper>
            <main className="flex flex-col gap-10 pb-12 text-black font-oxanium">
                <ProjectLanding
                    title="Sana"
                    tags={["UX Research", "UI Design", "Product Strategy"]}
                    description="An AI-assisted platform supporting oncology navigators by reducing administrative load and providing context-aware care for patients."
                    images1={cover}
                />
                <Content />
            </main>
            <Footer />
        </ContentWrapper>
    );
}
