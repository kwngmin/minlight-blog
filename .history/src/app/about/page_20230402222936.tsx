import AboutTable from "@/components/AboutTable";
import Hero from "@/components/Hero";

export default function AboutPage() {
  const careerData = [
    {
      organization: "Kinterch",
      role: "UX/UI Designer",
      period: "2018.04 - 2022.03",
    },
    {
      organization: "FiftyBridge",
      role: "UX/UI Designer",
      period: "2017.08 - 2018.04",
    },
  ];
  const educateData = [
    {
      organization: "CodeStates",
      role: "Software Engineering Bootcamp(Frontend) Student",
      period: "2022.06 - 2022.12",
    },
    {
      organization: "IDAS, Hongik Univeristy",
      role: "Digital Media Design Major | Master of Design",
      period: "2013.03 - 2015.02",
    },
    {
      organization: "Kangnam University",
      role: "Visual Design Major | Bachelor of Fine Arts",
      period: "2005.03 - 2012.02",
    },
  ];
  return (
    <>
      <Hero />
      <AboutTable tableData={careerData} subject={`Work Experience`} />
      {/* <AboutTable tableData={educateData} subject={`Education`} /> */}
    </>
  );
}
