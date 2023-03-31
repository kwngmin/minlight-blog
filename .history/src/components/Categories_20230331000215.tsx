type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <ul className="inline-flex justify-center mx-auto gap-2 mb-4 cursor-pointer bg-slate-100">
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
  );
}
