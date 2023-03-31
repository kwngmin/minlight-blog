type props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
  setSelected: function name(params:type) {
    
  }
};

export default function Categories({
  categories,
  selected,
  onClick,
  setSelected,
}: props) {
  return <section>
    <ul>
        {categories.map(category => {
            <li>
                <button>{category}</button>
            </li>
        })}
    </ul>
  </section>;
}
