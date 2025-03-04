import PageBanner from "@/components/PageBanner";
import GlitcheLayout from "@/layouts/GlitcheLayout";

import dynamic from "next/dynamic";
const RecentWorks = dynamic(() => import("@/components/RecentWorks"), {
  ssr: false,
});

export const metadata = {
  title: "Basat Maqsood | Software Engineer | Full Stack Web Developer",
  description:
    "Software Engineer | Full Stack Web Developer | Expertise in MERN Stack. Passionate about building Responsive Web applications and solving complex business problems",
};

const Portfolio = () => {
  return (
    <GlitcheLayout>
      <PageBanner pageName={"Portfolio"} pageLink={"portfolio"} />
      <RecentWorks />
    </GlitcheLayout>
  );
};
export default Portfolio;
