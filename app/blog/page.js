import PageBanner from "@/components/PageBanner";
import GlitcheLayout from "@/layouts/GlitcheLayout";

import dynamic from "next/dynamic";
const Blog = dynamic(() => import("@/components/Blog"), {
  ssr: false,
});

export const metadata = {
  title: "Basat Maqsood | Software Engineer | Full Stack Web Developer",
  description:
    "Software Engineer | Full Stack Web Developer | Expertise in MERN Stack. Passionate about building Responsive Web applications and solving complex business problems",
};

const BlogPage = () => {
  return (
    <GlitcheLayout>
      <PageBanner pageLink={"blog"} pageName={"Blog"} />
      <Blog />
    </GlitcheLayout>
  );
};
export default BlogPage;
