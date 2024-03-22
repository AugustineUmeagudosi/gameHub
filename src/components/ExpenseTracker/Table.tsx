import { useState } from "react";
import { FormProps } from "./Form";

export const Table = ({ shoppingList, setShoppingList }: FormProps) => {
  const [filter, setFilter] = useState("All");

  const deleteItem = (index: number) => {
    setShoppingList(() =>
      shoppingList?.filter((item, itemIndex) =>
        index === itemIndex ? null : item
      )
    );
  };

  const filteredData = shoppingList?.filter((item) =>
    filter === "All" ? true : item.category === filter
  );

  return (
    <>
      {filteredData && (
        <>
          <div className="mb-3 mt-5">
            <select
              className="form-select"
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="All">All Categories</option>
              <option value="Groceries">Groceries</option>
              <option value="Utilities">Utilities</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          </div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Description</th>
                <th scope="col">Amount</th>
                <th scope="col">Category</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {filteredData?.map((item, index) => {
                return (
                  <tr key={index.toString()}>
                    <td key={item.description}>{item.description}</td>
                    <td>${item.amount.toFixed(2)}</td>
                    <td>{item.category}</td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => deleteItem(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td colSpan={2}>
                  <b>Total</b>
                </td>
                <td colSpan={2}>
                  $
                  {filteredData
                    .reduce((total, item) => total + Number(item.amount), 0)
                    .toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </>
  );
};
