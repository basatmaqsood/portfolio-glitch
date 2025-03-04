import Hero from "@/components/Hero";
import GlitcheLayout from "@/layouts/GlitcheLayout";

export const metadata = {
  title: "Basat Maqsood | Software Engineer | Full Stack Web Developer",
  description:
    "Software Engineer | Full Stack Web Developer | Expertise in MERN Stack. Passionate about building Responsive Web applications and solving complex business problems",
};

const page = () => {
  return (
    <GlitcheLayout>
      <Hero />
    </GlitcheLayout>
  );
};
export default page;
