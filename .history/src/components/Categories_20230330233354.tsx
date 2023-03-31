type props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
    
  }
};

export default function Categories({
  categories,
  selected,
  onClick,
}: props) {
  return <section>
    <ul>
        {categories.map(category => {
            <li key={category}>
                <button>{category}</button>
            </li>
        })}
    </ul>
  </section>;
}
