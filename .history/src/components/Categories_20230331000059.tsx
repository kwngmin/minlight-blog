type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section>
      <ul className="flex inline-flex justify-center gap-2 mb-4 cursor-pointer bg-slate-100">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onClick(category)}
            className={`text-lg font-medium rounded-full bg-slate-100 px-4 py-2  ${
              category === selected && "bg-slate-700 text-white"
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
