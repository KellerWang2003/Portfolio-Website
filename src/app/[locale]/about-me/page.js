import ContentWrapper from "@/components/contentWrapper";
import Footer from "@/components/footer";
import Content from "./content";
import React from 'react';
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

export default function AboutMe({ params }) {
    const { locale } = React.use(params);

    //enable static rendering
    setRequestLocale(locale);

    const t = useTranslations('AboutMe');
    return (
        <ContentWrapper>
            <Content />
        </ContentWrapper>
    );
}
