import ContentWrapper from "@/components/contentWrapper";

export default function Home() {
  return (
      <ContentWrapper>
        {/* Introduction */}
        <div className="w-full flex justify-between 
                    text-[#7E7E7E] text-base font-oxanium">
        <div className="w-1/3">HI, I AM <strong className="text-[#363636]">KELLER WANG</strong>, AN UI/UX DESIGNER WITH METICULOUS EYES FOR DETAIL. CURRENTLY, I'M EXPLORING AND GROWING MY ARTS AND CRAFT AT <strong className="text-[#363636]">ARTCENTER COLLEGE OF DESIGN.</strong>
        </div>
        <div className="text-right">BASED IN<br/>LOS ANGELES, CA</div>
        </div>
      </ContentWrapper>
  );
}

