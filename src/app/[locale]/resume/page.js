'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ContentWrapper from '@/components/contentWrapper';
import { useLocale } from 'next-intl';

export default function ResumePage() {
  const locale = useLocale();
  useEffect(() => {
    // Direct navigation to PDF
    window.location.href = locale === 'zh' ? '/Resume/王云天-简历-交互设计.pdf' : '/Resume/Keller Wang-Resume-UIUX Designer.pdf';
  }, [locale]);

  return (
    <ContentWrapper>
      redirecting...
    </ContentWrapper>
  );
} 