import ContentWrapper from "@/components/contentWrapper";
import ProjectLanding from "@/components/projectPages/projectLanding";
import Footer from "@/components/footer";
import Content from "./content";

import React from 'react';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

const cover = "/images/Elevate/elevateCoverFull.png";

export default function Elevate({params}) {

    const { locale } = React.use(params);

    //enable static rendering
    setRequestLocale(locale);

    const t = useTranslations('Elevate');

    return (
        <ContentWrapper>
            <main className="flex flex-col gap-10 pb-12 text-black font-oxanium">
                <ProjectLanding
                    title={t('title')}
                    tags={["User Research", "Market Research", "User Testing"]}
                    description={t('description')}
                    images1={cover}
                />
                <Content />
            </main>
            <Footer />
        </ContentWrapper>
    );
}


