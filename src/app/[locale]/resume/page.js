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

    // Add a delay before navigation to ensure PDF opens
    const timer = setTimeout(() => {
      router.back();
    }, 500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <ContentWrapper>
      <div className="flex items-center justify-center min-h-[50vh]">
        Redirecting...
      </div>
    </ContentWrapper>
  );
} 