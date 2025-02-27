'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ContentWrapper from '@/components/contentWrapper';

export default function ResumePage() {
  const router = useRouter();

  useEffect(() => {
    // Create a hidden anchor element
    const link = document.createElement('a');
    link.href = '/Resume/ChineseResume.pdf';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    // Append to body, click it, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Navigate back
    router.back();
  }, [router]);

  return (
    <ContentWrapper>
      <div className="flex items-center justify-center min-h-[50vh]">
        redirecting...
      </div>
    </ContentWrapper>
  );
} 