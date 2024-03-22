interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

export const ExpenseList = ({ expenses, onDelete }: Props) => {
    if(!expenses.length) return;
    return (
        <table className="table table-bordered">
            <thead>
                <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Category</th>
                <th></th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => (
                <tr key={expense.id}>
                    <td>{expense.description}</td>
                    <td>${expense.amount.toFixed(2)}</td>
                    <td>{expense.category}</td>
                    <td>
                    <button
                        className="btn btn-outline-danger"
                        onClick={() => onDelete(expense.id)}
                    >
                        Delete
                    </button>
                    </td>
                </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td>Total</td>
                    <td>${expenses.reduce((total, expense) => total += expense.amount, 0).toFixed(2)}</td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
    );
};
