import HeroSection from "@/components/HeroSection";
import SectionOne from "@/components/SectionOne";
import SectionOther from "@/components/SectionOther";
import { infoSections } from "@/lib/data";

export default function Home() {
  return (
    <div className=" mx-auto max-w-6xl space-y-15 md:space-y-30">
      {/* Hero Section */}
      <HeroSection/>
       {/* End of Hero Section */}

        {/* Section One */}
      <SectionOne/>
      {/* End of Section One */}

      {/* Remaining Two Section */}
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
