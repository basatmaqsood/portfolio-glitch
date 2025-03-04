import ContactsInfo from "@/components/ContactsInfo";
import PageBanner from "@/components/PageBanner";
import GlitcheLayout from "@/layouts/GlitcheLayout";

export const metadata = {
  title: "Basat Maqsood | Software Engineer | Full Stack Web Developer",
  description:
    "Software Engineer | Full Stack Web Developer | Expertise in MERN Stack. Passionate about building Responsive Web applications and solving complex business problems",
};

const Contacts = () => {
  return (
    <GlitcheLayout>
      <PageBanner pageName={"Contacts"} pageLink={"contacts"} />
      <ContactsInfo />
    </GlitcheLayout>
  );
};
export default Contacts;
