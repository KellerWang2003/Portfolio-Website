import ContentWrapper from "@/components/contentWrapper";
import HomeLanding from "@/components/homeLanding";
import ProjectCover from "@/components/projectCover";
import Footer from "@/components/footer";

const projects = [
  {
    cover: "/images/Rocket/rocketEngineCatalogCover.png",
    title: "Rocket Engine Catalog",
    year: "2024",
    tags: ["Visual Development", "Interaction Design"],
    description: "An interface that eliminates the barrier between everyday people and the complex world of rocket engines.",
    link: "/projects/RocketEngineCatalog"
  },
  {
    cover: "/images/Rocket/rocketEngineCatalogCover.png",
    title: "Inclusight",
    year: "2024",
    tags: ["User Research", "Market Research", "User Testing"],
    description: "Description for another project."
  },
  {
    cover: "/images/Rocket/rocketEngineCatalogCover.png",
    title: "Yet Another Project Title",
    year: "2024",
    tags: ["Tag3", "Tag4"],
    description: "Description for yet another project."
  }
];


export default function Home() {
  return (
    <ContentWrapper bgColor="#F7F4EC">
      <main className="flex flex-col">
          <HomeLanding />
          <h2 className="text-sm md:text-base font-oxanium text-[#404040] -mt-6 z-10">SELECTED WORKS</h2>
          <div className="flex flex-col gap-28 py-6 md:py-12">
            {projects.map((project, index) => (
              <ProjectCover
                key={index}
                number={index}
                cover={project.cover}
                year={project.year}
                title={project.title}
                tags={project.tags}
                description={project.description}
                link={project.link}
                isFirst={index === 0}
              />
            ))}
          </div>
        <Footer />
      </main>
    </ContentWrapper>
  );
}

