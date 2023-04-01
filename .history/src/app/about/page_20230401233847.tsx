import AboutTable from "@/components/AboutTable";

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
  ];
  return (
    <>
      <AboutTable tableData={careerData} subject={`I've worked at`} />
      <AboutTable tableData={educateData} subject={`I've studied at`} />
    </>
  );
}
