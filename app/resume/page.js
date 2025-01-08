import About from "@/components/About";
import CertificatesSection from "@/components/Certificates";
import PageBanner from "@/components/PageBanner";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import GlitcheLayout from "@/layouts/GlitcheLayout";

import dynamic from "next/dynamic";


const Resume = () => {
  return (
    <GlitcheLayout>
      <PageBanner pageLink={"resume"} pageName={"Resume"} />
      <About />
      <CertificatesSection/>
      <Skills />
      <Services />
    </GlitcheLayout>
  );
};
export default Resume;
