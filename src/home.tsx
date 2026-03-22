import { AboutSection } from "./components/page/about-section";
import { EducationSection } from "./components/page/education-section";
import { FeedStory } from "./components/page/feed-story";
import { Heading } from "./components/page/heading";
import { ProjectSection } from "./components/page/project-section";

export default function Home() {
  return (
    <>
      <Heading />
      <FeedStory />
      <AboutSection />
      <EducationSection />
      <ProjectSection />
    </>
  )
}