import categories from "../categories";

interface Props {
  onSelectCategory: (category: string) => void;
}

export const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelectCategory(e.target.value)}
    >
      <option value="All">All Categories</option>
      {categories.map(category => <option key={category} value={category}>{category}</option>)}
    </select>
  );
};
