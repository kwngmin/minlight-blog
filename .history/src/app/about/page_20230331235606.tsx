export default function AboutPage() {
  const careerData = [
    {
      company: "CodeStates",
      role: "Software Engineering Bootcamp(Frontend) Student",
      period: "2022.06 - 2022.12",
    },
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
  return (
    <article>
      <h2 className="text-xl font-semibold text-slate-600">
        Featured Posts 🔥
      </h2>
      <ul>
        {careerData.map(({ company, role, period }) => (
          <li key={company} className="flex">
            <h3 className="font-bold">{company}</h3>
            <p>
              {role}
              <span />
              {period}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
