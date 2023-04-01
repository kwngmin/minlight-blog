export default function AboutPage() {
  const careerData = [
    {
      company: "Kinterch",
      role: "UX/UI Designer",
      period: "2018.04 - 2022.03",
    },
    {
      company: "FiftyBridge",
      role: "UX/UI Designer",
      period: "2017.08 - 2018.04",
    },
  ];
  const educateData = [
    {
      school: "CodeStates",
      role: "Software Engineering Bootcamp(Frontend) Student",
      period: "2022.06 - 2022.12",
    },
  ];
  return (
    <article>
      <h2 className="text-3xl font-semibold text-slate-600 border-b py-8">
        I've worked at 👨🏻‍💻
      </h2>
      <ul>
        {careerData.map(({ company, role, period }) => (
          <li key={company} className="flex items-center h-16 border-b">
            <h3 className="font-bold text-xl w-1/6 text-black/70">{company}</h3>
            <p className="text-black/60">
              {role}
              <span className="border-l text-sm mx-2 border-slate-400" />
              {period}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
