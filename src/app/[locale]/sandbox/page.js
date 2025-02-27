import React from 'react';
import ContentWrapper from "@/components/contentWrapper";
import Content from "./content";

import { setRequestLocale } from 'next-intl/server';

export default function Sandbox({params}) {

    const { locale } = React.use(params);

    //enable static rendering
    setRequestLocale(locale);

    return (
        <ContentWrapper>
            <Content />
        </ContentWrapper>
    );
}

