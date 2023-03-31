type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section>
      <ul className="flex justify-center gap-8">
        {categories.map((category) => (
          <li
            key={category}
            onClick={() => onClick(category)}
            className="text-xl font-medium"
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
