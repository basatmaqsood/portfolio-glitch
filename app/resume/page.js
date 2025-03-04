import About from "@/components/About";
import CertificatesSection from "@/components/Certificates";
import PageBanner from "@/components/PageBanner";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import GlitcheLayout from "@/layouts/GlitcheLayout";

export const metadata = {
  title: "Basat Maqsood | Software Engineer | Full Stack Web Developer",
  description:
    "Software Engineer | Full Stack Web Developer | Expertise in MERN Stack. Passionate about building Responsive Web applications and solving complex business problems",
};

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
