import HeroSection from "@/components/HeroSection";
import SectionOne from "@/components/SectionOne";
import SectionOther from "@/components/SectionOther";
import { infoSections } from "@/lib/data";

/**
 * Home Page
 * ---------
 * Main landing page layout that composes all homepage sections
 * in a fixed vertical order.
 *
 * Renders:
 * - A hero section for primary messaging and conversion
 * - A highlighted feature section with animated statistics
 * - Additional informational sections generated dynamically
 *   from a shared data source
 *
 * This file is responsible only for page composition and layout.
 * All animation, logic, and presentation details are handled
 * within the individual section components.
 */

export default function Home() {
  return (
    <div className=" mx-auto max-w-6xl space-y-15 md:space-y-30">
      {/* Hero Section */}
      <HeroSection/>
       {/* End of Hero Section */}

        {/* Section One */}
      <SectionOne/>
      {/* End of Section One */}

      {/* Remaining Two Section, lopping over the two section to dispay them  */}
      {infoSections.map((section, index) => (
        <SectionOther
          key={index}
          flip={section.flip}
          header={section.header}
          body={section.body}
          image={section.image}
        />
      ))}
       {/* End of Remaining Two Section */}
    </div>
  );
}
