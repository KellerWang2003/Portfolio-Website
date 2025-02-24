import ContentWrapper from "@/components/contentWrapper";
import ProjectLanding from "@/components/projectPages/projectLanding";


export default function DroneNet() {
    return (
        <ContentWrapper>
            <main>
                <ProjectLanding
                    title="DroneNet"
                    tags={["Research", "UI Design", "Prototyping"]}
                    description="DroneNet is an app designed for FPV (First-Person View) drone pilots to connect, share, and ensure the legality and safety of their flying locations. This platform addresses the unique challenges faced by FPV enthusiasts, providing a community-driven space where pilots can confidently explore new spots and share their experiences"
                    images1={"/images/DroneNet/dronenetCover.png"}
                />
            </main> 
        </ContentWrapper>
    )
}