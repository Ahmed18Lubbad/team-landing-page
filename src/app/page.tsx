import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Team from "@/components/Team";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import { getContent } from "@/lib/getContent";

// This page only arranges sections and passes each one its slice of
// content.json. To reorder sections, change the order below. To add a
// new section, write a component that takes typed content as a prop
// (see src/types/content.ts) and render it here.
export default function Home() {
  const content = getContent();

  return (
    <>
      <Header site={content.site} />
      <main>
        <Hero hero={content.hero} />
        <AboutUs about={content.about} />
        <Team team={content.team} />
        <CallToAction cta={content.cta} />
      </main>
      <Footer footer={content.footer} site={content.site} />
    </>
  );
}
