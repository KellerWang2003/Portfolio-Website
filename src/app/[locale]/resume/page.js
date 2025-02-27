'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ContentWrapper from '@/components/contentWrapper';

export default function ResumePage() {
  useEffect(() => {
    // Direct navigation to PDF
    window.location.href = '/Resume/ChineseResume.pdf';
  }, []);

  return (
    <ContentWrapper>
        redirecting...
    </ContentWrapper>
  );
} 