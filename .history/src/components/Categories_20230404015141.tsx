type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className="flex justify-center">
      <ul className="inline-flex mx-auto gap-2 mb-4 cursor-pointer bg-zinc-100 rounded-full overflow-auto">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onClick(category)}
            className={`shrink-0 text-lg font-medium rounded-full px-5 py-2 text-black/70 lg:hover:bg-zinc-600 lg:hover:text-white ${
              category === selected && "bg-slate-600 text-white"
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
