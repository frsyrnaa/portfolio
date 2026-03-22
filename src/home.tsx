import { AboutSection } from "./components/page/about-section";
import { EducationSection } from "./components/page/education-section";
import { FeedStory } from "./components/page/feed-story";
import { Heading } from "./components/page/heading";

export default function Home() {
  return (
    <>
      <Heading />
      <FeedStory />
      <AboutSection />
      <EducationSection />
    </>
  )
}