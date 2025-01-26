import ContentWrapper from "@/components/contentWrapper";
import AnimatedLogo from "@/components/animatedLogo";
import ProjectCover from "@/components/projectCover";
import Footer from "@/components/footer";

const projects = [
  {
    cover: "/images/rocketEngineCatalogCover.png",
    title: "Rocket Engine Catalog",
    tags: ["Visual Development", "Interaction Design"],
    description: "An interface that eliminates the barrier between everyday people and the complex world of rocket engines.",
    link: "/projects/RocketEngineCatalog"
  },
  {
    cover: "/images/rocketEngineCatalogCover.png",
    title: "Another Project Title",
    tags: ["Tag1", "Tag2"],
    description: "Description for another project."
  },
  {
    cover: "/images/rocketEngineCatalogCover.png",
    title: "Yet Another Project Title",
    tags: ["Tag3", "Tag4"],
    description: "Description for yet another project."
  }
];


export default function Home() {
  return (
    <ContentWrapper bgColor="#F7F4EC">
      <main className="flex flex-col gap-10">
        {/* Introduction */}
        <section className="w-full flex justify-between
                    text-[#7E7E7E] text-base font-oxanium">
          <div className="w-[530px]">HI, I AM <strong className="text-[#363636]">KELLER WANG</strong>, AN UI/UX DESIGNER WITH METICULOUS EYES FOR DETAIL. CURRENTLY, I'M EXPLORING AND GROWING MY CRAFT AT <strong className="text-[#363636]">ARTCENTER COLLEGE OF DESIGN.</strong>
          </div>
          <div className="text-right ml-12 min-w-36">BASED IN<br />LOS ANGELES, CA</div>
        </section>
        <section className="flex flex-col gap-6">
          <AnimatedLogo />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {projects.map((project, index) => (
              <ProjectCover
                key={index}
                cover={project.cover}
                title={project.title}
                tags={project.tags}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </section>
        <Footer />
      </main>
    </ContentWrapper>
  );
}

