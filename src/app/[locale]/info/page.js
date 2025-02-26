import ContentWrapper from "@/components/contentWrapper";
import Footer from "@/components/footer";
import React from 'react';
import {useTranslations} from 'next-intl';
import {setRequestLocale} from 'next-intl/server';

export default function Info({params}) {
    const { locale } = React.use(params);

    //enable static rendering
    setRequestLocale(locale);

    const t = useTranslations('Info');
    return (
        <ContentWrapper>
            <main className="w-full h-full flex flex-col justify-between gap-10 text-black font-oxanium">
                {t('comingSoon')}
                <Footer />
            </main>
        </ContentWrapper>
    );
}
