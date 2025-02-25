'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ContentWrapper from '@/components/contentWrapper';
export default function ResumePage() {
  const router = useRouter();

  useEffect(() => {
    // Open PDF in new tab
    window.open('/Resume/ChineseResume.pdf', '_blank');
    // Go back to previous page
    router.back();
  }, [router]);

  return (
    <ContentWrapper>
        redirecting...
    </ContentWrapper>
  );
} 