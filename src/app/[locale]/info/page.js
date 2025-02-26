import ContentWrapper from "@/components/contentWrapper";
import Footer from "@/components/footer";
import {useTranslations} from 'next-intl';

export default function Info() {
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
