type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section>
      <ul className="flex justify-center gap-2 mb-4 cursor-pointer">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onClick(category)}
            className={`text-lg font-medium px-6 py-1 rounded-full  ${
              category === selected && "decoration-solid underline-offset-8"
            }`}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
