import { Helmet } from "react-helmet-async";
import CareersHero from "@/components/careers/CareersHero";
import OpenPositions from "@/components/careers/OpenPositions";
import ApplicationProcess from "@/components/careers/ApplicationProcess";

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Join Formacad | Shape Algeria's Digital Future</title>
        <meta name="description" content="Join Formacad's mission to transform education in Algeria. Explore career opportunities in tech, education, and business. Competitive benefits, professional growth, and social impact." />
        <meta name="keywords" content="careers Algeria, tech jobs Algeria, education jobs, Formacad careers, software engineer Algeria, digital transformation careers" />
        <link rel="canonical" href="/careers" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <CareersHero />
        <OpenPositions />
        <ApplicationProcess />
      </div>
    </>
  );
};

export default Careers;