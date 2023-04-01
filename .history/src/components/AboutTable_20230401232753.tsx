export default function AboutTable() {
  return (
    <article>
      <h2 className="text-3xl font-semibold text-slate-600 border-b py-8">
        {`I've worked at`}
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
