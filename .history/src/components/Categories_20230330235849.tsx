type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section>
      <ul className="flex justify-center gap-4 mb-4 cursor-pointer">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onClick(category)}
            className={`text-lg font-medium rounded-full bg-slate-100 px-4 py-2  ${
              category === selected &&
              "underline decoration-2 underline-offset-8"
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
