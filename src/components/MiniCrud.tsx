import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be atleast 3 characters long" }),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(1, { message: "Amount must be greater than 0" }),
  category: z.enum(["Groceries", "Utilities", "Entertainment"]),
});

type FormData = z.infer<typeof schema>;

interface Props {
  filterBy?: "Groceries" | "Utilities" | "Entertainment";
}

// const filterData = (data: FormData[], { filterBy }: Props) => {
//   return data.filter((item) => item.category === filterBy);
// };

export const MiniCrud = ({ filterBy }: Props) => {
  const [shoppingList, setShoppingList] = useState<FormData[]>();
  const [filter, setFilter] = useState(filterBy);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onFormSubmit = (data: FormData) => {
    shoppingList?.length
      ? setShoppingList([...shoppingList, data])
      : setShoppingList([data]);
    return reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            id="name"
            type="text"
            className="form-control"
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            type="number"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            className="form-select"
            aria-label="category"
            {...register("category")}
            id="category"
          >
            <option value="">Select Category</option>
            <option value="Groceries">Groceries</option>
            <option value="Utilities">Utilities</option>
            <option value="Entertainment">Entertainment</option>
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>

      <div className="mb-3 mt-5">
        <select className="form-select">
          <option onClick={() => setFilter(undefined)}>All Categories</option>
          <option onClick={() => setFilter("Groceries")}>Groceries</option>
          <option onClick={() => setFilter("Utilities")}>Utilities</option>
          <option onClick={() => setFilter("Entertainment")}>
            Entertainment
          </option>
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
            {
                !filter
                    ? shoppingList?.map((item, index) => {
                        return (
                        <tr key={index.toString()}>
                            <td key={item.description}>{item.description}</td>
                            <td>${item.amount.toFixed(2)}</td>
                            <td>{item.category}</td>
                            <td>
                            <button
                                type="button"
                                className="btn btn-outline-danger"
                                onClick={() => {
                                setShoppingList(() =>
                                    shoppingList.filter((item, itemIndex) =>
                                    index === itemIndex ? null : item
                                    )
                                );
                                }}
                            >
                                Delete
                            </button>
                            </td>
                        </tr>
                        );
                    })
                : shoppingList?.filter(item => item.category === filter)
                    .map((item, index) => {
                    return (
                    <tr key={index.toString()}>
                        <td key={item.description}>{item.description}</td>
                        <td>${item.amount.toFixed(2)}</td>
                        <td>{item.category}</td>
                        <td>
                        <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => {
                            setShoppingList(() =>
                                shoppingList.filter((item, itemIndex) =>
                                index === itemIndex ? null : item
                                )
                            );
                            }}
                        >
                            Delete
                        </button>
                        </td>
                    </tr>
                    );
                })
            }
          <tr>
            <td colSpan={2}>
              <b>Total</b>
            </td>
            <td colSpan={2}>
              $
              {shoppingList
                ? shoppingList
                    .reduce((total, item) => total + Number(item.amount), 0)
                    .toFixed(2)
                : 0}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
