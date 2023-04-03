import AboutTable from "@/components/AboutTable";
import Hero from "@/components/Hero";

export const metadata = {
  title: {
    default: "About Me",
    template: "About Kwngmin's Career",
  },
};

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
      role: "Digital Media Design Major · Master of Design",
      period: "2013.03 - 2015.02",
    },
    {
      organization: "Kangnam University",
      role: "Visual Design Major · Bachelor of Fine Arts",
      period: "2005.03 - 2012.02",
    },
  ];
  const stacks = [
    "Next",
    "React",
    "Node",
    "Typescript",
    "Javascript",
    "HTML/CSS",
    "Git",
    "VS Code",
    "Figma",
  ];
  return (
    <>
      <Hero />
      <section className="my-8">
        <h2 className="text-center lg:text-left text-3xl font-semibold text-slate-500 py-8 lg:py-4">
          Stacks
        </h2>
        <ul className="flex lg:justify-start justify-center items-center py-4 lg:h-16 border-t gap-2 lg:px-8 flex-wrap content-center">
          {stacks.map((stack, index) => (
            <li
              className="font-semibold text-lg bg-slate-100 px-3 lg:px-4 py-1 rounded-full"
              key={index}
            >
              {stack}
            </li>
          ))}
        </ul>
      </section>
      <AboutTable tableData={careerData} subject={`Work Experience`} />
      <AboutTable tableData={educateData} subject={`Education`} />
    </>
  );
}
