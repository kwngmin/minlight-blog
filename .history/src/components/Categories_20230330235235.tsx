type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section>
      <ul className="flex justify-center gap-8 mb-2 cursor-pointer">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onClick(category)}
            className={`text-lg font-medium px-4 py-1 rounded-full bg-slate-100 ${
              category === selected && "bg-slate-500"
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
